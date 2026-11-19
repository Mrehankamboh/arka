import { heroWords, proofs } from "@/lib/content";
import { PillButton } from "./PillButton";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      <div className="hero-scene" aria-hidden="true">
        <div className="hero-wash hero-wash-a" />
        <div className="hero-wash hero-wash-b" />
        <div className="hero-wash hero-wash-c" />
        <div className="hero-sheen" />
        <div className="hero-grain" />
        <div className="hero-vignette" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pt-24 pb-8 md:px-10 md:pt-28 md:pb-10 lg:px-14">
        <p className="rise kicker" style={{ animationDelay: "0.62s" }}>
          Digital product studio
        </p>

        <h1
          className="mt-6 font-serif text-[clamp(3.6rem,10.2vw,9.75rem)] leading-[0.86] tracking-[-0.045em] md:mt-8"
          aria-label="Products with a precise point of view."
        >
          <span aria-hidden="true">
            {heroWords.map((word, index) => (
              <span
                key={word.text}
                className={`word mr-[0.16em] ${word.italic ? "italic text-foreground" : ""}`}
                style={{ animationDelay: `${0.72 + index * 0.06}s` }}
              >
                {word.text}
              </span>
            ))}
          </span>
        </h1>

        <p
          className="rise mt-10 max-w-md text-base leading-relaxed text-muted md:mt-12 md:text-lg"
          style={{ animationDelay: "1.2s" }}
        >
          Strategy, interface, and engineering for teams who want the product to feel inevitable.
        </p>
        <div className="rise mt-10 flex flex-col items-start gap-3 sm:flex-row md:mt-auto md:mb-10" style={{ animationDelay: "1.32s" }}>
          <PillButton href="#contact">Start a project</PillButton>
          <PillButton href="#work" tone="ghost">
            See the work
          </PillButton>
        </div>

        <dl
          className="rise mt-10 grid gap-6 border-t border-white/10 pt-6 sm:grid-cols-3 md:mt-12 md:pt-8"
          style={{ animationDelay: "1.45s" }}
        >
          {proofs.map((item) => (
            <div key={item.label}>
              <dt className="text-sm text-foreground">{item.label}</dt>
              <dd className="mt-2 max-w-[24ch] text-sm leading-relaxed text-muted">{item.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
