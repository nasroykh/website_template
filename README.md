# Website Template

A modern, high-performance e-commerce website template built with Next.js 16.1.6, React 19, Tailwind CSS 4, and Jotai for state management.

## Features

- **Modern Tech Stack**: Built on the latest Next.js 16.1.6 and React 19.
- **State Management**: Atomic state management with **Jotai** and persistent storage support.
- **Shopping Cart**: Fully functional cart UI with sidebar, item management, and total calculations.
- **Instant Search**: Command-style search menu (Cmd+K) with interactive results.
- **Styling**: Tailwind CSS 4 with OKLCH color space for rapid and efficient styling.
- **Typography**: Outfit font family via Google Fonts with optimal loading.
- **Animations**: Smooth entrance and interaction animations using Motion (`motion/react`).
- **SEO Ready**: Comprehensive metadata, dynamic sitemaps, robots.txt, and JSON-LD structured data built-in.
- **PWA Support**: Web manifest configured for mobile-readiness.
- **Accessibility**: Semantic HTML and accessible UI components using Base UI and Radix UI primitives.
- **Modular Architecture**: Component-based structure for easy maintenance and scalability.

## Tech Stack

- [Next.js 16.1.6](https://nextjs.org/) - React framework with App Router
- [React 19.2.4](https://react.dev/) - UI library
- [Jotai](https://jotai.org/) - Primitive and flexible state management
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS with OKLCH colors
- [Motion](https://motion.dev/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - Modern UI components
- [Tabler Icons](https://tabler.io/icons) - Icon library
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- [TypeScript 5.9.3](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Local Development

1.  **Install dependencies:**

    ```bash
    pnpm install
    ```

2.  **Run the development server:**

    ```bash
    pnpm dev
    ```

3.  **Open [http://localhost:3000](http://localhost:3000) with your browser.**

### Docker Deployment (Production)

```bash
# Build and run with docker-compose
docker-compose up -d

# View logs
docker-compose logs -f
```

**Configuration:** Set `NEXT_PUBLIC_DOMAIN_NAME` in `.env` file (see `.env.example`).

For detailed Docker documentation, see [DOCKER.md](./DOCKER.md).

## Project Structure

- `app/`: App Router core (pages, layouts, SEO generators)
- `components/`:
  - `ui/`: 56 atomic shadcn/ui components
  - `layout/`: Structural parts (Header, Footer, SearchMenu)
  - `cart/`: Shopping cart sidebar and logic
  - `sections/`: Modular page modules (Hero, FeaturedProducts)
  - `products/`: Product-specific client components
- `lib/`:
  - `store/`: Jotai atoms for global state (Cart, UI)
  - `hooks/`: Custom React hooks (e.g., `useIsHydrated`)
  - `utils.ts`: Tailwind class merger and helpers
- `public/`: Static assets (og-image.png, logo.png, icons)

## Docker Support

This template includes production-ready Docker configuration:

- **Multi-stage Dockerfile** optimized for Next.js with pnpm
- **Standalone output mode** for minimal image size (~150-200MB)
- **Security hardening** with non-root user
- **Health checks** and resource limits configured
- **docker-compose** for easy orchestration

See [DOCKER.md](./DOCKER.md) for comprehensive deployment guide.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Jotai Documentation](https://jotai.org/docs/introduction)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs/v4-beta)
- [Docker Deployment Guide](./DOCKER.md)
