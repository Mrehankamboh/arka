"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-white/10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
        <Reveal className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <p className="kicker">FAQ</p>
          <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-0.03em]">
            Before we begin.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted md:text-base">
            The questions we are asked before a scope is signed. If yours is not here, write to us.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            const number = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={item.question} delay={index * 40}>
                <div className={`faq-item border-t border-white/10 ${isOpen ? "is-open" : ""}`}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="grid w-full grid-cols-[2.25rem_1fr_2.25rem] items-center gap-4 py-6 text-left md:grid-cols-[3rem_1fr_2.25rem]"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : index)}
                    >
                      <span className="font-serif text-sm tracking-[0.14em] text-accent">{number}</span>
                      <span className="font-serif text-xl tracking-[-0.02em] md:text-2xl">{item.question}</span>
                      <span
                        className={`faq-plus grid h-9 w-9 place-items-center rounded-full border border-white/15 ${isOpen ? "is-open" : ""}`}
                        aria-hidden="true"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 1.5v11M1.5 7h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div id={panelId} role="region" aria-labelledby={buttonId} className={`faq-panel ${isOpen ? "is-open" : ""}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pr-4 pb-6 pl-[calc(2.25rem+1rem)] text-sm leading-relaxed text-muted md:pl-[calc(3rem+1rem)] md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                  <span className="service-rule" aria-hidden="true" />
                </div>
              </Reveal>
            );
          })}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
