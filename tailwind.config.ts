import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5ff",
          100: "#d9e9ff",
          200: "#b8d4ff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#123a7a",
          800: "#0b2a5b",
          900: "#061a3a",
          950: "#0f172a"
        },
        whatsapp: "#22c55e"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.08)",
        premium: "0 24px 70px rgba(15, 23, 42, 0.12)",
        glow: "0 20px 60px rgba(37, 99, 235, 0.18)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
        float: "float 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
