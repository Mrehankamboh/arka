import Link from "next/link";
import { projects } from "@/lib/content";
import { ProjectArt } from "./ProjectArt";
import { Reveal } from "./Reveal";

export function Projects() {
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
              Four products, each one kept original. Open a project to read how the work changed.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Reveal className="h-full" delay={index * 70}>
                <Link href={`/work/${project.slug}`} className="project-card">
                  <span className="service-border" aria-hidden="true" />
                  <div className="project-card-face">
                    <ProjectArt name={project.name} />
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
                        View
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
