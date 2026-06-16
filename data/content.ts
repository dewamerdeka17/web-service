export type FaqItem = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type OrderStep = {
  title: string;
  description: string;
};

export const orderSteps: OrderStep[] = [
  {
    title: "Konsultasi kebutuhan",
    description: "Ceritakan jenis usaha, target website, dan contoh referensi jika ada."
  },
  {
    title: "Pilih paket",
    description: "Pilih paket yang paling sesuai dengan budget dan kebutuhan awal."
  },
  {
    title: "Kirim materi",
    description: "Kirim logo, foto, teks, daftar produk, kontak, dan lokasi usaha."
  },
  {
    title: "Bayar DP",
    description: "Pengerjaan dimulai setelah DP disepakati untuk mengunci jadwal."
  },
  {
    title: "Website dikerjakan",
    description: "Layout, konten, CTA WhatsApp, dan responsive mobile disusun."
  },
  {
    title: "Revisi",
    description: "Perbaikan dilakukan sesuai jatah revisi paket yang dipilih."
  },
  {
    title: "Website online",
    description: "Website siap dibagikan ke pelanggan melalui link Vercel atau domain."
  },
  {
    title: "Pelunasan",
    description: "Pelunasan dilakukan setelah hasil akhir disetujui."
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Raka",
    role: "Pemilik laundry",
    quote:
      "Informasi harga dan layanan jadi lebih rapi. Pelanggan baru langsung chat lewat tombol WhatsApp."
  },
  {
    name: "Nadia",
    role: "Personal brand",
    quote:
      "Website-nya mudah dipahami dan tampilannya bersih. Cocok untuk mulai terlihat profesional."
  },
  {
    name: "Fajar",
    role: "Jasa servis laptop",
    quote:
      "Alur konsultasi jadi lebih jelas karena calon pelanggan bisa baca layanan dulu sebelum chat."
  }
];

export const faqItems: FaqItem[] = [
  {
    question: "Apakah bisa untuk usaha kecil?",
    answer:
      "Bisa. Paket dibuat untuk UMKM, toko kecil, jasa lokal, organisasi sekolah, dan personal brand yang ingin mulai punya website."
  },
  {
    question: "Apakah website bisa dibuka di HP?",
    answer:
      "Bisa. Desain dibuat mobile-first supaya nyaman dibuka dari HP, tablet, laptop, dan desktop."
  },
  {
    question: "Apakah harus punya domain?",
    answer:
      "Tidak harus di awal. Website bisa online dulu memakai subdomain gratis dari Vercel, lalu domain custom bisa ditambahkan nanti."
  },
  {
    question: "Berapa lama pengerjaan?",
    answer:
      "Tergantung paket dan kelengkapan materi. Landing page sederhana biasanya bisa lebih cepat jika materi sudah siap."
  },
  {
    question: "Apakah bisa revisi?",
    answer:
      "Bisa. Setiap paket punya batas revisi yang jelas agar pengerjaan tetap terarah."
  },
  {
    question: "Apakah bisa update produk nanti?",
    answer:
      "Bisa dibantu melalui maintenance atau update manual sesuai kebutuhan dan jumlah perubahan."
  },
  {
    question: "Apakah bayar full di awal?",
    answer:
      "Tidak harus. Umumnya memakai DP 30 sampai 50 persen, lalu pelunasan setelah website disetujui."
  }
];
