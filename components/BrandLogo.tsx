import Image from "next/image";
import { siteConfig } from "@/data/site";

type BrandLogoProps = {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
};

export function BrandLogo({
  variant = "dark",
  showTagline = false,
  className = ""
}: BrandLogoProps) {
  const isLight = variant === "light";

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft ring-1 ring-slate-200/70">
        <Image
          src="/images/dewa-web-service-logo.svg"
          alt=""
          width={44}
          height={44}
          aria-hidden="true"
          className="h-11 w-11"
          priority
        />
      </span>
      <span className="min-w-0">
        <span
          className={`block whitespace-nowrap text-[1.35rem] leading-none tracking-[-0.03em] ${
            isLight ? "text-white" : "text-navy-950"
          }`}
        >
          <span className="font-extrabold">Dewa</span>{" "}
          <span className="font-medium">Web Service</span>
        </span>
        {showTagline ? (
          <span
            className={`mt-1 block text-xs font-medium ${
              isLight ? "text-blue-100" : "text-slate-500"
            }`}
          >
            Empowering Your Online Presence
          </span>
        ) : (
          <span className="sr-only">{siteConfig.name}</span>
        )}
      </span>
    </span>
  );
}
