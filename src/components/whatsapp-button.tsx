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
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/30 hover:scale-110 transition-transform duration-300 animate-pulse-green"
      aria-label="Konsultasi via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}