import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeader } from "@/components/SectionHeader";
import { buildWhatsAppUrl, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Dewa Web Service untuk konsultasi website UMKM lewat WhatsApp, email, atau sosial media."
};

export default function ContactPage() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Kontak"
          title="Ceritakan kebutuhan website kamu lewat WhatsApp."
          description="Tidak perlu paham teknis dulu. Kirim jenis usaha, contoh referensi, dan target halaman yang kamu butuhkan."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: MessageCircle,
              title: "WhatsApp",
              value: siteConfig.whatsappDisplay,
              href: buildWhatsAppUrl()
            },
            {
              icon: Mail,
              title: "Email",
              value: siteConfig.email,
              href: `mailto:${siteConfig.email}`
            },
            {
              icon: MapPin,
              title: "Lokasi",
              value: siteConfig.location,
              href: "#"
            }
          ].map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                className="focus-ring rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-lg font-semibold text-navy-900">{item.title}</h2>
                <p className="mt-2 break-words text-slate-600">{item.value}</p>
              </a>
            );
          })}
        </div>

        <div className="mt-10 rounded-lg bg-navy-900 p-6 text-white sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-2xl font-bold">Siap mulai dari konsultasi gratis?</h2>
              <p className="mt-3 max-w-2xl leading-7 text-navy-100">
                Kirim pesan singkat dan sebutkan jenis usaha kamu. Saya akan bantu pilih paket yang paling masuk akal untuk kebutuhan awal.
              </p>
            </div>
            <CtaButton href={buildWhatsAppUrl()} variant="whatsapp">
              <Send size={19} aria-hidden="true" />
              Kirim WhatsApp
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
