# PristineFlow — Premium Cleaning Company Website

A modern, premium cleaning company website demo built for client presentation by **The Golden Brain Services (TGBS)**.

## 🌟 Overview

PristineFlow is a complete, production-ready website showcasing a premium cleaning service brand. Built with Next.js 16, TypeScript, Tailwind 4, and Framer Motion — featuring cinematic design, smooth animations, and full accessibility compliance.

### Live Demo
- **Development**: `http://localhost:3000`
- **Preview**: Available via Claude Browser tools

---

## 🎨 Design System

### Brand Identity
- **Name**: PristineFlow
- **Tagline**: "Where Clean Meets Calm"
- **Palette**: Emerald (#059669), Cream (#FDF8F3), Ink (#18181B)
- **Typography**: Cormorant Garamond (display), Inter (body), JetBrains Mono (technical)

### Design Tokens (CSS Custom Properties)
```css
--color-emerald: #059669;
--color-emerald-light: #10B981;
--color-emerald-dark: #047857;
--color-cream: #FDF8F3;
--color-cream-dark: #F5ECE3;
--color-ink: #18181B;
--color-ink-light: #27272A;
```

---

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 14 |
| Icons | Lucide React + Inline SVGs |
| Fonts | Next.js Font Optimization |
| Images | Next.js Image + Openverse CC-licensed |

---

## 📁 Project Structure

```
pristineflow/
├── .claude/
│   └── launch.json          # Dev server config
├── public/
│   └── img/                 # Optimized images (40 assets)
├── src/
│   ├── app/
│   │   ├── globals.css      # Design tokens + utilities
│   │   ├── layout.tsx       # Root layout + SEO metadata
│   │   ├── page.tsx         # Homepage composition
│   │   ├── not-found.tsx    # 404 page
│   │   ├── robots.ts        # robots.txt generation
│   │   └── sitemap.ts       # sitemap.xml generation
│   ├── components/
│   │   ├── ui/              # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Section.tsx
│   │   ├── sections/        # Page sections (14 total)
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustBand.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── BeforeAfter.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── forms/
│   │   │   └── BookingForm.tsx
│   │   └── seo/
│   │       └── StructuredData.tsx
│   └── lib/
│       ├── config.ts        # Brand configuration
│       └── data.ts          # All content data (700+ lines)
├── package.json
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
└── AGENTS.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
cd /Users/a/Desktop/Claude/pristineflow
npm install
```

### Development

```bash
npm run dev
# Opens http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

---

## 📱 Website Sections (14 Total)

| # | Section | Component | Key Features |
|---|---------|-----------|--------------|
| 1 | **Header** | `Header.tsx` | Sticky glass nav, mobile drawer, WhatsApp float, Back-to-top |
| 2 | **Hero** | `Hero.tsx` | Cinematic background, dual CTAs, trust indicators, scroll indicator |
| 3 | **Trust Band** | `TrustBand.tsx` | 6 animated trust cards with hover effects |
| 4 | **Services** | `Services.tsx` | 10 expandable cards with images, benefits, CTAs |
| 5 | **Why Choose Us** | `WhyChooseUs.tsx` | Split layout, floating stat cards, 6 value props |
| 6 | **How It Works** | `HowItWorks.tsx` | 4-step timeline, connecting line, alternating layout |
| 7 | **Before/After** | `BeforeAfter.tsx` | Drag/touch/keyboard accessible comparison slider |
| 8 | **Gallery** | `Gallery.tsx` | Category filter, lightbox with keyboard/touch nav, download |
| 9 | **Booking** | `BookingForm.tsx` | 5-step form (service→property→preferences→contact→review) |
| 10 | **Pricing** | `Pricing.tsx` | 3-tier cards, feature lists, quote CTAs |
| 11 | **Testimonials** | `Testimonials.tsx` | Auto-play carousel, dots, keyboard/touch nav, pause on interact |
| 12 | **FAQ** | `FAQ.tsx` | 8 accordion items, native `<details>`, animated height |
| 13 | **Final CTA** | `FinalCTA.tsx` | Dark background, gradient accents, benefit grid, dual CTAs |
| 14 | **Footer** | `Footer.tsx` | 5-column layout, newsletter form, social links |

---

## ♿ Accessibility (WCAG 2.2 AA)

- ✅ Semantic HTML5 structure
- ✅ ARIA labels, roles, and live regions
- ✅ Keyboard navigation for all interactive elements
- ✅ Focus visible states with custom rings
- ✅ Reduced motion support (`prefers-reduced-motion`)
- ✅ Color contrast ratios ≥ 4.5:1
- ✅ Alt text for all images
- ✅ Form validation with error announcements
- ✅ Skip links and landmark regions

---

## 🔍 SEO Features

- ✅ Comprehensive metadata (title, description, keywords)
- ✅ Open Graph + Twitter Cards
- ✅ Structured Data (LocalBusiness, Service, FAQPage, WebSite)
- ✅ `robots.ts` → `/robots.txt`
- ✅ `sitemap.ts` → `/sitemap.xml`
- ✅ Semantic heading hierarchy
- ✅ Canonical URLs
- ✅ Preload critical images

---

## ⚡ Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| Lighthouse Best Practices | ≥ 95 |
| Lighthouse SEO | ≥ 95 |
| First Contentful Paint | < 1.8s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Interaction to Next Paint | < 200ms |

---

## 🔧 Configuration

### Brand Configuration (`src/lib/config.ts`)

```typescript
export const BRAND = {
  name: "PristineFlow",
  tagline: "Where Clean Meets Calm",
  phone: "+971 4 123 4567",
  phoneDisplay: "+971 4 123 4567",
  email: "hello@pristineflow.example",
  whatsappMessage: "Hi PristineFlow, I'd like to book a cleaning service.",
  url: "https://pristineflow.example",
  serviceAreas: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  hours: "Mon–Sat 8am–8pm • Sun 9am–6pm",
  socials: {
    instagram: "https://instagram.com/pristineflow",
    facebook: "https://facebook.com/pristineflow",
    linkedin: "https://linkedin.com/company/pristineflow",
  },
};
```

### Adding/Modifying Content

All content lives in **`src/lib/data.ts`** — single source of truth:
- `SERVICES` — 10 service definitions
- `VALUE_PROPS` — 6 reasons to choose us
- `PROCESS_STEPS` — 4-step process
- `BEFORE_AFTER_PAIRS` — 2 comparison pairs
- `GALLERY_ITEMS` — 12 gallery images with categories
- `TESTIMONIALS` — 3 client testimonials
- `FAQS` — 8 frequently asked questions
- `PRICING_PACKAGES` — 3 pricing tiers

---

## 🖼 Image Attribution

All images sourced from **Openverse** (CC-licensed). Attribution manifest at:
- `public/img/manifest.json`

Run `npm run fetch-images` to re-download (see `scripts/fetch-images.ts` if available).

---

## 📦 Deployment

### Vercel (Recommended)

```bash
# Connect repo to Vercel, or:
npx vercel --prod
```

### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Static Export (if needed)

```javascript
// next.config.ts
export default {
  output: 'export',
  images: { unoptimized: true },
};
```

---

## 🧪 QA Checklist

### Functional
- [ ] All 14 sections render without errors
- [ ] Header navigation + mobile drawer work
- [ ] Hero CTAs scroll to correct sections
- [ ] Services expand/collapse correctly
- [ ] Before/After slider: drag, touch, keyboard
- [ ] Gallery filter + lightbox navigation
- [ ] Booking form: 5 steps, validation, submission
- [ ] Pricing cards display correctly
- [ ] Testimonials carousel auto-plays, pauses on interact
- [ ] FAQ accordions animate
- [ ] Footer newsletter form submits
- [ ] WhatsApp float button works
- [ ] Back-to-top appears on scroll

### Responsive (320px, 768px, 1024px, 1440px+)
- [ ] No horizontal overflow
- [ ] Touch targets ≥ 44×44px
- [ ] Text readable without zoom
- [ ] Images scale appropriately

### Accessibility
- [ ] Tab order logical
- [ ] Focus visible on all interactive elements
- [ ] Screen reader announces dynamic content
- [ ] Reduced motion respected
- [ ] Color contrast passes

### Performance
- [ ] Lighthouse CI passes thresholds
- [ ] No console errors
- [ ] Images use Next.js Image optimization

---

## 🎯 Client Handoff Notes

### White-Labeling
To rebrand for another client, update **only** `src/lib/config.ts`:
- Brand name, tagline, contact info
- Service areas, hours
- Social media URLs
- Colors (via CSS custom properties in `globals.css`)

### Content Updates
All copy/content in `src/lib/data.ts` — no component changes needed.

### Analytics
Add Google Analytics / Plausible / Matomo in `layout.tsx` `<head>` or via Next.js Script component.

### Forms
Booking form currently logs to console. Connect to:
- **Supabase** (see `florenza-supabase-backend.md` pattern)
- **Formspree** / **Netlify Forms**
- **Custom API route** in `src/app/api/booking/route.ts`

### Images
Replace images in `public/img/` keeping same filenames, or update paths in `data.ts`.

---

## 📄 License

Private project for **The Golden Brain Services (TGBS)** client presentation.

---

## 🤝 Credits

- **Design Inspiration**: 21st.dev, Awwwards, Dribbble, Lenis, GSAP, ReactBits
- **Images**: Openverse CC-licensed photographers (see manifest)
- **Icons**: Lucide React + custom inline SVGs
- **Fonts**: Google Fonts (Cormorant Garamond, Inter, JetBrains Mono)
- **Built by**: The Golden Brain Services (TGBS)

---

*Generated with [Claude Code](https://claude.com/claude-code)*