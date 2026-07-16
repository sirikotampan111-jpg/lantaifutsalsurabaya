import type { BusinessInfo, NavLink } from "@/types";

export const SITE_URL = "https://lantaifutsalsurabaya.asia";

export const BUSINESS: BusinessInfo = {
  name: "H2 Futsal Surabaya",
  category: "Supplier Lantai Olahraga",
  address:
    "Jl. Cumpat Gg. 5 No. 2, Kel. Kedung Cowek, Kec. Bulak, Kenjeran, Surabaya, Jawa Timur 60125",
  whatsapp: "082244269222",
  email: "moch.husnin67@gmail.com",
  website: SITE_URL,
  phone: "082244269222",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7916.30635836143!2d112.7876272!3d-7.2233629!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9b2fce662a7%3A0x20d7d66ccf203942!2sSupplier%20Lantai%20Lapangan%20Futsal%2CMinisoccer%26Lapangan%20Padel%20Surabaya!5e0!3m2!1sid!2sid!4v1784202904123!5m2!1sid!2sid",
  mapsUrl:
    "https://www.google.com/maps/place/H2+Futsal+Surabaya/@-7.25,112.78,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-7.25!4d112.78",
  operationalHours: "Setiap Hari: 08:00 - 23:00 WIB",
};

export const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/tentang", label: "Tentang" },
  { href: "/layanan", label: "Layanan" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export const WA_LINK = `https://wa.me/${BUSINESS.whatsapp}`;
export const WA_BOOKING_LINK = `${WA_LINK}?text=Halo%20H2,%20saya%20ingin%20konsultasi%2Fpemesanan%20lantai%20olahraga.`;