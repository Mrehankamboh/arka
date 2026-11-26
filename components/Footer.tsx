"use client";

import { useEffect, useRef } from "react";
import { navLinks, socialLinks } from "@/lib/content";

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const spacer = document.getElementById("footer-spacer");
    if (!footer || !spacer) return;

    const measure = () => {
      const fits = footer.offsetHeight <= window.innerHeight - 72;
      footer.classList.toggle("is-fixed", fits);
      spacer.style.height = fits ? `${footer.offsetHeight}px` : "0px";
      if (!fits) footer.style.setProperty("--footer-p", "1");
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(footer);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const spacer = document.getElementById("footer-spacer");
        if (!spacer || !footer.classList.contains("is-fixed")) {
          footer.style.setProperty("--footer-p", "1");
          return;
        }
        const rect = spacer.getBoundingClientRect();
        if (rect.height === 0) return;
        const view = window.innerHeight;
        const visible = Math.min(rect.bottom, view) - Math.max(rect.top, 0);
        const progress = Math.min(1, Math.max(0, visible / Math.min(rect.height, view)));
        footer.style.setProperty("--footer-p", progress.toFixed(3));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div id="footer-spacer" aria-hidden="true" />
      <footer ref={footerRef} id="footer" className="footer-sticky">
        <div className="footer-bg" aria-hidden="true">
          <img className="footer-bg-image" src="/footer/bg.png?v=1" alt="" />
          <div className="footer-bg-shade" />
        </div>
        <div className="footer-rise mx-auto w-full max-w-[1200px] px-5 py-14 md:px-8 md:py-16">
          <p className="font-serif text-[clamp(4.5rem,16vw,9.5rem)] font-bold leading-[0.85] tracking-[-0.045em]">ARKA</p>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted md:text-base">
            A digital product studio for teams who want the work to feel inevitable.
          </p>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            <div>
              <p className="text-xs tracking-[0.18em] text-foreground uppercase">Navigate</p>
              <ul className="mt-4 space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] text-foreground uppercase">Studio</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                <li>
                  <a href="/#contact" className="footer-link">
                    New projects
                  </a>
                </li>
                <li>
                  <a href="/#about" className="footer-link">
                    The studio
                  </a>
                </li>
                <li>studio@arka.studio</li>
                <li>Working remotely</li>
              </ul>
            </div>

            <div>
              <p className="text-xs tracking-[0.18em] text-foreground uppercase">Social</p>
              <ul className="mt-4 space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 ARKA. All rights reserved.</p>
            <p>Digital product studio</p>
          </div>
        </div>
      </footer>
    </>
  );
}
