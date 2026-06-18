type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-bold uppercase tracking-normal text-navy-500 sm:text-sm">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-normal text-navy-950 sm:mt-4 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-slate-600 sm:mt-5 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
