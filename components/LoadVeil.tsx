"use client";

import { useEffect, useState } from "react";

export function LoadVeil() {
  const [phase, setPhase] = useState<"on" | "leave" | "off">("on");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const leaveTimer = window.setTimeout(() => setPhase("leave"), 700);
    const hideTimer = window.setTimeout(() => setPhase("off"), 1220);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "off") return null;

  return (
    <div className={`veil ${phase === "leave" ? "veil-leave" : ""}`} aria-hidden="true">
      <p className="veil-mark">ARKA</p>
      <span className="veil-rule" />
    </div>
  );
}
