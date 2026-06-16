"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { CtaButton } from "@/components/CtaButton";
import { buildWhatsAppUrl, siteConfig } from "@/data/site";

const footerLinks = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Paket", href: "/#paket" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "FAQ", href: "/#faq" },
  { label: "Kontak", href: "/#kontak" }
];

export function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/demo/")) {
    return null;
  }

  return (
    <footer className="bg-navy-950 py-12 text-white">
      <div className="section-shell grid gap-10 md:grid-cols-[1.25fr_0.7fr_0.9fr_0.8fr]">
        <div>
          <Link href="/" className="focus-ring rounded-xl">
            <BrandLogo variant="light" showTagline />
          </Link>
          <p className="mt-4 max-w-md leading-7 text-blue-100">{siteConfig.description}</p>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
            Navigasi
          </h2>
          <div className="mt-4 grid gap-2">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md text-blue-100 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
            Kontak
          </h2>
          <div className="mt-4 grid gap-3 text-blue-100">
            <p className="flex items-center gap-3">
              <Mail size={17} aria-hidden="true" />
              {siteConfig.email}
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={17} aria-hidden="true" />
              {siteConfig.location}
            </p>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="focus-ring flex items-center gap-3 rounded-md transition hover:text-white"
            >
              <Instagram size={17} aria-hidden="true" />
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200">
            Mulai
          </h2>
          <p className="mt-4 text-blue-100">Konsultasi kebutuhan website lewat WhatsApp.</p>
          <CtaButton href={buildWhatsAppUrl()} variant="whatsapp" className="mt-4 w-full sm:w-auto">
            <MessageCircle size={18} aria-hidden="true" />
            Chat WhatsApp
          </CtaButton>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-sm text-blue-100">
        Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
