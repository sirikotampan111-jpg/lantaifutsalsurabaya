import { SITE_URL, BUSINESS } from "./constants";

const BASE_ID = `${SITE_URL}/#organization`;

export function generateJsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    description:
      "H2 Futsal Surabaya menyediakan layanan sewa lapangan futsal berkualitas di Surabaya Timur. Lapangan nyaman dengan rumput sintetis terbaik, pencahayaan LED terang, fasilitas lengkap, dan harga terjangkau.",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Cumpat Gg. 5 No. 2",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      postalCode: "60125",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.25,
      longitude: 112.78,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "23:00",
    },
    priceRange: "Rp80.000 - Rp150.000",
    image: `${SITE_URL}/images/og-image.jpg`,
    logo: `${SITE_URL}/logo.png`,
    areaServed: {
      "@type": "City",
      name: "Surabaya",
    },
    sameAs: [],
  };

  const sportsLocation = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "@id": `${SITE_URL}/#sportslocation`,
    name: `${BUSINESS.name} - Lapangan Futsal`,
    description: "Lapangan futsal indoor berkualitas di Surabaya Timur dengan rumput sintetis dan pencahayaan LED.",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Cumpat Gg. 5 No. 2",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      postalCode: "60125",
      addressCountry: "ID",
    },
    telephone: BUSINESS.phone,
    image: `${SITE_URL}/images/og-image.jpg`,
    logo: `${SITE_URL}/logo.png`,
  };

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": BASE_ID,
    name: BUSINESS.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Penyedia layanan sewa lapangan futsal berkualitas di Surabaya Timur. Melayani latihan, sparing, turnamen, dan event perusahaan.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Cumpat Gg. 5 No. 2",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      postalCode: "60125",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+62${BUSINESS.phone.slice(1)}`,
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
    },
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    publisher: { "@id": BASE_ID },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    inLanguage: "id-ID",
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    name: "H2 Futsal Surabaya - Sewa Lapangan Futsal Berkualitas",
    description:
      "Website resmi H2 Futsal Surabaya. Sewa lapangan futsal berkualitas di Kenjeran, Surabaya Timur.",
    url: SITE_URL,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#localbusiness` },
    inLanguage: "id-ID",
  };

  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/#contactpage`,
    name: "Kontak H2 Futsal Surabaya",
    description:
      "Hubungi H2 Futsal Surabaya untuk booking lapangan futsal, informasi harga, dan pertanyaan lainnya.",
    url: `${SITE_URL}/kontak`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
    },
  };

  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tentang",
        item: `${SITE_URL}/tentang`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Layanan",
        item: `${SITE_URL}/layanan`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Galeri",
        item: `${SITE_URL}/galeri`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Kontak",
        item: `${SITE_URL}/kontak`,
      },
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faqpage`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Berapa harga sewa lapangan futsal di H2 Futsal Surabaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Harga sewa lapangan futsal di H2 Futsal Surabaya sangat terjangkau dengan tarif mulai dari Rp80.000 per jam. Untuk informasi harga terbaru dan promo, silakan hubungi kami melalui WhatsApp di nomor 0822-4426-9222.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara booking lapangan futsal di H2 Futsal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Anda dapat melakukan booking lapangan futsal dengan mudah melalui WhatsApp di nomor 0822-4426-9222. Cukup informasikan tanggal, jam, dan durasi yang diinginkan.",
        },
      },
      {
        "@type": "Question",
        name: "Jam operasional H2 Futsal Surabaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "H2 Futsal Surabaya beroperasi setiap hari dari pukul 08:00 hingga 23:00 WIB.",
        },
      },
      {
        "@type": "Question",
        name: "Di mana lokasi H2 Futsal Surabaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "H2 Futsal Surabaya berlokasi di Jl. Cumpat Gg. 5 No. 2, Kelurahan Kedung Cowek, Kecamatan Bulak, Kenjeran, Surabaya Timur, Jawa Timur 60125.",
        },
      },
      {
        "@type": "Question",
        name: "Apa saja fasilitas yang tersedia di H2 Futsal Surabaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "H2 Futsal Surabaya menyediakan lapangan rumput sintetis berkualitas, pencahayaan LED terang, area parkir luas, musholla, toilet bersih, dan area tunggu nyaman.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah H2 Futsal menyediakan sewa sepatu atau bola?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Untuk informasi penyewaan peralatan seperti sepatu futsal dan bola, silakan konfirmasi langsung melalui WhatsApp kami.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah bisa menyewa lapangan untuk event atau turnamen?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, H2 Futsal Surabaya menerima penyewaan lapangan untuk turnamen futsal, pertandingan persahabatan, keolahragaan perusahaan, dan acara komunitas.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa kapasitas pemain di satu lapangan futsal H2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Satu lapangan futsal di H2 Futsal Surabaya berstandar dengan kapasitas 10 pemain (5 vs 5) untuk permainan reguler.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah ada diskon untuk booking rutin atau jangka panjang?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, H2 Futsal Surabaya memberikan harga spesial untuk booking rutin mingguan atau bulanan serta paket khusus untuk komunitas, sekolah, kampus, dan perusahaan.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana kondisi rumput lapangan di H2 Futsal Surabaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lapangan H2 Futsal Surabaya menggunakan rumput sintetis berkualitas tinggi yang terawat dengan baik. Permukaan lapangan rata, empuk, dan aman untuk bermain.",
        },
      },
    ],
  };

  return [
    localBusiness,
    sportsLocation,
    organization,
    website,
    webPage,
    contactPage,
    breadcrumbList,
    faqPage,
  ];
}