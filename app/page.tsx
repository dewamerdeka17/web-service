import { ContactCta } from "@/components/ContactCta";
import { Faq } from "@/components/Faq";
import { Hero } from "@/components/Hero";
import { OrderSteps } from "@/components/OrderSteps";
import { PortfolioPreview } from "@/components/PortfolioPreview";
import { Pricing } from "@/components/Pricing";
import { SectionHeader } from "@/components/SectionHeader";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="tentang" className="bg-white py-16 sm:py-24 lg:py-28">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Tentang jasa"
            title="Website sederhana yang dibuat untuk bantu usaha terlihat siap dipercaya."
            description="Saya membantu UMKM, toko kecil, dan personal brand membuat website rapi, cepat, dan mudah digunakan. Cocok untuk promosi usaha, katalog produk, dan meningkatkan kepercayaan pelanggan."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Cepat", "Struktur jelas supaya calon pelanggan cepat paham usaha kamu."],
              ["Responsif", "Tampilan nyaman dibuka dari HP, tablet, laptop, dan desktop."],
              ["Mudah", "CTA WhatsApp dibuat menonjol agar konsultasi tidak ribet."]
            ].map(([title, text]) => (
              <div key={title} className="rounded-xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:-translate-y-1 hover:bg-white hover:shadow-soft sm:rounded-2xl">
                <h3 className="text-lg font-bold text-navy-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Pricing />
      <PortfolioPreview />
      <OrderSteps />
      <Testimonials />
      <Faq />
      <ContactCta />
    </>
  );
}
