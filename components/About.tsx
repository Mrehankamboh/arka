import { principles, stats } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="kicker">About</p>
            <h2 className="mt-4 max-w-[14ch] font-serif text-[clamp(2.4rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-0.03em]">
              A small studio, close to the work.
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={90}>
            <p className="max-w-md text-base leading-relaxed text-muted lg:ml-auto">
              ARKA designs and builds digital products for teams who already know their field and want the product to carry that confidence. We take few projects, stay close to the work, and leave when it can stand without us.
            </p>
          </Reveal>
        </div>

        <dl className="about-stats">
          {stats.map((stat) => (
            <div key={stat.label} className="about-stat">
              <dt className="font-serif text-[clamp(2.4rem,3vw,3.25rem)] leading-none tracking-[-0.03em]">
                {stat.value}
              </dt>
              <dd className="mt-3 text-sm text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {principles.map((principle, index) => (
            <li key={principle.title}>
              <Reveal className="h-full" delay={index * 80}>
                <article className="about-card">
                  <p className="font-serif text-sm tracking-[0.14em] text-accent">0{index + 1}</p>
                  <h3 className="mt-8 font-serif text-[1.85rem] leading-none tracking-[-0.03em]">
                    {principle.title}
                  </h3>
                  <span className="service-rule" aria-hidden="true" />
                  <p className="mt-5 text-sm leading-relaxed text-muted md:text-base">{principle.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
