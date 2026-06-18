import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";

export function Services() {
  return (
    <section id="layanan" className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Layanan"
          title="Pilih jenis website yang paling cocok untuk tahap usaha kamu."
          description="Fokusnya sederhana: informasi usaha jelas, tampilan rapi, dan calon pelanggan mudah menghubungi lewat WhatsApp."
          align="center"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-blue-200 hover:shadow-premium sm:p-6 lg:rounded-[1.5rem]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-navy-500 to-emerald-400 opacity-0 transition group-hover:opacity-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-navy-600 transition group-hover:bg-navy-500 group-hover:text-white sm:rounded-2xl">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy-950">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
                <p className="mt-6 text-sm font-bold text-navy-500">Cocok untuk UMKM</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
