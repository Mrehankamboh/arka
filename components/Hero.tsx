const lines = [
  [
    { text: "Products", hot: false },
    { text: "with", hot: false },
    { text: "a", hot: false },
  ],
  [
    { text: "precise", hot: true },
    { text: "point", hot: false },
    { text: "of", hot: false },
    { text: "view.", hot: false },
  ],
];

export function Hero() {
  return (
    <section id="top" className="hero-shell relative">
      <div className="hero-scene" aria-hidden="true">
        <div className="hero-water-plane">
          <img className="hero-water" src="/hero/water.jpg?v=4" alt="" />
          <div className="hero-water-sheen" />
          <div className="hero-water-tint" />
          <div className="hero-water-edge" />
        </div>
        <img className="hero-stage" src="/hero/scene.jpg?v=4" alt="" />
      </div>

      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-badge rise" style={{ animationDelay: "0.9s" }}>
            <span className="hero-badge-dot" />
            Digital product studio
          </p>

          <h1 className="hero-title" aria-label="Products with a precise point of view.">
            <span aria-hidden="true">
              {lines.map((line) => (
                <span className="hero-line" key={line.map((w) => w.text).join(" ")}>
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
            Strategy, interface, and engineering for teams who want the product to feel inevitable.
          </p>

          <div className="hero-actions rise" style={{ animationDelay: "1.86s" }}>
            <a className="hero-cta hero-cta-primary" href="#contact">
              <span className="hero-cta-slide" aria-hidden="true" />
              <span className="hero-cta-label">
                Start a project
                <Arrow />
              </span>
            </a>
            <a className="hero-cta hero-cta-ghost" href="#work">
              <span className="hero-cta-slide" aria-hidden="true" />
              <span className="hero-cta-label">
                See the work
                <Arrow />
              </span>
            </a>
          </div>

          <div className="hero-trust rise" style={{ animationDelay: "2s" }}>
            <p className="hero-trust-line hero-trust-proofs">
              Product · Brand systems · Web
            </p>
          </div>
        </div>

        <div className="hero-floaters" aria-hidden="true">
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
