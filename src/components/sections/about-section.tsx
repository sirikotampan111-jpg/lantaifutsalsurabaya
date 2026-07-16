"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import { SectionTitle } from "@/components/section-title";

const misiItems = [
  "Menyediakan material lantai olahraga berkualitas tinggi dengan harga yang kompetitif.",
  "Memberikan layanan pemasangan profesional dan tepat waktu.",
  "Memberikan konsultasi terbaik untuk membantu pelanggan memilih solusi yang tepat.",
  "Menjangkau lebih banyak area di Surabaya dan sekitarnya.",
  "Mengutamakan kepuasan pelanggan dengan garansi dan layanan purna jual.",
];

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="tentang"
      className="scroll-mt-20 bg-futsal-light py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Tentang Kami" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Profile Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
              H2 Futsal Surabaya adalah supplier lantai olahraga terpercaya yang
              berlokasi strategis di kawasan Kenjeran, Surabaya Timur. Kami
              menyediakan dan memasang berbagai jenis lantai olahraga berkualitas
              tinggi untuk futsal, minisoccer, padel, basket, badminton, dan
              olahraga lainnya. Dengan pengalaman dan komitmen terhadap kualitas,
              kami siap membantu mewujudkan lapangan olahraga impian Anda.
            </p>
          </motion.div>

          {/* Right: Visi & Misi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Visi Card */}
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Visi</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Menjadi supplier lantai olahraga terpercaya dan terdepan di Surabaya dan Jawa Timur.
              </p>
            </div>

            {/* Misi Card */}
            <div className="bg-white rounded-xl border p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Misi</h3>
              </div>
              <ul className="space-y-3">
                {misiItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}