# LLM Resource: Website Template Guide

This file serves as a comprehensive entry point for LLMs (like Claude, ChatGPT, or Gemini) to understand, utilize, and extend this website template. It outlines the core architecture, styling conventions, and optimization patterns used in the project.

## Project Overview

- **Framework**: Next.js 16.1.6 (App Router)
- **Runtime**: React 19.2.4
- **State Management**: Jotai (Atomic state)
- **Styling**: Tailwind CSS v4 with OKLCH color space
- **Typography**: Outfit font (Google Fonts, optimized with `display: swap`)
- **Animations**: Motion v12 (`motion/react`)
- **UI Components**: shadcn/ui Base Nova (Base UI + Radix UI Primitives)
- **Icons**: Tabler Icons v3 (`@tabler/icons-react`)
- **Notifications**: Sonner toast library
- **Type Safety**: TypeScript 5.9.3 (Strict Mode)
- **Package Manager**: pnpm
- **Containerization**: Docker with multi-stage builds, standalone output

## Directory Structure

- `/app`: App Router core
  - `layout.tsx`: Root layout with SEO metadata, fonts, Toaster
  - `page.tsx`: Home page (Hero + Categories + Featured Products)
  - `products/[id]/page.tsx`: Dynamic product details (Async Params pattern)
  - `not-found.tsx`: Custom animated 404 page
  - `sitemap.ts`: Dynamic sitemap with route group support
- `/components`:
  - `/ui`: 56 shadcn/ui components
  - `/cart`: CartSidebar component and logic
  - `/layout`: Header (sticky nav), SearchMenu, Footer
  - `/sections`: HeroSection, CategoriesSection, FeaturedProductsSection
- `/lib`:
  - `/store`: Jotai atoms (`cartStore.ts`)
  - `/hooks`: Custom utility hooks (`useIsHydrated.ts`)
  - `utils.ts`: `cn()` for Tailwind class merging
- `/public`: Static assets (og-image.png, logo.png, PWA manifest)

## Core Implementation Patterns

### 1. State Management (Jotai)

We use **Jotai** for global state.

- **Atoms**: Defined in `lib/store/`. Use `atomWithStorage` for persistence.
- **Actions**: Defined as write-only atoms (e.g., `addToCartAtom`) to encapsulate logic.
- **Consumption**: Use `useAtomValue` for reading, `useSetAtom` for writing, and `useAtom` for both.

### 2. Async Dynamic APIs (Next.js 15+)

In server components/metadata, `params` and `searchParams` are Promises.

- **Pattern**: `export default async function Page({ params }: { params: Promise<{ id: string }> }) { const { id } = await params; ... }`

### 3. Styling & Components

- **Tailwind v4**: Styles are in `app/globals.css` using `@theme`.
- **Hydration Safety**: Use the `useIsHydrated` hook to prevent SSR/CSR mismatch when rendering state-dependent UI (like cart badges).
- **Interactive Elements**: Use `nativeButton={false}` on `Button` components when using the `render` prop with non-button elements (Link, span).

### 4. SEO & Metadata

- **Metadata**: Managed in `app/layout.tsx`. Supports OpenGraph and Twitter Cards.
- **Structured Data**: JSON-LD via `components/JsonLd.tsx`.
- **Sitemap**: Crawls `app/` directory automatically.

## Docker Deployment

### Configuration Files

- **Dockerfile**: Multi-stage production build (deps → builder → runner)
- **docker-compose.yml**: Production orchestration
- **.dockerignore**: Build context optimization
- **.env.example**: Environment variable template

### Key Docker Features

- **Standalone Output**: `output: "standalone"` in `next.config.ts` reduces image to ~150-200MB
- **Multi-stage Build**: Separates dependencies, build, and runtime for optimal caching
- **pnpm Optimization**: BuildKit cache mounts for fast dependency installation
- **Security**: Non-root user (nextjs:1001), Alpine base, minimal attack surface
- **Health Checks**: Built-in container health monitoring
- **Resource Limits**: CPU and memory constraints for production stability

### Deployment Commands

```bash
# Production
make build
make up

# Build only
make build-prod NEXT_PUBLIC_DOMAIN_NAME=example.com
```

### Environment Variables (Required)

- `NEXT_PUBLIC_DOMAIN_NAME`: Domain name for SEO and metadata (build-time + runtime)
- `PORT`: Application port (default: 3000)

## Instructions for Extension

### Adding a New Persistence Atom

1. Add to `lib/store/`.
2. Use `atomWithStorage(key, initialValue)`.
3. Create derived atoms for complex calculations to minimize re-renders.

### Adding a New Dynamic Route

1. Create `app/[route]/[id]/page.tsx`.
2. Ensure `params` is typed as `Promise` and awaited.
3. composable with `Layout` component from `@/components/layout/Layout`.

### Docker Customization

1. **Custom base image**: Modify `FROM` in Dockerfile (maintain Alpine for size)
2. **Additional dependencies**: Add to `apk add` in deps/builder stages
3. **Build optimization**: Adjust cache mounts and layer ordering
4. **Environment variables**: Add to docker-compose.yml environment section
5. **Multi-architecture**: Use `docker buildx` for arm64/amd64 support

---

_This document is optimized for LLM context processing._
