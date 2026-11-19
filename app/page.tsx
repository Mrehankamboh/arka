import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LoadVeil } from "@/components/LoadVeil";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <LoadVeil />
      <Navbar />
      <main id="main" className="relative z-10 flow-root bg-background">
        <Hero />
        <Services />
        <About />
        <Projects />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
