"use client";

import { useEffect, useRef, useState } from "react";

type TextInProps = {
  text: string;
  delay?: number;
  immediate?: boolean;
  emphasis?: string;
};

export function TextIn({ text, delay = 0, immediate = false, emphasis }: TextInProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [play, setPlay] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    if (immediate) {
      setPlay(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setPlay(true);
        observer.disconnect();
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <span ref={ref}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>
          <span
            className={`word${emphasis === word ? " italic" : ""}${play ? " is-on" : ""}`}
            style={{ animationDelay: `${delay + index * 0.07}s` }}
          >
            {word}
          </span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
