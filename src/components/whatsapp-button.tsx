"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WA_BOOKING_LINK } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <Link
      href={WA_BOOKING_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-cta-button fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] pl-4 pr-5 py-3 text-white shadow-lg shadow-[#25D366]/40 hover:shadow-xl hover:shadow-[#25D366]/50 hover:scale-105 transition-all duration-300 animate-wa-pulse group"
      aria-label="Hubungi Kami Segera via WhatsApp"
    >
      {/* Icon circle */}
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
        <MessageCircle className="h-5 w-5" />
      </span>
      {/* Text */}
      <span className="hidden sm:inline-block text-sm font-bold tracking-wide">
        Hubungi Kami Segera
      </span>
      {/* Mobile compact text */}
      <span className="sm:hidden text-xs font-bold">
        Chat WA
      </span>
    </Link>
  );
}