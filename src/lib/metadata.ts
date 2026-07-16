import type { Metadata } from "next";
import { SITE_URL, BUSINESS } from "./constants";

const defaultKeywords = [
  "H2 Futsal Surabaya",
  "Supplier Lantai Futsal Surabaya",
  "Jual Lantai Futsal Surabaya",
  "Lantai Futsal Murah Surabaya",
  "Pemasangan Lantai Futsal Surabaya",
  "Supplier Lantai Olahraga Surabaya",
  "Lantai Minisoccer Surabaya",
  "Lantai Padel Surabaya",
  "Lantai Basket Surabaya",
  "Kontraktor Lapangan Futsal Surabaya",
  "Lantai Futsal Kenjeran",
  "Lantai Futsal Bulak",
  "Lantai Olahraga Surabaya Timur",
  "Jual Rumput Sintetis Surabaya",
  "Lantai Lapangan Terdekat Surabaya",
];

export function createMetadata(overrides?: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const title = overrides?.title ?? "H2 Futsal Surabaya - Supplier Lantai Olahraga Terpercaya";
  const description =
    overrides?.description ??
    "H2 Futsal Surabaya adalah supplier lantai olahraga terpercaya di Surabaya. Menyediakan dan memasang lantai futsal, minisoccer, padel, basket, dan lantai olahraga lainnya. Konsultasi gratis via WhatsApp.";
  const path = overrides?.path ?? "";
  const url = `${SITE_URL}${path}`;
  const keywords = overrides?.keywords
    ? [...overrides.keywords, ...defaultKeywords]
    : defaultKeywords;
  const ogImage = overrides?.image ?? `${SITE_URL}/images/og-image.jpg`;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    authors: [{ name: BUSINESS.name, url: SITE_URL }],
    creator: BUSINESS.name,
    publisher: BUSINESS.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: BUSINESS.name,
        },
      ],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/manifest.webmanifest",
  };
}