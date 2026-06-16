# Dewa Web Service

Dewa Web Service adalah website promosi jasa pembuatan website untuk UMKM, toko kecil, jasa lokal, dan personal brand. Fokus utamanya sederhana: menjelaskan layanan dengan rapi, menampilkan paket harga secara jelas, lalu mengarahkan calon pelanggan untuk konsultasi lewat WhatsApp.

Website live:
[https://web-service-eight-bice.vercel.app/](https://web-service-eight-bice.vercel.app/)

## Tentang Project

Project ini dibuat sebagai landing page bisnis yang ringan, responsif, dan mudah dipahami dari perangkat mobile. Di dalamnya sudah ada bagian layanan, paket harga, portfolio demo, alur pemesanan, testimoni, FAQ, dan CTA kontak.

Selain halaman utama, website ini juga punya beberapa demo portfolio seperti website warung kopi, laundry, service laptop, dan katalog produk. Demo tersebut dipakai sebagai contoh bentuk website yang bisa ditawarkan ke calon client.

## Fitur Utama

- Landing page jasa website untuk UMKM
- Paket harga: Hemat, Standar, dan Premium
- Portfolio project dengan halaman detail
- Demo website untuk beberapa jenis usaha
- CTA WhatsApp di beberapa titik penting
- Halaman kontak dengan WhatsApp, email, dan lokasi
- Sitemap dinamis untuk halaman utama, portfolio, demo, dan produk katalog
- Tampilan responsive untuk HP, tablet, dan desktop

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React
- Vercel

## Halaman

| Route | Keterangan |
| --- | --- |
| `/` | Halaman utama Dewa Web Service |
| `/portfolio` | Daftar contoh project dan filter kategori |
| `/portfolio/[slug]` | Detail masing-masing portfolio |
| `/contact` | Halaman kontak |
| `/demo/kopi-senja` | Demo website warung kopi |
| `/demo/cleanwash-laundry` | Demo website laundry |
| `/demo/fixcomp-service` | Demo website service laptop |
| `/demo/tokonesia-mini` | Demo website katalog produk |

## Menjalankan di Lokal

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka:

```bash
http://localhost:3000
```

## Script

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Konfigurasi Kontak

Data brand dan kontak disimpan di:

```bash
data/site.ts
```

File tersebut berisi nama brand, deskripsi, URL website, nomor WhatsApp, email, lokasi, dan link sosial media. Kalau domain production berubah, bagian `url` di file ini juga perlu ikut disesuaikan agar metadata dan sitemap tetap benar.

## Struktur Konten

Beberapa data utama dipisah supaya mudah diedit tanpa membongkar komponen:

| File | Isi |
| --- | --- |
| `data/site.ts` | Informasi brand dan kontak |
| `data/services.ts` | Daftar layanan |
| `data/pricing.ts` | Paket harga |
| `data/portfolio.ts` | Data portfolio dan demo project |
| `data/tokonesia-products.ts` | Data produk untuk demo katalog |

## Deploy

Project ini sudah siap untuk deploy di Vercel. Pastikan build lokal berhasil sebelum push:

```bash
npm run build
```

Setelah deploy, cek kembali link WhatsApp, metadata, sitemap, dan URL production di `data/site.ts`.
