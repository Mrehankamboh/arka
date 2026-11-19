import type { ReactNode } from "react";

type PillButtonProps = {
  href?: string;
  children: ReactNode;
  tone?: "solid" | "ghost";
  size?: "md" | "sm";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
};

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

export function PillButton({
  href,
  children,
  tone = "solid",
  size = "md",
  type = "button",
  className = "",
  onClick,
}: PillButtonProps) {
  const classes = `pill pill-${tone} ${size === "sm" ? "pill-sm" : ""} ${className}`.trim();
  const inner = (
    <>
      <span className="pill-slide" aria-hidden="true" />
      <span className="pill-label">
        {children}
        <Arrow />
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
