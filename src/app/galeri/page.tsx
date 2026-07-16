import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Galeri H2 Futsal Surabaya - Foto Lapangan & Kegiatan Futsal",
  description:
    "Galeri foto H2 Futsal Surabaya. Lihat lapangan futsal, pertandingan, event, komunitas, dan fasilitas kami.",
  path: "/galeri",
  keywords: [
    "Galeri H2 Futsal",
    "Foto Lapangan Futsal Surabaya",
    "Galeri Futsal Kenjeran",
  ],
});

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

export default function GaleriPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Galeri"
          description="Dokumentasi kegiatan dan fasilitas H2 Futsal Surabaya"
          breadcrumbs={[
            { name: "Home", url: "/" },
            { name: "Galeri", url: "/galeri" },
          ]}
        />
        <GallerySection />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </>
  );
}