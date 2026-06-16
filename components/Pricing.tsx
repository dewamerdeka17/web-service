import { Check, MessageCircle } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { SectionHeader } from "@/components/SectionHeader";
import { pricingPackages } from "@/data/pricing";
import { buildWhatsAppUrl } from "@/data/site";

export function Pricing() {
  return (
    <section id="paket" className="scroll-mt-24 bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Paket harga"
          title="Mulai dari paket ringan, bisa naik sesuai kebutuhan."
          description="Harga dibuat transparan untuk membantu UMKM mulai punya website tanpa takut biaya awal terlalu besar."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricingPackages.map((item) => (
            <article
              key={item.name}
              className={`relative flex flex-col rounded-[1.75rem] border p-6 transition duration-300 hover:-translate-y-1.5 sm:p-8 ${
                item.highlighted
                  ? "border-blue-400 bg-navy-950 text-white shadow-premium lg:-mt-4 lg:mb-4"
                  : "border-slate-200 bg-white text-slate-900 shadow-soft hover:shadow-premium"
              }`}
            >
              {item.highlighted ? (
                <span className="absolute right-6 top-6 rounded-full bg-blue-500 px-4 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white shadow-glow">
                  Paling Populer
                </span>
              ) : null}
              <h3 className={`text-2xl font-extrabold ${item.highlighted ? "pr-32" : ""}`}>
                {item.name}
              </h3>
              <p className={`mt-4 text-sm leading-7 ${item.highlighted ? "text-blue-100" : "text-slate-600"}`}>
                {item.description}
              </p>
              <p className="mt-7 text-4xl font-extrabold tracking-[-0.03em]">{item.price}</p>
              <ul className="mt-7 flex-1 space-y-3">
                {item.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm leading-6">
                    <Check
                      size={18}
                      className={item.highlighted ? "mt-0.5 shrink-0 text-green-300" : "mt-0.5 shrink-0 text-whatsapp"}
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <CtaButton
                href={buildWhatsAppUrl(`Halo saya tertarik dengan ${item.name}`)}
                variant={item.highlighted ? "whatsapp" : "secondary"}
                className="mt-8 w-full"
              >
                <MessageCircle size={18} aria-hidden="true" />
                {item.ctaLabel}
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
