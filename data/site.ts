export const siteConfig = {
  name: "Dewa Web Service",
  tagline: "Website profesional untuk UMKM yang ingin terlihat lebih dipercaya",
  description:
    "Jasa pembuatan website murah, cepat, dan profesional untuk meningkatkan kredibilitas bisnis kecil, UMKM, dan personal brand.",
  url: "https://dewawebservice.vercel.app",
  whatsappNumber: "6285606194973",
  whatsappDisplay: "+62 856-0619-4973",
  whatsappMessage: "Halo saya tertarik membuat website",
  email: "dewamerdeka001@gmail.com",
  location: "Indonesia, melayani online",
  socials: {
    instagram: "https://instagram.com/dewanjeng"
  }
};

export function buildWhatsAppUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
