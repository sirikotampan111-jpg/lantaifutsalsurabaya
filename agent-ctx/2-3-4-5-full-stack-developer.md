---
Task ID: 2, 3, 4, 5
Agent: full-stack-developer
Task: Refactor H2 Futsal Surabaya from single-page app to 5 separate pages

Work Log:
- Updated `src/data/index.ts`: Replaced 12 AI-generated gallery items with 10 user-provided images (galeri-1 through galeri-10) using actual dimensions. Updated breadcrumbs from hash URLs to actual page routes (`/tentang`, `/layanan`, `/galeri`, `/kontak`).
- Updated `src/lib/constants.ts`: Changed NAV_LINKS from `#hash` anchors to actual routes (`/`, `/tentang`, `/layanan`, `/galeri`, `/kontak`).
- Updated `src/components/navbar.tsx`: Added `usePathname()` for active link detection (active = `text-primary`, inactive = `text-white/80 hover:text-white`). Changed logo from `logo.svg` to `logo.png`. Logo links to `/`. Mobile sheet also shows active state.
- Updated `src/components/sections/hero-section.tsx`: Removed `scroll-mt-20` from section. Wrapped scroll indicator ChevronDown in a `Link` pointing to `/tentang`.
- Updated `src/components/footer.tsx`: Changed logo from `logo.svg` to `logo.png`. Nav links now use actual routes.
- Created `src/components/page-header.tsx`: Server component with dark gradient background (`from-futsal-black to-futsal-gray`), breadcrumb navigation with ChevronRight separator, title, and description.
- Rewrote `src/app/page.tsx`: Now renders only HeroSection, FeaturesSection, and FaqSection (Home page only).
- Created `src/app/tentang/page.tsx`: Metadata + PageHeader + AboutSection.
- Created `src/app/layanan/page.tsx`: Metadata + PageHeader + ServicesSection.
- Created `src/app/galeri/page.tsx`: Metadata + PageHeader + GallerySection.
- Created `src/app/kontak/page.tsx`: Metadata + PageHeader + ContactSection + FaqSection.
- Updated `src/app/sitemap.ts`: All URLs changed from hash anchors to actual routes.
- Updated `src/lib/json-ld.ts`: All `#${section}` URLs updated to actual routes. Logo references changed from `logo.svg` to `logo.png`.
- Layout (`src/app/layout.tsx`): No changes needed - already uses `createMetadata()` and injects JSON-LD correctly.
- Lint: Passed with zero errors.

Stage Summary:
- Successfully refactored from single-page app to 5-page site architecture.
- Each sub-page has its own metadata, PageHeader with breadcrumbs, and proper loading skeletons.
- Navigation uses Next.js `Link` and `usePathname()` for proper routing and active state.
- All SEO assets (sitemap, JSON-LD, breadcrumbs) updated to use real page routes.
- All user-provided gallery images integrated with correct dimensions.