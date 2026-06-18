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

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:items-stretch">
          {pricingPackages.map((item) => (
            <article
              key={item.name}
              className={`relative flex flex-col rounded-2xl border p-5 transition duration-300 hover:-translate-y-1.5 sm:p-7 lg:rounded-[1.75rem] lg:p-8 ${
                item.highlighted
                  ? "border-blue-400 bg-navy-950 text-white shadow-premium md:col-span-2 lg:col-span-1 lg:-mt-4 lg:mb-4"
                  : "border-slate-200 bg-white text-slate-900 shadow-soft hover:shadow-premium"
              }`}
            >
              {item.highlighted ? (
                <span className="mb-4 w-fit rounded-full bg-blue-500 px-3 py-1.5 text-xs font-black uppercase tracking-normal text-white shadow-glow sm:absolute sm:right-6 sm:top-6 sm:mb-0 sm:px-4">
                  Paling Populer
                </span>
              ) : null}
              <h3 className={`text-2xl font-extrabold ${item.highlighted ? "sm:pr-32" : ""}`}>
                {item.name}
              </h3>
              <p className={`mt-4 text-sm leading-7 ${item.highlighted ? "text-blue-100" : "text-slate-600"}`}>
                {item.description}
              </p>
              <p className="mt-6 text-3xl font-extrabold tracking-normal sm:mt-7 sm:text-4xl">{item.price}</p>
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
