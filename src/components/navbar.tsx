"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS, WA_BOOKING_LINK } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass-dark shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="#beranda" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="H2 Futsal" width={40} height={40} />
          <span className="text-lg font-bold text-white">
            H2 <span className="gradient-text">Futsal</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white rounded-md hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="ml-3 bg-primary hover:bg-primary/90 text-white">
            <Link href={WA_BOOKING_LINK} target="_blank" rel="noopener noreferrer">
              Booking Sekarang
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-futsal-black border-white/10 w-72">
            <SheetHeader>
              <SheetTitle className="text-white flex items-center gap-2">
                <Image src="/logo.svg" alt="H2 Futsal" width={32} height={32} />
                H2 Futsal
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 mt-4">
              {NAV_LINKS.map((link) => (
                <SheetClose asChild key={link.href}>
                  <Link
                    href={link.href}
                    className="px-4 py-3 text-white/80 transition-colors hover:text-white hover:bg-white/10 rounded-lg font-medium"
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Button
                  asChild
                  className="mt-4 bg-primary hover:bg-primary/90 text-white w-full"
                >
                  <Link href={WA_BOOKING_LINK} target="_blank" rel="noopener noreferrer">
                    Booking Sekarang
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}