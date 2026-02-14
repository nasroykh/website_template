# LLM Resource: Website Template Guide

This file serves as a comprehensive entry point for LLMs (like Claude, ChatGPT, or Gemini) to understand, utilize, and extend this website template. It outlines the core architecture, styling conventions, and optimization patterns used in the project.

## Project Overview

- **Framework**: Next.js 16.1.6 (App Router)
- **Runtime**: React 19.2.4
- **Styling**: Tailwind CSS v4 with OKLCH color space
- **Typography**: Outfit font (Google Fonts, optimized with `display: swap`)
- **Animations**: Motion v12 (`motion/react`)
- **UI Components**: shadcn/ui Base Nova (Base UI + Radix UI Primitives)
- **Icons**: Tabler Icons v3 (`@tabler/icons-react`)
- **Notifications**: Sonner toast library
- **Type Safety**: TypeScript 5.9.3 (Strict Mode)

## Directory Structure

- `/app`: App Router core
  - `layout.tsx`: Root layout with SEO metadata, fonts (Outfit), Toaster
  - `page.tsx`: Home page (Hero + Categories + Featured Products)
  - `products/page.tsx`: Full product collection page
  - `not-found.tsx`: Custom animated 404 page
  - `robots.ts`: SEO robots.txt generator
  - `sitemap.ts`: Dynamic sitemap with route group support
  - `manifest.ts`: PWA web manifest
- `/components`:
  - `/ui`: 56 shadcn/ui components (Button, Card, Input, Dialog, Toast, etc.)
  - `/layout`: Header (sticky nav), Footer (with newsletter form), Layout wrapper
  - `/sections`: HeroSection, CategoriesSection, FeaturedProductsSection
  - `JsonLd.tsx`: Structured data component for schema.org
- `/lib`: Utility functions (`cn()` for Tailwind class merging)
- `/public`: Static assets (og-image.png, logo.png, favicon, SVG icons)
- `.agents/skills`: AI agent skills for SEO, React, TypeScript, UI/UX best practices

## Core Implementation Patterns

### 1. Styling (Tailwind v4)

We use Tailwind CSS v4. Styles are defined in `app/globals.css` using the `@theme` block.

- **Rule**: Prefer standard CSS variables defined in `:root` and `.dark` for color tokens.
- **Rule**: Use `@apply` sparingly in `@layer base` for global element resets.

### 2. Components

Components are "use client" only when interactive (animations, forms, event handlers).

- **Hero/Sections**: Use `motion/react` for entrance animations (e.g., `initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}`).
- **Images**: Always use `next/image` with proper `fill` or `width/height`. Add `remotePatterns` in `next.config.ts` if using external sources.
- **Forms**: Wrap inputs in `<form>` with proper `onSubmit` handlers. Use Sonner for user feedback.
- **Toasts**: Import `{ toast }` from "sonner". `<Toaster />` is in root layout.

### 3. SEO & Metadata

The template is SEO-preconfigured.

- **Metadata**: Managed in `app/layout.tsx`. Uses `title.template` pattern, OpenGraph, Twitter Cards.
- **Structured Data**: Uses `schema-dts` for JSON-LD. The `JsonLd` component is in `components/JsonLd.tsx`. Includes Organization and WebSite schemas.
- **Sitemap**: Dynamically generated in `app/sitemap.ts` by crawling the `app/` directory. Supports route groups `(marketing)` traversal.
- **Social Images**: og-image.png (1200×630) and logo.png in `/public`.

## Instructions for Extension

### Adding a New Section

1. Create a component in `components/sections/[SectionName].tsx`.
2. Use `motion/react` for entrance animations.
3. Use semantic HTML (`<section>`).
4. Import and place it in `app/page.tsx`.

### Customizing Theming

1. Update OKLCH color values in `app/globals.css` under `:root` and `.dark`.
2. Update font configurations in `app/layout.tsx` (using `next/font/google`). Current: Outfit with `display: swap`.

### Performance Optimization

- Run `npm run build` to verify bundle sizes and static generation.
- Ensure all external images have `alt` tags and proper `sizes` attributes for responsive loading.

## Critical Dependencies

- `motion`: For animations.
- `class-variance-authority`: For component variants.
- `@base-ui/react`: For unstyled, accessible UI primitives.
- `sonner`: For toast notifications.

---

_This document is optimized for LLM context processing._
