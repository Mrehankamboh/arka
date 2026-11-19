"use client";

import { useState } from "react";
import { projects } from "@/lib/content";
import { Reveal } from "./Reveal";

function Art({ name }: { name: string }) {
  if (name === "Northline") {
    return (
      <div className="relative h-52 overflow-hidden bg-[#0b1220] md:h-60" aria-hidden="true">
        <span className="absolute inset-y-8 left-[18%] w-px bg-accent/80" />
        <span className="absolute inset-y-14 left-[34%] w-px bg-white/25" />
        <span className="absolute inset-y-6 left-[52%] w-px bg-accent" />
        <span className="absolute inset-y-20 left-[70%] w-px bg-white/15" />
        <span className="absolute right-6 bottom-6 left-6 h-px bg-white/20" />
        <span className="absolute bottom-8 left-6 font-serif text-4xl text-white/80">01</span>
      </div>
    );
  }

  if (name === "Halden") {
    return (
      <div className="relative grid h-52 place-items-center overflow-hidden bg-[#0c1018] md:h-60" aria-hidden="true">
        <span className="absolute h-40 w-40 rounded-full border border-accent/70" />
        <span className="absolute h-24 w-24 rounded-full border border-white/30" />
        <span className="h-8 w-8 rounded-full bg-accent" />
      </div>
    );
  }

  if (name === "Kite") {
    return (
      <div className="relative h-52 overflow-hidden bg-[#0b1020] md:h-60" aria-hidden="true">
        <span className="absolute -left-8 top-10 h-14 w-[140%] -rotate-12 bg-accent" />
        <span className="absolute -left-8 top-28 h-7 w-[140%] -rotate-12 bg-white/15" />
        <span className="absolute -left-8 bottom-4 h-2.5 w-[140%] -rotate-12 bg-white/50" />
      </div>
    );
  }

  return (
    <div className="relative h-52 overflow-hidden bg-[#10141c] md:h-60" aria-hidden="true">
      <span className="absolute -right-2 -bottom-8 font-serif text-[9rem] leading-none text-white/10">M</span>
      <span className="absolute top-1/2 right-6 left-6 h-px bg-accent" />
      <span className="absolute top-6 left-6 text-[0.7rem] tracking-[0.22em] text-muted uppercase">Archive</span>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<string | null>(null);
  const [shown, setShown] = useState<(typeof projects)[number]>(projects[0]);

  function toggle(name: string) {
    const next = projects.find((project) => project.name === name) ?? projects[0];
    setShown(next);
    setActive((current) => (current === name ? null : name));
  }

  return (
    <section id="work" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="kicker">Work</p>
            <h2 className="mt-4 max-w-[14ch] font-serif text-[clamp(2.4rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-0.03em]">
              Selected work, kept original.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={90}>
            <p className="max-w-md text-base leading-relaxed text-muted lg:ml-auto">
              Four products, each one kept original. Open a card to read how the work changed.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const open = active === project.name;
            return (
              <li key={project.name}>
                <Reveal className="h-full" delay={index * 70}>
                  <button
                    type="button"
                    className={`project-card${open ? " is-open" : ""}`}
                    aria-expanded={open}
                    onClick={() => toggle(project.name)}
                  >
                    <span className="service-border" aria-hidden="true" />
                    <div className="project-card-face">
                      <Art name={project.name} />
                      <div className="flex items-end justify-between gap-5 p-6 md:p-7">
                        <div>
                          <div className="flex items-center gap-3">
                            <p className="font-serif text-sm tracking-[0.14em] text-accent">0{index + 1}</p>
                            <p className="text-xs tracking-[0.18em] text-muted uppercase">{project.category}</p>
                          </div>
                          <h3 className="mt-4 font-serif text-[2rem] leading-none tracking-[-0.03em]">{project.name}</h3>
                          <p className="mt-3 max-w-[36ch] text-sm leading-relaxed text-muted">{project.result}</p>
                        </div>
                        <span className="view-pill mb-1 inline-flex shrink-0 items-center rounded-full border border-white/15 px-3 py-1.5 text-xs">
                          {open ? "Close" : "View"}
                        </span>
                      </div>
                    </div>
                  </button>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className={`faq-panel mt-5 ${active ? "is-open" : ""}`}>
          <div className="overflow-hidden">
            <article className="project-detail">
              <p className="text-xs tracking-[0.18em] text-accent uppercase">{shown.category}</p>
              <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em]">{shown.name}</h3>
              <span className="service-rule is-drawn" aria-hidden="true" />
              <p className="mt-5 max-w-2xl leading-relaxed text-muted">{shown.detail}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
