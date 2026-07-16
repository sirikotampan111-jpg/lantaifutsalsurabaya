import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Layanan H2 Futsal Surabaya - Jual & Pasang Lantai Olahraga Surabaya",
  description:
    "Layanan lengkap H2 Futsal Surabaya: jual dan pasang lantai futsal, lantai minisoccer, lantai padel, lantai basket, renovasi lapangan, konsultasi & desain, dan supply material.",
  path: "/layanan",
  keywords: [
    "Layanan H2 Futsal",
    "Jual Lantai Futsal Surabaya",
    "Pemasangan Lantai Futsal Surabaya",
    "Lantai Padel Surabaya",
  ],
});

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

export default function LayananPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Layanan Kami"
          description="Layanan jual dan pasang lantai olahraga untuk kebutuhan Anda"
          breadcrumbs={[
            { name: "Home", url: "/" },
            { name: "Layanan", url: "/layanan" },
          ]}
        />
        <ServicesSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}