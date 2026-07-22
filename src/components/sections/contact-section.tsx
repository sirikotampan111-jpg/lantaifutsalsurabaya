"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { BUSINESS, WA_LINK, DISPLAY_PHONE } from "@/lib/constants";
import { SectionTitle } from "@/components/section-title";

const contactSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  nomorHp: z
    .string()
    .regex(/^[0-9+\-\s]{10,15}$/, "Nomor HP tidak valid (10-15 digit)"),
  email: z.string().email("Format email tidak valid"),
  pesan: z.string().min(10, "Pesan minimal 10 karakter"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nama: "",
      nomorHp: "",
      email: "",
      pesan: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Gagal mengirim pesan");

      toast.success("Pesan berhasil dikirim!", {
        description: "Kami akan segera menghubungi Anda.",
      });
      form.reset();
    } catch {
      toast.error("Gagal mengirim pesan", {
        description: "Silakan coba lagi atau hubungi kami via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="kontak" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Hubungi Kami" />

        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Alamat</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {BUSINESS.address}
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">WhatsApp</h3>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline mt-1 block"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-sm text-primary hover:underline mt-1 block"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-2 rounded-xl overflow-hidden border">
              <iframe
                src={BUSINESS.mapsEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi H2 Sport Surabaya"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white rounded-xl border p-6 shadow-sm space-y-5"
              >
                <FormField
                  control={form.control}
                  name="nama"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nama</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan nama Anda" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nomorHp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nomor HP</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="08xxxxxxxxxx"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="email@contoh.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pesan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tulis pesan Anda di sini..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}