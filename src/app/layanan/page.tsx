import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Layanan H2 Futsal Surabaya - Sewa Lapangan & Layanan Futsal",
  description:
    "Layanan lengkap H2 Futsal Surabaya: sewa lapangan futsal, booking harian, sparing partner, turnamen, latihan sekolah & kampus, event perusahaan.",
  path: "/layanan",
  keywords: [
    "Layanan H2 Futsal",
    "Sewa Lapangan Futsal Surabaya",
    "Booking Futsal Surabaya",
    "Turnamen Futsal Surabaya",
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
          description="Berbagai layanan futsal untuk kebutuhan olahraga Anda"
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