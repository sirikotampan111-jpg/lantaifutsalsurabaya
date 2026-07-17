"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryItems, galleryCategories } from "@/data/index";
import { SectionTitle } from "@/components/section-title";
import type { GalleryItem } from "@/types";

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("semua");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const filteredItems =
    activeCategory === "semua"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="galeri" className="scroll-mt-20 py-16 md:py-24 bg-futsal-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Galeri"
          subtitle="Lihat fasilitas dan suasana di H2 Sport Surabaya"
        />

        {/* Category Filter */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-white text-muted-foreground hover:text-foreground border hover:border-primary/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Dialog */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={(open) => {
            if (!open) setSelectedImage(null);
          }}
        >
          <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black border-white/10 overflow-hidden">
            <DialogTitle className="sr-only">{selectedImage?.alt || "Galeri"}</DialogTitle>
            {selectedImage && (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="95vw"
                  className="object-contain"
                  priority
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}