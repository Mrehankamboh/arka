const lines = [
  [
    { text: "Design.", hot: false },
    { text: "Develop.", hot: false },
  ],
  [
    { text: "Grow", hot: true },
    { text: "Together.", hot: false },
  ],
];

export function Hero() {
  return (
    <section id="top" className="hero-shell relative">
      <div className="hero-scene" aria-hidden="true">
        <div className="hero-glow" />
        <div className="hero-disc" />
      </div>
      <img className="hero-mountain" src="/hero/mountain.png?v=2" alt="" />

      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-badge rise" style={{ animationDelay: "0.9s" }}>
            <span className="hero-badge-dot" />
            Creative Studio
            <span className="hero-badge-rule" />
            <span className="hero-badge-quiet">Turn Ideas Into Impact</span>
          </p>

          <h1 className="hero-title" aria-label="Design. Develop. Grow Together.">
            <span aria-hidden="true">
              {lines.map((line) => (
                <span className="hero-line" key={line[0].text}>
                  {line.map((word, index) => (
                    <span
                      key={word.text}
                      className={`word is-on${word.hot ? " hero-hot" : ""}`}
                      style={{ animationDelay: `${1.02 + index * 0.08}s` }}
                    >
                      {word.text}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </h1>

          <p className="hero-lead rise" style={{ animationDelay: "1.7s" }}>
            We craft stunning digital experiences, build powerful solutions, and help brands grow in the modern world.
          </p>

          <div className="hero-actions rise" style={{ animationDelay: "1.86s" }}>
            <a className="hero-cta hero-cta-primary" href="#work">
              Explore Our Work
              <Arrow />
            </a>
            <a className="hero-cta hero-cta-ghost" href="#work">
              <span className="hero-play" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="11" height="11">
                  <path d="M6.2 4.1v7.8L12.4 8 6.2 4.1Z" fill="currentColor" />
                </svg>
              </span>
              Watch Showreel
            </a>
          </div>

          <div className="hero-trust rise" style={{ animationDelay: "2s" }}>
            <img className="hero-faces" src="/hero/faces.png" alt="" />
            <p className="hero-trust-line">Trusted by 100+ happy clients</p>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="hero-orbit">
            <span className="hero-orbit-ring" />
            <span className="hero-orbit-dot" />
            <span className="hero-orbit-dot hero-orbit-dot-b" />
          </div>
          <img className="hero-sculpture" src="/hero/sculpture.png?v=7" alt="" />

          <div className="hero-chip hero-chip-sat">
            <span className="hero-chip-mark">
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path d="M2 12V8M6 12V5M10 12V3M14 12V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            <span>
              <strong>100%</strong>
              Client Satisfaction
            </span>
            <Arrow />
          </div>

          <div className="hero-chip hero-chip-speed">
            <span className="hero-chip-mark">
              <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                <path d="M9 1.5 3.5 9H8l-1 5.5L13 7H8.5L9 1.5Z" fill="currentColor" />
              </svg>
            </span>
            <span>
              <strong>3x</strong>
              Faster Delivery
            </span>
            <Arrow />
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9.5 4.5 13 8l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
