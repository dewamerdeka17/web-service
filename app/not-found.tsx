import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-24">
      <div className="section-shell text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-navy-500">404</p>
        <h1 className="mt-4 text-4xl font-bold text-navy-900">Halaman tidak ditemukan</h1>
        <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-600">
          Link yang kamu buka belum tersedia atau sudah dipindahkan.
        </p>
        <Link
          href="/"
          className="focus-ring mt-8 inline-flex rounded-md bg-navy-700 px-5 py-3 font-semibold text-white hover:bg-navy-800"
        >
          Kembali ke beranda
        </Link>
      </div>
    </section>
  );
}
