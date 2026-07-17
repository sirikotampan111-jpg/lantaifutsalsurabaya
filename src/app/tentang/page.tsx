import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Tentang H2 Sport Surabaya - Supplier Lantai Olahraga Terpercaya",
  description:
    "Mengenal lebih dekat H2 Sport Surabaya. Supplier lantai olahraga terpercaya di Surabaya Timur yang menyediakan dan memasang lantai futsal, minisoccer, padel, basket, dan lainnya.",
  path: "/tentang",
  keywords: ["H2 Sport Surabaya", "Tentang H2 Sport", "Supplier Lantai Olahraga Kenjeran"],
});

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

export default function TentangPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Tentang Kami"
          description="Mengenal lebih dekat H2 Sport Surabaya"
          breadcrumbs={[
            { name: "Home", url: "/" },
            { name: "Tentang Kami", url: "/tentang" },
          ]}
        />
        <AboutSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}