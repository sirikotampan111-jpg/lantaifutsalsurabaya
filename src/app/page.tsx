import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const HeroSection = dynamic(
  () =>
    import("@/components/sections/hero-section").then((m) => ({
      default: m.HeroSection,
    })),
  {
    loading: () => (
      <section className="min-h-screen bg-futsal-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
          <p className="text-white/60 text-sm">Memuat...</p>
        </div>
      </section>
    ),
  }
);

const FeaturesSection = dynamic(
  () =>
    import("@/components/sections/features-section").then((m) => ({
      default: m.FeaturesSection,
    })),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-futsal-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 w-48 mx-auto bg-muted rounded-lg animate-pulse mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 bg-white rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const ServicesSection = dynamic(
  () =>
    import("@/components/sections/services-section").then((m) => ({
      default: m.ServicesSection,
    })),
  {
    loading: () => (
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 w-48 mx-auto bg-muted rounded-lg animate-pulse mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-48 bg-muted rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const AboutSection = dynamic(
  () =>
    import("@/components/sections/about-section").then((m) => ({
      default: m.AboutSection,
    })),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-futsal-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 w-48 mx-auto bg-muted rounded-lg animate-pulse mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-32 bg-muted rounded-xl animate-pulse" />
            <div className="space-y-4">
              <div className="h-32 bg-muted rounded-xl animate-pulse" />
              <div className="h-48 bg-muted rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    ),
  }
);

const GallerySection = dynamic(
  () =>
    import("@/components/sections/gallery-section").then((m) => ({
      default: m.GallerySection,
    })),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-futsal-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 w-48 mx-auto bg-muted rounded-lg animate-pulse mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[4/3] bg-muted rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/contact-section").then((m) => ({
      default: m.ContactSection,
    })),
  {
    loading: () => (
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-8 w-48 mx-auto bg-muted rounded-lg animate-pulse mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-16 bg-muted rounded-xl animate-pulse" />
              ))}
            </div>
            <div className="h-96 bg-muted rounded-xl animate-pulse" />
          </div>
        </div>
      </section>
    ),
  }
);

const FaqSection = dynamic(
  () =>
    import("@/components/sections/faq-section").then((m) => ({
      default: m.FaqSection,
    })),
  {
    loading: () => (
      <section className="py-16 md:py-24 bg-futsal-light">
        <div className="max-w-3xl mx-auto px-4">
          <div className="h-8 w-48 mx-auto bg-muted rounded-lg animate-pulse mb-12" />
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-16 bg-muted rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    ),
  }
);

const WhatsAppButton = dynamic(
  () =>
    import("@/components/whatsapp-button").then((m) => ({
      default: m.WhatsAppButton,
    }))
);

const ScrollToTop = dynamic(
  () =>
    import("@/components/scroll-to-top").then((m) => ({
      default: m.ScrollToTop,
    }))
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <FeaturesSection />
        <div className="section-divider" />
        <ServicesSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <GallerySection />
        <div className="section-divider" />
        <ContactSection />
        <div className="section-divider" />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}