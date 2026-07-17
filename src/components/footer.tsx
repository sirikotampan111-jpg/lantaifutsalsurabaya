import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { BUSINESS, NAV_LINKS, WA_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-futsal-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Column 1: Logo & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="H2 Sport" width={40} height={40} />
              <span className="text-lg font-bold">
                H2 <span className="gradient-text">Sport</span>
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Supplier lantai olahraga terpercaya di Surabaya. Menyediakan dan
              memasang lantai futsal, minisoccer, padel, basket, dan olahraga
              lainnya.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="leading-relaxed">{BUSINESS.address}</li>
              <li>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: {BUSINESS.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="pt-2">
                <span className="text-white/40 text-xs">Jam Operasional</span>
                <br />
                <span className="text-white font-medium">
                  Setiap Hari: 08:00 - 23:00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <p className="text-center text-sm text-white/40">
          &copy; {new Date().getFullYear()} H2 Sport Surabaya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}