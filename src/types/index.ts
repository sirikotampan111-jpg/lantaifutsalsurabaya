export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

export type GalleryCategory =
  | "lapangan"
  | "pertandingan"
  | "event"
  | "komunitas"
  | "fasilitas";

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactFormData {
  nama: string;
  nomorHp: string;
  email: string;
  pesan: string;
}

export interface BusinessInfo {
  name: string;
  category: string;
  address: string;
  whatsapp: string;
  email: string;
  website: string;
  phone: string;
  mapsEmbedUrl: string;
  mapsUrl: string;
  operationalHours: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}