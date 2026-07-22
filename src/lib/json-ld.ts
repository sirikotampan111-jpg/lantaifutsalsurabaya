import { SITE_URL, BUSINESS } from "./constants";

const BASE_ID = `${SITE_URL}/#organization`;

export function generateJsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS.name,
    description:
      "H2 Sport Surabaya adalah supplier lantai olahraga terpercaya di Surabaya. Menyediakan dan memasang rumput sintetis futsal, lantai minisoccer, lantai padel, lantai basket, dan berbagai lantai olahraga lainnya dengan harga kompetitif.",
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
    priceRange: "Rp$$",
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
    name: `${BUSINESS.name} - Supplier Lantai Olahraga`,
    description: "Supplier dan kontraktor lantai olahraga di Surabaya. Menyediakan rumput sintetis, interlock, dan material lantai olahraga untuk futsal, minisoccer, padel, dan basket.",
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
      "Supplier lantai olahraga terpercaya di Surabaya. Menyediakan dan memasang lantai futsal, minisoccer, padel, basket, dan olahraga lainnya untuk Surabaya dan sekitarnya.",
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
    name: "H2 Sport Surabaya - Supplier Lantai Olahraga Terpercaya",
    description:
      "Website resmi H2 Sport Surabaya. Supplier lantai olahraga terpercaya di Surabaya untuk futsal, minisoccer, padel, basket, dan lainnya.",
    url: SITE_URL,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#localbusiness` },
    inLanguage: "id-ID",
  };

  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/#contactpage`,
    name: "Kontak H2 Sport Surabaya",
    description:
      "Hubungi H2 Sport Surabaya untuk konsultasi, pemesanan lantai olahraga, dan pertanyaan lainnya.",
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
        name: "Apa saja jenis lantai olahraga yang disediakan H2 Sport Surabaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "H2 Sport Surabaya menyediakan berbagai jenis lantai olahraga meliputi rumput sintetis futsal, lantai minisoccer, lantai padel, lantai basket, lantai badminton, dan berbagai lantai olahraga lainnya sesuai kebutuhan proyek Anda.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa harga lantai futsal per meter persegi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Harga lantai futsal bervariasi tergantung jenis material, ketebalan, dan spesifikasi yang dipilih. Untuk mendapatkan penawaran harga terbaik, silakan hubungi kami melalui WhatsApp di +62 822-4426-9222 untuk konsultasi gratis.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah H2 menerima pemasangan di luar Surabaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, kami menerima pemesanan dan pemasangan lantai olahraga di Surabaya serta kota-kota sekitarnya seperti Sidoarjo, Gresik, Lamongan, dan wilayah Jawa Timur lainnya.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama proses pemasangan lantai futsal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Durasi pemasangan tergantung pada luas lapangan dan jenis material yang dipilih. Untuk satu lapangan futsal standar, pemasangan biasanya memakan waktu 3-7 hari kerja.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah tersedia garansi untuk pemasangan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, setiap proyek pemasangan lantai olahraga dari H2 Sport Surabaya mendapat garansi. Detail garansi akan dijelaskan saat proses konsultasi dan penawaran harga.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah bisa hanya membeli material tanpa jasa pemasangan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tentu. Kami juga menyediakan layanan supply material saja untuk proyek mandiri. Anda bisa membeli rumput sintetis, interlock, atau material lainnya tanpa jasa pemasangan.",
        },
      },
      {
        "@type": "Question",
        name: "Bagaimana cara memesan lantai olahraga dari H2 Sport Surabaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cara pemesanan sangat mudah: hubungi kami via WhatsApp di +62 822-4426-9222, konsultasikan kebutuhan Anda, kami akan melakukan survei lokasi jika diperlukan, kemudian memberikan penawaran harga.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah H2 menyediakan jasa renovasi lapangan lama?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, kami menerima jasa renovasi lapangan olahraga lama. Tim kami akan mengevaluasi kondisi lapangan dan memberikan solusi renovasi dengan material terbaik sesuai anggaran.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah material lantai olahraga tahan cuaca Indonesia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Semua material yang kami sediakan telah dipilih untuk ketahanannya terhadap cuaca tropis Indonesia. Material kami tahan terhadap hujan, panas matahari, dan kelembaban tinggi.",
        },
      },
      {
        "@type": "Question",
        name: "Di mana lokasi H2 Sport Surabaya?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "H2 Sport Surabaya berlokasi di Jl. Cumpat Gg. 5 No. 2, Kelurahan Kedung Cowek, Kecamatan Bulak, Kenjeran, Surabaya Timur, Jawa Timur 60125.",
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