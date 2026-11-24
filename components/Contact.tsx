"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { projectTypes } from "@/lib/content";
import { PillButton } from "./PillButton";
import { Reveal } from "./Reveal";
import { TextIn } from "./TextIn";

type Errors = Partial<Record<"name" | "email" | "project" | "message", string>>;

const fieldClass =
  "w-full rounded-2xl border border-white/10 bg-[#07090f] px-4 text-sm text-foreground outline-none transition placeholder:text-muted/70 focus:border-accent";

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const card = cardRef.current;
    const footer = document.getElementById("footer");
    if (!section || !left || !card || !footer) return;

    const apply = () => {
      const fixed = footer.classList.contains("is-fixed");
      if (!fixed) {
        section.style.marginBottom = "";
        card.style.transform = "";
        section.classList.remove("contact-bridged");
        return;
      }

      const sectionBox = section.getBoundingClientRect();
      const cardBox = card.getBoundingClientRect();
      const leftBox = left.getBoundingClientRect();
      const shiftNow = Number.parseFloat(card.dataset.shift || "0") || 0;
      const half = cardBox.height / 2;
      const layoutCenter = cardBox.top - shiftNow + half;
      const minCenter = leftBox.bottom + 40;
      const shift = Math.max(0, Math.round(minCenter - layoutCenter));
      card.dataset.shift = String(shift);
      card.style.transform = shift > 0 ? `translateY(${shift}px)` : "";

      const hang = Math.max(0, Math.round(sectionBox.bottom - (layoutCenter + shift)));
      section.style.marginBottom = hang > 0 ? `-${hang}px` : "";
      section.classList.toggle("contact-bridged", hang > 0);
    };

    apply();
    const resize = new ResizeObserver(apply);
    resize.observe(card);
    resize.observe(left);
    resize.observe(footer);
    const classes = new MutationObserver(apply);
    classes.observe(footer, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", apply);
    return () => {
      resize.disconnect();
      classes.disconnect();
      window.removeEventListener("resize", apply);
      section.style.marginBottom = "";
      section.classList.remove("contact-bridged");
    };
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const project = String(data.get("project") ?? "");
    const message = String(data.get("message") ?? "").trim();
    const next: Errors = {};

    if (name.length < 2) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email.";
    if (!project) next.project = "Choose a project type.";
    if (message.length < 12) next.message = "Tell us a little more about the work.";

    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  return (
    <section id="contact" ref={sectionRef} className="border-t border-white/10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-5 py-24 md:px-8 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div ref={leftRef}>
          <Reveal>
            <p className="kicker">Contact</p>
          </Reveal>
          <h2 className="mt-4 font-serif text-[clamp(2.4rem,4.6vw,4.25rem)] leading-[1.02] tracking-[-0.03em]">
            <TextIn text="Start a project." />
          </h2>
          <Reveal delay={80}>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted md:text-base">
              Tell us what you are making. We read every note and reply within two working days. If we are not the right studio, we will say so.
            </p>
          </Reveal>
          <dl className="mt-10 grid gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="text-xs tracking-[0.18em] text-accent uppercase">Reply</dt>
              <dd className="mt-2 text-foreground">Within two working days</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.18em] text-accent uppercase">Studio</dt>
              <dd className="mt-2 text-foreground">Working remotely</dd>
            </div>
            <div>
              <dt className="text-xs tracking-[0.18em] text-accent uppercase">Email</dt>
              <dd className="mt-2 text-foreground">studio@arka.studio</dd>
            </div>
          </dl>
          </div>
        </div>

        <Reveal className="relative z-20 lg:col-span-7" delay={80}>
          <div ref={cardRef} className="contact-card">
            <span className="service-border" aria-hidden="true" />
            <div className="contact-card-face p-6 md:p-9">
            {sent ? (
              <div>
                <p className="kicker">Received</p>
                <h3 className="mt-4 font-serif text-4xl tracking-[-0.03em]">Thank you.</h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted">
                  This is a studio demo. Nothing was sent or stored. In a live engagement we would reply within two working days.
                </p>
                <button
                  type="button"
                  className="mt-8 text-sm text-foreground underline decoration-white/30 underline-offset-4"
                  onClick={() => setSent(false)}
                >
                  Write another note
                </button>
              </div>
            ) : (
              <form className="grid gap-5" noValidate onSubmit={onSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" error={errors.name} autoComplete="name" />
                  <Field label="Email" name="email" type="email" error={errors.email} autoComplete="email" />
                </div>
                <Field label="Company" name="company" autoComplete="organization" optional />
                <div>
                  <label htmlFor="project" className="mb-2 block text-xs tracking-[0.14em] text-muted uppercase">
                    Project type
                  </label>
                  <select
                    id="project"
                    name="project"
                    defaultValue=""
                    aria-invalid={Boolean(errors.project)}
                    aria-describedby={errors.project ? "project-error" : undefined}
                    className={`${fieldClass} scheme-dark h-12`}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.project ? (
                    <p id="project-error" className="mt-2 text-xs text-[#ffb4b4]">
                      {errors.project}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-xs tracking-[0.14em] text-muted uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="What are you making, and when do you need it?"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${fieldClass} py-3`}
                  />
                  {errors.message ? (
                    <p id="message-error" className="mt-2 text-xs text-[#ffb4b4]">
                      {errors.message}
                    </p>
                  ) : null}
                </div>
                <div>
                  <PillButton type="submit">Send the note</PillButton>
                </div>
              </form>
            )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  autoComplete,
  optional = false,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  autoComplete?: string;
  optional?: boolean;
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs tracking-[0.14em] text-muted uppercase">
        {label}
        {optional ? <span className="tracking-normal text-muted/70 normal-case"> — optional</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`${fieldClass} h-12`}
      />
      {error ? (
        <p id={errorId} className="mt-2 text-xs text-[#ffb4b4]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
