# FieldProof Landing Page

FieldProof is a landing page for a field employee verification product. It explains GPS proof, real-user face authentication on device, field task management, platform support, pricing, and early access.

## Tech Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open the site at:

```text
http://localhost:3000
```

On Windows PowerShell, if `npm run dev` is blocked by script execution policy, use:

```bash
npm.cmd run dev
```

## Scripts

```bash
npm run dev
```

Starts the local Next.js development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs the configured lint command.

## Project Structure

```text
app/
  globals.css      Global styles and Tailwind imports
  layout.tsx       Root layout and SEO metadata
  page.tsx         Landing page section order

components/
  Navbar.tsx
  Hero.tsx
  TrustSection.tsx
  PlatformsSection.tsx
  ProblemSection.tsx
  SolutionSection.tsx
  FeaturesSection.tsx
  HowItWorks.tsx
  Screenshots.tsx
  PricingSection.tsx
  FAQSection.tsx
  FinalCTA.tsx
  Footer.tsx
```

## Screenshots

The screenshot section currently uses placeholders. Add real product screenshots to:

```text
public/images/
```

Then replace the placeholder blocks in `components/Screenshots.tsx` with `next/image` components.

## Deployment

This project can be deployed to any platform that supports Next.js, including Vercel, Netlify, or a Node.js server.

Build before deploying:

```bash
npm run build
```
