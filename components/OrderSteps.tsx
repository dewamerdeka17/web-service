import { MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeader } from "@/components/SectionHeader";
import { orderSteps } from "@/data/content";
import { buildWhatsAppUrl } from "@/data/site";

export function OrderSteps() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Alur pemesanan"
              title="Proses dibuat jelas dari konsultasi sampai website online."
              description="Cocok untuk client yang belum paham teknis karena setiap tahap punya output yang mudah dicek."
            />
            <CtaButton href={buildWhatsAppUrl()} variant="whatsapp" className="mt-8 w-full sm:w-auto">
              <MessageCircle size={18} aria-hidden="true" />
              Mulai konsultasi
            </CtaButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {orderSteps.map((step, index) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft sm:rounded-2xl">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-500 text-sm font-bold text-white shadow-glow sm:rounded-2xl">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy-950">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
