import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Testimoni"
          title="Dibuat untuk membantu calon pelanggan lebih cepat percaya."
          description="Contoh suara client dari jenis usaha yang dekat dengan target UMKM dan jasa lokal."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-12">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-premium sm:p-6 lg:rounded-[1.5rem]">
              <Quote size={26} className="text-navy-500" aria-hidden="true" />
              <p className="mt-5 leading-7 text-slate-700">{item.quote}</p>
              <div className="mt-6">
                <h3 className="font-bold text-navy-950">{item.name}</h3>
                <p className="text-sm text-slate-500">{item.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
