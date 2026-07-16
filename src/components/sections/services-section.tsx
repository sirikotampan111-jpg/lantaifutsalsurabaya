"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CircleDot,
  CalendarDays,
  Swords,
  Trophy,
  GraduationCap,
  School,
  Building2,
  Users,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/index";
import { SectionTitle } from "@/components/section-title";

const iconMap: Record<string, LucideIcon> = {
  CircleDot,
  CalendarDays,
  Swords,
  Trophy,
  GraduationCap,
  School,
  Building2,
  Users,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="layanan" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Layanan Kami"
          subtitle="Berbagai layanan sewa lapangan futsal untuk kebutuhan Anda"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || CircleDot;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group bg-white rounded-xl border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}