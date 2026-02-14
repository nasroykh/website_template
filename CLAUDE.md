# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server
pnpm build        # Production build (also runs TypeScript checking)
pnpm lint         # ESLint
pnpm start        # Start production server
```

No test framework is configured.

## Architecture

**Next.js 16 App Router** with React 19, Tailwind CSS v4, and shadcn/ui (base-nova style, Tabler icons).

### Key patterns

- **Server Components by default.** Only add `"use client"` for interactive components (motion animations, event handlers, forms with state).
- **Layout wrapper**: `components/layout/Layout.tsx` wraps pages with `Header` + `Footer`. Used in page components, not in `app/layout.tsx`.
- **Section components**: Page content is built from `components/sections/*.tsx` modules composed in page files.
- **SEO infrastructure**: `app/layout.tsx` has full metadata (OG, Twitter, robots) + JSON-LD via `components/JsonLd.tsx` using `schema-dts`. Sitemap auto-generates from filesystem in `app/sitemap.ts` (includes route group traversal). Domain configured via `NEXT_PUBLIC_DOMAIN_NAME` env var.
- **Animations**: Use `motion/react` (the Motion library, not framer-motion). Import as `import { motion } from "motion/react"`.
- **Styling**: Tailwind v4 with `@theme` block in `globals.css`. Color tokens use OKLCH in CSS variables (`:root` / `.dark`). Use `cn()` from `lib/utils.ts` for class merging.
- **Toast notifications**: Sonner is integrated. `<Toaster />` in root layout. Use `import { toast } from "sonner"` in client components.
- **shadcn/ui config**: `components.json` — style `base-nova`, icon library `tabler`, aliases map `@/components/ui`. Add components via `pnpm dlx shadcn@latest add <component>`.

### Environment

Requires `NEXT_PUBLIC_DOMAIN_NAME` (see `.env.example`). Used by metadata, robots.txt, and sitemap generation.

### Font setup

Uses **Outfit** as the primary sans-serif font loaded via `next/font/google` in `app/layout.tsx`. The `--font-sans` CSS variable is mapped in `globals.css` `@theme` block to Tailwind's `font-sans`. Font display set to `swap` for optimal performance.

### Images

External images require `remotePatterns` in `next.config.ts`. Currently allows `placehold.co`. Always use `next/image` with `fill` + `sizes` or explicit dimensions. Social sharing images (og-image.png, logo.png) located in `/public`.

### Pages

- `/` - Home page with hero, categories, and featured products
- `/products` - Full product collection page
- `/not-found` - Custom 404 page with animations
