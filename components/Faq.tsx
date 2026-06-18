"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/content";
import { SectionHeader } from "@/components/SectionHeader";

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-slate-50 py-16 sm:py-24 lg:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="FAQ"
          title="Pertanyaan yang biasanya muncul sebelum membuat website."
          description="Jawaban dibuat sederhana supaya calon client yang belum teknis tetap nyaman mengambil keputusan."
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4 lg:mt-12">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article
              key={item.question}
                className={`overflow-hidden rounded-xl border p-4 transition duration-300 sm:rounded-2xl sm:p-5 ${
                  isOpen
                    ? "border-blue-200 bg-white shadow-soft"
                    : "border-slate-200 bg-white/70 hover:border-blue-200 hover:bg-white"
                }`}
            >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="focus-ring flex w-full items-center justify-between gap-3 rounded-xl text-left text-base font-bold text-navy-950 sm:gap-4"
                >
                  {item.question}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                    <ChevronDown
                      size={18}
                      className={`transition duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pt-4 leading-7 text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
