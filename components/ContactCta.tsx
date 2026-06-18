import { CheckCircle2, MessageCircle, PackageCheck } from "lucide-react";
import { CtaButton } from "@/components/CtaButton";
import { buildWhatsAppUrl } from "@/data/site";

export function ContactCta() {
  const benefits = ["Konsultasi gratis", "Respon cepat", "Harga pelajar"];

  return (
    <section id="kontak" className="scroll-mt-24 bg-white py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-blue-700 p-5 text-white shadow-premium sm:p-10 lg:rounded-[2rem] lg:p-14">
          <div className="absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-blue-400/30 blur-3xl" />
          <div className="absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
              <p className="text-xs font-bold uppercase tracking-normal text-green-300 sm:text-sm">
              Kontak WhatsApp
            </p>
              <h2 className="mt-4 max-w-4xl text-3xl font-extrabold tracking-normal sm:text-5xl">
              Siap bantu usaha kamu punya website yang rapi dan mudah dibagikan.
            </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg">
              Kirim kebutuhan website kamu, seperti jenis usaha, halaman yang dibutuhkan, foto, dan contoh referensi.
            </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-sm font-bold text-white sm:px-4"
                  >
                    <CheckCircle2 size={17} className="text-green-300" aria-hidden="true" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/10 p-5 backdrop-blur sm:rounded-[1.5rem]">
              <p className="text-xs font-bold uppercase tracking-normal text-green-300 sm:text-sm">
                Mulai dari chat singkat
              </p>
              <p className="mt-3 text-xl font-extrabold sm:text-2xl">Ceritakan usaha kamu, saya bantu susun arah websitenya.</p>
              <div className="mt-6 flex flex-col gap-3">
                <CtaButton href={buildWhatsAppUrl()} variant="whatsapp" className="w-full text-base">
                  <MessageCircle size={20} aria-hidden="true" />
                  Konsultasi Gratis via WhatsApp
                </CtaButton>
                <CtaButton href="#paket" variant="secondary" className="w-full border-white/25 bg-white/95">
                  <PackageCheck size={19} aria-hidden="true" />
                  Lihat Paket Harga
                </CtaButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
