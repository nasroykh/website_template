# Multi-stage Dockerfile for Next.js 16.1.6 with pnpm
# Optimized for production with minimal image size and security hardening

# ============================================
# Stage 1: Dependencies
# Install only production dependencies for caching optimization
# ============================================
FROM node:22-alpine AS deps

# Install necessary system dependencies for native modules
RUN apk add --no-cache libc6-compat

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy dependency manifests for optimal layer caching
COPY package.json pnpm-lock.yaml* ./

# Install dependencies with frozen lockfile for reproducibility
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --prod

# ============================================
# Stage 2: Builder
# Build the Next.js application
# ============================================
FROM node:22-alpine AS builder

# Install system dependencies
RUN apk add --no-cache libc6-compat

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy dependency manifests
COPY package.json pnpm-lock.yaml* ./

# Install all dependencies (including dev dependencies for build)
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# Copy application source code
COPY . .

# Build arguments for environment variables (build-time)
# NEXT_PUBLIC_* variables must be available at build time
ARG NEXT_PUBLIC_DOMAIN_NAME
ENV NEXT_PUBLIC_DOMAIN_NAME=$NEXT_PUBLIC_DOMAIN_NAME

# Disable Next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Build the Next.js application
# Next.js will automatically use standalone output mode if configured
RUN pnpm build

# ============================================
# Stage 3: Runner (Production)
# Minimal runtime image with only necessary files
# ============================================
FROM node:22-alpine AS runner

WORKDIR /app

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Set production environment
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only necessary files from builder
# Copy public assets
COPY --from=builder /app/public ./public

# Copy Next.js standalone output (if using output: 'standalone' in next.config)
# Otherwise copy .next directory
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user
USER nextjs

# Expose port (default Next.js port)
EXPOSE 3000

# Set default port
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Health check to ensure container is healthy
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})" || exit 1

# Start the Next.js application
CMD ["node", "server.js"]
