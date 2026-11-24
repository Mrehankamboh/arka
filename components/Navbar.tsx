"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/content";
import { Logo } from "./Logo";
import { PillButton } from "./PillButton";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [red, setRed] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("arka-accent") === "red";
    setRed(stored);
    document.documentElement.dataset.accent = stored ? "red" : "blue";
  }, []);

  const toggleAccent = () => {
    const next = !red;
    setRed(next);
    document.documentElement.dataset.accent = next ? "red" : "blue";
    window.localStorage.setItem("arka-accent", next ? "red" : "blue");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const bar = scrolled || open
    ? "border-white/10 bg-[#07090f]/90 backdrop-blur-md"
    : "border-transparent bg-[#07090f]/45 backdrop-blur-sm";

  return (
    <>
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${bar}`}>
      <div className="relative z-50 mx-auto flex h-[4.5rem] w-full max-w-[1200px] items-center justify-between px-5 md:px-8">
        <a href="/#top" className="logo-link" aria-label="ARKA" onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link pill pill-ghost">
              <span className="pill-slide" aria-hidden="true" />
              <span className="pill-label">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="accent-toggle"
            aria-pressed={red}
            aria-label={red ? "Use blue" : "Use red"}
            onClick={toggleAccent}
          >
            <span className="accent-swatch accent-swatch-blue" />
            <span className="accent-swatch accent-swatch-red" />
          </button>
          <div className="hidden lg:block">
            <PillButton href="/#contact" size="sm">
              Start a project
            </PillButton>
          </div>
        <button
          type="button"
          className="nav-menu pill pill-ghost lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="pill-slide" aria-hidden="true" />
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="pill-label relative block h-3 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 h-px w-4 bg-foreground transition duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-1.5 h-px w-4 bg-foreground transition duration-300 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute left-0 h-px w-4 bg-foreground transition duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
        </div>
      </div>
    </header>

      <div
        id="mobile-nav"
        inert={!open}
        className={`fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#07090f] px-6 pt-28 transition-opacity duration-300 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-mobile"
              onClick={() => setOpen(false)}
            >
              <span className="pill-slide" aria-hidden="true" />
              <span className="pill-label">{link.label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-8">
          <PillButton href="/#contact" className="w-full" onClick={() => setOpen(false)}>
            Start a project
          </PillButton>
        </div>
      </div>
    </>
  );
}
