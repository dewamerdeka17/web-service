import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "whatsapp";
  className?: string;
};

const variantClass = {
  primary: "bg-navy-500 text-white shadow-glow hover:-translate-y-0.5 hover:bg-navy-600",
  secondary:
    "border border-slate-300 bg-white text-navy-950 shadow-sm hover:-translate-y-0.5 hover:border-navy-200 hover:bg-navy-50",
  whatsapp: "bg-whatsapp text-white shadow-lg shadow-green-500/20 hover:-translate-y-0.5 hover:bg-green-600"
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  className = ""
}: CtaButtonProps) {
  const isExternal = href.startsWith("http");
  const classes = `focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-center text-sm font-bold transition duration-300 ${variantClass[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
