import { PillButton } from "./PillButton";
import { TextIn } from "./TextIn";

export function Statement() {
  return (
    <section className="statement" aria-label="Digital product studio">
      <div className="statement-inner">
        <p className="kicker">Digital product studio</p>
        <h2 className="statement-title">
          <span className="statement-line">
            <TextIn text="Products with a precise" emphasis="precise" />
          </span>{" "}
          <span className="statement-line">
            <TextIn text="point of view." delay={0.32} />
          </span>
        </h2>
        <p className="statement-lead">
          Strategy, interface, and engineering for teams who want the product to feel inevitable.
        </p>
        <div className="statement-actions">
          <PillButton href="#contact">Start a project</PillButton>
          <PillButton href="#work">See the work</PillButton>
        </div>
      </div>
    </section>
  );
}
