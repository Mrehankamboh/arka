import type { Metadata } from "next";
import Script from "next/script";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ARKA — Digital product studio",
  description:
    "ARKA is a digital product studio. Strategy, interface, and engineering for teams who want the product to feel inevitable.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        <Script id="arka-accent" strategy="beforeInteractive">
          {`try{if(localStorage.getItem('arka-accent')==='red')document.documentElement.dataset.accent='red'}catch(e){}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
