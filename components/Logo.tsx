export function Logo() {
  return (
    <span className="logo">
      <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
        <polygon
          points="32,5.5 55.2,18.9 55.2,45.1 32,58.5 8.8,45.1 8.8,18.9"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="miter"
        />
        <path
          d="M23.2 42.2 32 16.2 40.8 42.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="47.2" r="1.85" fill="#c6a15a" />
      </svg>
      <span className="logo-word">ARKA</span>
    </span>
  );
}
