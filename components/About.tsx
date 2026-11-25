import { principles, stats } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TextIn } from "./TextIn";

export function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto grid w-full max-w-[1200px] items-start gap-14 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12 lg:gap-12">
        <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
          <Reveal>
            <p className="kicker">About</p>
          </Reveal>
          <h2 className="mt-4 max-w-[11ch] font-serif text-[clamp(2.8rem,5vw,4.6rem)] leading-[0.96] tracking-[-0.035em]">
            <TextIn text="A small studio, close to the work." />
          </h2>
          <Reveal delay={80}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              ARKA designs and builds digital products for teams who already know their field and want the product to carry that confidence. We take few projects, stay close to the work, and leave when it can stand without us.
            </p>
          </Reveal>

          <dl className="about-stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat">
                <dt className="font-serif text-[clamp(2.2rem,3vw,2.8rem)] font-bold leading-none tracking-[-0.03em]">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="flex flex-col gap-4 lg:col-span-7">
          {principles.map((principle, index) => (
            <li key={principle.title}>
              <Reveal className="h-full" delay={index * 80}>
                <article className="about-card">
                  <span className="service-border" aria-hidden="true" />
                  <div className="about-card-face">
                    <p className="about-index">0{index + 1}</p>
                    <div>
                      <h3 className="font-serif text-[clamp(1.85rem,2.4vw,2.45rem)] leading-none tracking-[-0.03em]">
                        {principle.title}
                      </h3>
                      <span className="service-rule" aria-hidden="true" />
                      <p className="mt-4 max-w-[36ch] text-sm leading-relaxed text-muted md:text-base">
                        {principle.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
