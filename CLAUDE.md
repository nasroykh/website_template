# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Local Development

```bash
pnpm dev          # Start dev server
pnpm build        # Production build (also runs TypeScript checking)
pnpm lint         # ESLint
pnpm start        # Start production server
```

### Docker Commands

```bash
make build              # Build production image
make up                 # Start production container
make down               # Stop containers
make logs               # View logs
```

No test framework is configured.

## Architecture

**Next.js 16 App Router** with React 19, Tailwind CSS v4, and shadcn/ui (base-nova style, Tabler icons).

### Key patterns

- **Server Components by default.** Only add `"use client"` for interactive components (motion animations, event handlers, forms with state).
- **State Management**: Uses **Jotai** for atomic state. Atoms are defined in `lib/store/*.ts`. Use `useAtom`, `useAtomValue`, or `useSetAtom` in client components.
- **Async Dynamic APIs (Next.js 15/16)**: In server components (like `page.tsx` or `generateMetadata`), dynamic APIs like `params` and `searchParams` are Promises and must be awaited before accessing properties.
- **Layout wrapper**: `components/layout/Layout.tsx` wraps pages with `Header` + `Footer` + `CartSidebar`. Used in page components, not in `app/layout.tsx`.
- **Section components**: Page content is built from `components/sections/*.tsx` modules composed in page files.
- **SEO infrastructure**: `app/layout.tsx` has full metadata (OG, Twitter, robots) + JSON-LD via `components/JsonLd.tsx` using `schema-dts`. Sitemap auto-generates from filesystem in `app/sitemap.ts`.
- **Animations**: Use `motion/react`. Import as `import { motion } from "motion/react"`.
- **Styling**: Tailwind v4 with `@theme` block in `globals.css`. Color tokens use OKLCH. Use `cn()` from `lib/utils.ts` for class merging.
- **Toast notifications**: Sonner is integrated. `<Toaster />` in root layout. Use `import { toast } from "sonner"`.

### Environment

Requires `NEXT_PUBLIC_DOMAIN_NAME` (see `.env.example`). Used by metadata, robots.txt, and sitemap generation.

### Docker Configuration

- **Dockerfile**: Multi-stage build optimized for Next.js standalone output
- **docker-compose.yml**: Production orchestration with health checks and resource limits
- **.dockerignore**: Optimized build context exclusions
- **output: "standalone"** in `next.config.ts` enables minimal production image (~150-200MB)
- Security: Non-root user (nextjs:1001), Alpine base, read-only where possible
- See `DOCKER.md` for comprehensive deployment guide

### Font setup

Uses **Outfit** as the primary sans-serif font loaded via `next/font/google` in `app/layout.tsx`. Font display set to `swap`.

### Images

Always use `next/image` with `fill` + `sizes` or explicit dimensions. Social sharing images in `/public`.

### Pages

- `/` - Home page with hero, categories, and featured products
- `/products` - Full product collection page
- `/products/[id]` - Dynamic product detail page (Async Params pattern)
- `/men`, `/women`, `/accessories`, `/sale` - Category collection pages
- `/contact`, `/shipping`, `/returns`, `/faq`, `/privacy`, `/terms` - Informational and customer service pages
- `/not-found` - Custom 404 page with animations
