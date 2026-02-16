# Docker Deployment Guide

This guide covers Docker deployment for the Website Template application.

## Quick Start (Production Only)

```bash
# Build and run in production mode
make build
make up

# View logs
make logs

# Stop containers
make down
```

## Configuration

### Environment Variables

Create a `.env` file in the project root (or copy from `.env.example`):

```env
NEXT_PUBLIC_DOMAIN_NAME=example.com
PORT=3000
```

**Important:** `NEXT_PUBLIC_DOMAIN_NAME` is required at build time for proper SEO and metadata generation.

### Build Arguments

The Dockerfile accepts build arguments:

- `NEXT_PUBLIC_DOMAIN_NAME`: Domain name for the application

Example:

```bash
docker build --build-arg NEXT_PUBLIC_DOMAIN_NAME=yourdomain.com -t website-template .
```

## Docker Image (`Dockerfile`)

**Multi-stage build optimized for:**

- Minimal image size (~150-200MB)
- Security hardening (non-root user)
- Layer caching optimization
- Next.js standalone output mode

**Stages:**

1. **deps**: Install production dependencies
2. **builder**: Build the Next.js application
3. **runner**: Minimal runtime with only necessary files

## Manual Docker Commands

### Build Production Image

```bash
docker build \
  --build-arg NEXT_PUBLIC_DOMAIN_NAME=example.com \
  -t website-template:latest \
  .
```

### Run Production Container

```bash
docker run -d \
  --name website-template \
  -p 3000:3000 \
  -e NEXT_PUBLIC_DOMAIN_NAME=example.com \
  website-template:latest
```

## Health Checks

Production containers include health checks via `docker-compose.yml`:

- Checks every 30s
- 40s startup grace period
- Endpoint: `http://localhost:3000`

## Resource Limits

Configured in `docker-compose.yml`:

- **CPU Limit:** 1.0 cores
- **Memory Limit:** 1GB
- **CPU Reservation:** 0.5 cores
- **Memory Reservation:** 512MB

## Optimization Features

### 1. Layer Caching

Dependencies are installed in a separate layer before copying source code, optimizing build times on code changes.

### 2. pnpm Store Caching

Uses BuildKit cache mounts for pnpm store:

```dockerfile
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile
```

### 3. Multi-Stage Build

Separates build and runtime environments, reducing final image size.

### 4. Standalone Output

Next.js standalone output mode includes only necessary files.

### 5. Security Hardening

- Non-root user (uid: 1001, gid: 1001)
- Minimal Alpine base image
- Security-focused file permissions

## Troubleshooting

### Build Failures

**Issue:** Cache manifest import error on first build
Normal on first build. The error message `importing cache manifest from website-template:latest` appears because Docker tries to use the previous build as cache. Safe to ignore.

**Issue:** pnpm install fails

```bash
docker builder prune -a
docker compose build --no-cache
```

## Production Deployment Checklist

- [ ] Set `NEXT_PUBLIC_DOMAIN_NAME` to production domain
- [ ] Configure reverse proxy (nginx, Traefik, Caddy)
- [ ] Set up SSL/TLS certificates
- [ ] Review resource limits
- [ ] Enable Docker restart policies
- [ ] Test health check endpoints

## Advanced Usage

### Multi-Architecture Builds

```bash
make buildx-setup
make buildx-build
```

## Security Best Practices

1. **Non-root user:** Application runs as user `nextjs` (uid: 1001)
2. **Minimal base image:** Uses Alpine Linux
3. **No secrets in image:** Environment variables provided at runtime
4. **Security scanning:** Run `make scan` if Docker Scout is installed

## Monitoring

### View Container Stats

```bash
make stats
```

### View Logs

```bash
make logs
```

## Cleanup

```bash
make down
make clean
make prune
```

## CI/CD Integration

### GitHub Actions Example

```yaml
- name: Build Docker Image
  run: |
    docker build \
      --build-arg NEXT_PUBLIC_DOMAIN_NAME=${{ secrets.DOMAIN_NAME }} \
      -t website-template:${{ github.sha }} \
      .
```

## Additional Resources

- [Next.js Docker Documentation](https://nextjs.org/docs/deployment#docker-image)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [pnpm in Docker](https://pnpm.io/docker)
