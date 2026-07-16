"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Star,
  Wrench,
  BadgeDollarSign,
  MapPin,
  Layers,
  MessageCircle,
  ShieldCheck,
  CloudSun,
  Award,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { features } from "@/data/index";
import { SectionTitle } from "@/components/section-title";

const iconMap: Record<string, LucideIcon> = {
  Star,
  Wrench,
  BadgeDollarSign,
  MapPin,
  Layers,
  MessageCircle,
  ShieldCheck,
  CloudSun,
  Award,
  Truck,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="keunggulan"
      className="scroll-mt-20 bg-futsal-light field-pattern py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Mengapa Memilih H2 Futsal Surabaya?" />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
        >
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Star;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="glass-light rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}