# Website Template

A modern, high-performance e-commerce website template built with Next.js 16.1.6, React 19, Tailwind CSS 4, and Motion (Framer Motion).

## Features

- **Modern Tech Stack**: Built on the latest Next.js 16.1.6 and React 19.
- **Styling**: Tailwind CSS 4 with OKLCH color space for rapid and efficient styling.
- **Typography**: Outfit font family via Google Fonts with optimal loading.
- **Animations**: Smooth entrance and interaction animations using Motion (`motion/react`).
- **Performance**: Optimized with `next/image` for fast page loads and Core Web Vitals.
- **SEO Ready**: Comprehensive metadata, dynamic sitemaps (with route group support), robots.txt, and JSON-LD structured data (Organization & WebSite schema) built-in.
- **PWA Support**: Web manifest configured for mobile-readiness and app-like experience.
- **Toast Notifications**: Integrated Sonner for user feedback (newsletter subscriptions, etc.).
- **Accessibility**: Semantic HTML and accessible UI components using Base UI and Radix UI primitives.
- **Modular Architecture**: Component-based structure for easy maintenance and scalability.

## Tech Stack

- [Next.js 16.1.6](https://nextjs.org/) - React framework with App Router
- [React 19.2.4](https://react.dev/) - UI library
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS with OKLCH colors
- [Motion](https://motion.dev/) - Animation library (successor to Framer Motion)
- [shadcn/ui](https://ui.shadcn.com/) - Base Nova components with Base UI & Radix primitives
- [Tabler Icons](https://tabler.io/icons) - Icon library
- [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- [TypeScript 5.9.3](https://www.typescriptlang.org/) - Type safety

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

2.  **Run the development server:**

    ```bash
    npm run dev
    # or
    pnpm dev
    # or
    yarn dev
    ```

3.  **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Project Structure

- `app/`: App Router pages and layouts
  - `layout.tsx`: Root layout with SEO, fonts, and Toaster
  - `page.tsx`: Home page
  - `products/page.tsx`: Products collection page
  - `not-found.tsx`: Custom 404 page
  - `sitemap.ts`: Dynamic sitemap generator (supports route groups)
  - `robots.ts`: SEO robots configuration
  - `manifest.ts`: PWA manifest
- `components/`: Reusable UI components
  - `ui/`: shadcn/ui components (56 components)
  - `layout/`: Layout components (Header, Footer, Layout wrapper)
  - `sections/`: Page sections (Hero, Categories, FeaturedProducts)
  - `JsonLd.tsx`: Structured data component
- `lib/`: Utility functions (`cn()` for class merging)
- `public/`: Static assets (images, icons, og-image.png, logo.png)
- `.agents/skills/`: AI agent skills for best practices

## Skills Used

This project follows best practices from:

- `vercel-react-best-practices`: Performance optimizations.
- `ui-ux-pro-max`: Modern design principles.
- `tailwind-4`: Latest CSS features.
- `react-19`: Modern React patterns.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
