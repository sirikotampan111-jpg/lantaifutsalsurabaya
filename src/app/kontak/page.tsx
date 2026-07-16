import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Kontak H2 Futsal Surabaya - Konsultasi & Pemesanan Lantai Olahraga Surabaya",
  description:
    "Hubungi H2 Futsal Surabaya untuk konsultasi, pemesanan lantai olahraga, informasi harga, dan pertanyaan lainnya. Konsultasi gratis via WhatsApp.",
  path: "/kontak",
  keywords: [
    "Kontak H2 Futsal",
    "Pemesanan Lantai Futsal Surabaya",
    "Hubungi H2 Futsal Surabaya",
  ],
});

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

export default function KontakPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <PageHeader
          title="Hubungi Kami"
          description="Konsultasi dan pemesanan lantai olahraga atau tanyakan informasi seputar H2 Surabaya"
          breadcrumbs={[
            { name: "Home", url: "/" },
            { name: "Kontak", url: "/kontak" },
          ]}
        />
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