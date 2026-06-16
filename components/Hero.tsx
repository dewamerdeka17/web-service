import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Star } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { buildWhatsAppUrl, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="beranda" className="relative isolate overflow-hidden bg-[radial-gradient(circle_at_top_left,#dbeafe_0,transparent_34%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] py-16 sm:py-24 lg:py-28">
      <div className="absolute right-[-120px] top-20 -z-10 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute bottom-10 left-[-120px] -z-10 h-72 w-72 rounded-full bg-emerald-200/35 blur-3xl" />

      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] text-navy-600 shadow-sm backdrop-blur">
            <Sparkles size={16} aria-hidden="true" />
            Website UMKM terjangkau
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-navy-950 sm:text-5xl lg:text-7xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Bantu usaha kamu tampil rapi, cepat dipahami, dan mudah dihubungi lewat WhatsApp dengan website yang mobile-first dan siap dibagikan ke calon pelanggan.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <CtaButton href={buildWhatsAppUrl()} variant="whatsapp" className="px-6">
              <MessageCircle size={19} aria-hidden="true" />
              Konsultasi Gratis
            </CtaButton>
            <CtaButton href="#portfolio" variant="secondary" className="px-6">
              Lihat Portfolio
              <ArrowRight size={18} aria-hidden="true" />
            </CtaButton>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 text-sm sm:grid-cols-3">
            {[
              ["100+", "UMKM terbantu"],
              ["Mobile", "Tampilan responsive"],
              ["WhatsApp", "CTA siap klik"]
            ].map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-white bg-white/80 px-4 py-4 shadow-soft backdrop-blur">
                <p className="text-2xl font-extrabold text-navy-950">{value}</p>
                <p className="mt-1 font-semibold text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up lg:pl-8">
          <div className="absolute -left-2 top-8 z-10 hidden animate-float rounded-2xl border border-white bg-white/90 p-4 shadow-premium backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                <CheckCircle2 size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-bold text-navy-950">Konsultasi gratis</p>
                <p className="text-xs font-medium text-slate-500">Respon cepat via WhatsApp</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-2 bottom-10 z-10 hidden rounded-2xl border border-white bg-navy-950 p-4 text-white shadow-premium sm:block">
            <div className="flex items-center gap-2 text-yellow-300">
              {[1, 2, 3, 4, 5].map((item) => (
                <Star key={item} size={15} fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-2 text-sm font-bold">Tampilan lebih dipercaya</p>
          </div>

          <div className="rounded-[2rem] border border-white bg-white/85 p-3 shadow-premium backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
                <span className="ml-3 hidden h-8 flex-1 items-center rounded-full bg-slate-100 px-4 text-xs font-semibold text-slate-400 sm:flex">
                  dewawebservice.id/website-umkm
                </span>
              </div>

              <div className="bg-white p-5 sm:p-7">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-navy-950 via-navy-800 to-blue-600 p-6 text-white shadow-glow">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                      Website usaha
                    </span>
                    <span className="rounded-full bg-whatsapp px-3 py-1 text-xs font-bold">
                      Chat WhatsApp
                    </span>
                  </div>
                  <h2 className="mt-8 max-w-md text-3xl font-extrabold tracking-[-0.03em] sm:text-4xl">
                    Landing page siap jualan
                  </h2>
                  <p className="mt-4 max-w-md leading-7 text-blue-100">
                    Profil usaha, layanan, harga, testimoni, dan CTA disusun jelas untuk calon pelanggan.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <div className="h-11 w-36 rounded-xl bg-whatsapp" />
                    <div className="h-11 w-28 rounded-xl border border-white/30 bg-white/10" />
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  {[
                    ["Layanan", "Card rapi"],
                    ["Paket", "Harga jelas"],
                    ["Portfolio", "Preview asli"]
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                      <div className="h-9 w-9 rounded-xl bg-blue-100" />
                      <p className="mt-4 font-bold text-navy-950">{title}</p>
                      <p className="mt-1 text-sm text-slate-500">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="h-3 w-24 rounded-full bg-slate-200" />
                      <div className="mt-3 h-2 w-40 rounded-full bg-slate-100" />
                    </div>
                    <div className="h-10 w-28 rounded-xl bg-navy-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            href="/portfolio"
            className="focus-ring mt-5 inline-flex items-center gap-2 rounded-xl text-sm font-bold text-navy-700 transition hover:text-navy-950"
          >
            Lihat contoh portfolio
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
