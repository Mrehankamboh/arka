import { services } from "@/lib/content";
import { Reveal } from "./Reveal";
import { TextIn } from "./TextIn";

export function Services() {
  return (
    <section id="services" className="border-t border-white/10">
      <div className="mx-auto w-full max-w-[1200px] px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kicker">Services</p>
            </Reveal>
            <h2 className="mt-4 max-w-[12ch] font-serif text-[clamp(2.4rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-0.03em]">
              <TextIn text="Four ways we are useful." />
            </h2>
          </div>
          <Reveal className="lg:col-span-5" delay={90}>
            <p className="max-w-md text-base leading-relaxed text-muted lg:ml-auto">
              Strategy, interface, systems, and the engineering that holds them. Each one is a way in. Most work uses more than one.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.title}>
              <Reveal className="h-full" delay={index * 80}>
                <article className="service-card">
                  <span className="service-border" aria-hidden="true" />
                  <div className="service-card-face">
                    <div className="relative z-10 flex h-full flex-col p-7 md:p-9">
                      <div className="flex items-center justify-between">
                        <p className="font-serif text-sm tracking-[0.14em] text-accent">{service.index}</p>
                        <span className="service-mark" aria-hidden="true" />
                      </div>
                      <h3 className="mt-12 font-serif text-[clamp(1.75rem,2.2vw,2.35rem)] leading-none tracking-[-0.03em]">
                        {service.title}
                      </h3>
                      <p className="mt-4 text-[0.95rem] text-foreground">{service.outcome}</p>
                      <span className="service-rule" aria-hidden="true" />
                      <p className="service-copy mt-5 max-w-[38ch] text-sm leading-relaxed text-muted md:text-base">
                        {service.body}
                      </p>
                    </div>
                    <span className="service-ghost" aria-hidden="true">
                      {service.index}
                    </span>
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
