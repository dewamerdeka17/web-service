"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { type MouseEvent, useEffect, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { CtaButton } from "@/components/CtaButton";
import { buildWhatsAppUrl } from "@/data/site";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Paket", href: "#paket" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" }
];

function smoothScrollToSection(target: HTMLElement) {
  const navbarHeight =
    document.querySelector("[data-main-navbar]")?.getBoundingClientRect().height ?? 72;
  const targetY = Math.max(
    target.getBoundingClientRect().top + window.scrollY - navbarHeight - 16,
    0
  );
  const startY = window.scrollY;
  const distance = targetY - startY;
  const duration = 700;
  const startTime = performance.now();

  function easeInOutCubic(progress: number) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  }

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    window.scrollTo(0, startY + distance * easeInOutCubic(progress));

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/" || !window.location.hash) {
      return;
    }

    const target = document.getElementById(window.location.hash.slice(1));

    if (!target) {
      return;
    }

    requestAnimationFrame(() => {
      smoothScrollToSection(target);
    });
  }, [pathname]);

  if (pathname.startsWith("/demo/")) {
    return null;
  }

  function handleNavClick(event: MouseEvent<HTMLAnchorElement>, href: string) {
    setOpen(false);

    if (pathname !== "/" || !href.startsWith("#")) {
      return;
    }

    const target = document.getElementById(href.slice(1));

    if (!target) {
      return;
    }

    event.preventDefault();
    smoothScrollToSection(target);
    window.history.pushState(null, "", href);
  }

  return (
    <header
      data-main-navbar
      className="sticky top-0 z-50 border-b border-white/70 bg-white/85 shadow-sm shadow-slate-900/5 backdrop-blur-xl"
    >
      <nav className="section-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="focus-ring rounded-xl">
          <BrandLogo />
        </Link>

        <div className="hidden items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-2 py-2 shadow-sm lg:flex">
          {navItems.map((item) => {
            const href = pathname === "/" ? item.href : `/${item.href}`;

            return (
              <Link
                key={item.href}
                href={href}
                scroll={false}
                onClick={(event) => handleNavClick(event, item.href)}
                className="focus-ring rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-navy-50 hover:text-navy-800"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <CtaButton href={buildWhatsAppUrl()} variant="whatsapp" className="min-h-10 px-4 py-2">
            <MessageCircle size={18} aria-hidden="true" />
            Konsultasi Gratis
          </CtaButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-navy-950 shadow-sm lg:hidden"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden">
          <div className="section-shell grid gap-2 py-4">
            {navItems.map((item) => {
              const href = pathname === "/" ? item.href : `/${item.href}`;

              return (
                <Link
                  key={item.href}
                  href={href}
                  scroll={false}
                  onClick={(event) => handleNavClick(event, item.href)}
                  className="focus-ring rounded-xl px-3 py-3 font-semibold text-slate-700 hover:bg-navy-50"
                >
                  {item.label}
                </Link>
              );
            })}
            <CtaButton href={buildWhatsAppUrl()} variant="whatsapp" className="mt-2 w-full">
              <MessageCircle size={18} aria-hidden="true" />
              Konsultasi Gratis
            </CtaButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
