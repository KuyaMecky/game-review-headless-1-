<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.1-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/WordPress-Headless_CMS-21759B?style=for-the-badge&logo=wordpress" alt="WordPress" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

# Casino Review Platform

A high-performance, SEO-optimized casino review platform built with **Next.js 14 App Router** and **WordPress as a headless CMS**. Features server-side rendering, dynamic content management, affiliate link tracking, and a modern dark-themed UI.

## Features

- **Headless WordPress CMS** &mdash; Manage casino data, blog posts, and site settings from WordPress via WPGraphQL
- **Server-Side Rendering (SSR)** &mdash; Fast page loads with full SEO support
- **Dynamic Casino Reviews** &mdash; Rich review pages with ratings, pros/cons, bonuses, and payment methods
- **Affiliate Link Tracking** &mdash; No-cache redirect system via `/go/[slug]` routes
- **Casino Comparison Table** &mdash; Side-by-side comparison of casinos with key metrics
- **Blog System** &mdash; Full blog with WordPress content, categories, and Yoast SEO integration
- **Responsive Design** &mdash; Mobile-first dark theme with Tailwind CSS
- **Framer Motion Animations** &mdash; Smooth page transitions and interactive elements
- **Dynamic SEO** &mdash; Per-page meta tags, Open Graph, Twitter Cards, sitemap, and robots.txt

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 3.4 |
| **Animations** | Framer Motion 11 |
| **CMS** | WordPress + WPGraphQL |
| **SEO** | Yoast SEO + WPGraphQL Yoast Addon |
| **Deployment** | PM2 + Nginx (AWS Lightsail) |

## Project Structure

```
├── app/
│   ├── components/        # Shared UI components
│   │   ├── BonusBadge.tsx
│   │   ├── CasinoCard.tsx
│   │   ├── ComparisonTable.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Providers.tsx
│   │   └── StarRating.tsx
│   ├── about/             # About page
│   ├── blog/              # Blog listing & individual posts
│   ├── contact/           # Contact page
│   ├── go/[slug]/         # Affiliate redirect handler
│   ├── how-we-rate/       # Rating methodology
│   ├── privacy-policy/    # Privacy policy
│   ├── responsible-gambling/
│   ├── reviews/[slug]/    # Individual casino reviews
│   ├── terms/             # Terms & conditions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage
│   ├── robots.ts          # Dynamic robots.txt
│   └── sitemap.ts         # Dynamic sitemap
├── lib/
│   ├── api.js             # GraphQL fetch helper
│   └── graphql.js         # GraphQL queries
├── docs/                  # Documentation & blog drafts
├── ecosystem.config.js    # PM2 configuration
├── deploy.sh              # Deployment script
└── nginx-config.conf      # Nginx reverse proxy config
```

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: 20 LTS)
- **WordPress** instance with [WPGraphQL](https://www.wpgraphql.com/) plugin installed
- **WPGraphQL Yoast SEO Addon** (optional, for SEO integration)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/KuyaMecky/game-review-headless-1-.git
   cd game-review-headless-1-
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and set your WordPress URL:

   ```env
   NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-domain.com
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

The project includes production deployment configs for **PM2 + Nginx** on a Linux server:

```bash
# Build the standalone output
npm run build

# Start with PM2
pm2 start ecosystem.config.js

# Configure Nginx as reverse proxy (see nginx-config.conf)
```

See [`deploy.sh`](deploy.sh) for the full automated deployment script.

## WordPress Setup

Your WordPress instance needs the following plugins:

| Plugin | Purpose |
|--------|---------|
| **WPGraphQL** | Exposes WordPress data via GraphQL API |
| **WPGraphQL Yoast SEO Addon** | Adds Yoast SEO data to GraphQL |
| **Custom Casino Plugin** | Adds casino review fields (rating, bonus, payment methods, etc.) |

### Required GraphQL Queries

The platform uses these main queries defined in [`lib/graphql.js`](lib/graphql.js):

- `GET_ALL_CASINOS` &mdash; Fetch all casino listings for homepage
- `GET_CASINO_BY_SLUG` &mdash; Fetch individual casino review data
- `GET_ALL_POSTS` &mdash; Fetch blog posts
- `GET_POST_BY_SLUG` &mdash; Fetch individual blog post

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_WORDPRESS_URL` | WordPress GraphQL endpoint base URL | Yes |

## License

This project is licensed under the MIT License &mdash; see the [LICENSE](LICENSE) file for details.
