# Dewa Web Service

Website promosi jasa pembuatan website untuk UMKM, personal brand, toko kecil, dan jasa lokal.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide React

## Menjalankan Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Script

```bash
npm run lint
npm run build
npm run start
```

## Konfigurasi Kontak

Nomor WhatsApp, email, lokasi, nama brand, dan URL website ada di `data/site.ts`.
Ganti `whatsappNumber` dari placeholder `628xxxxxxxxxx` ke nomor asli sebelum deploy.

## Halaman

- `/` - landing page utama
- `/portfolio` - daftar portfolio dan filter kategori
- `/portfolio/[slug]` - detail portfolio
- `/contact` - kontak dan CTA WhatsApp

## Deploy

Project siap dideploy ke Vercel setelah dependency terinstall dan `npm run build` berhasil.
