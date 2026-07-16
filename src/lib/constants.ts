import type { BusinessInfo, NavLink } from "@/types";

export const SITE_URL = "https://lantaifutsalsurabaya.asia";

export const BUSINESS: BusinessInfo = {
  name: "H2 Futsal Surabaya",
  category: "Penyewaan Lapangan Futsal",
  address:
    "Jl. Cumpat Gg. 5 No. 2, Kel. Kedung Cowek, Kec. Bulak, Kenjeran, Surabaya, Jawa Timur 60125",
  whatsapp: "082244269222",
  email: "moch.husnin67@gmail.com",
  website: SITE_URL,
  phone: "082244269222",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.7!2d112.78!3d-7.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTUnMDAuMCJTIDExMsKwNDYnNDguMCJF!5e0!3m2!1sid!2sid!4v1700000000000",
  mapsUrl:
    "https://www.google.com/maps/place/H2+Futsal+Surabaya/@-7.25,112.78,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d-7.25!4d112.78",
  operationalHours: "Setiap Hari: 08:00 - 23:00 WIB",
};

export const NAV_LINKS: NavLink[] = [
  { href: "#beranda", label: "Home" },
  { href: "#tentang", label: "Tentang" },
  { href: "#layanan", label: "Layanan" },
  { href: "#galeri", label: "Galeri" },
  { href: "#kontak", label: "Kontak" },
];

export const WA_LINK = `https://wa.me/${BUSINESS.whatsapp}`;
export const WA_BOOKING_LINK = `${WA_LINK}?text=Halo%20H2%20Futsal,%20saya%20ingin%20booking%20lapangan%20futsal.`;