"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WA_BOOKING_LINK, WA_LINK } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Lapangan Futsal H2 Surabaya"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Dark Gradient Overlay */}
        <div className="hero-gradient absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
        >
          H2 SPORT{" "}
          <span className="gradient-text">SURABAYA</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          Supplier Lantai Olahraga di Surabaya — Futsal, Minisoccer, Padel,
          Basket, dan Lainnya. Menerima Pemesanan & Pemasangan untuk Surabaya
          dan Sekitarnya.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/30"
          >
            <Link href={WA_BOOKING_LINK} target="_blank" rel="noopener noreferrer">
              Konsultasi Gratis
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base px-8 py-6 rounded-xl"
          >
            <Link href={WA_LINK} target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <Link href="/tentang" aria-label="Lihat Tentang Kami">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8 text-white/60" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}