import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PillButton } from "@/components/PillButton";
import { ProjectArt } from "@/components/ProjectArt";
import { TextIn } from "@/components/TextIn";
import { getProject, projects } from "@/lib/content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project — ARKA" };
  return {
    title: `${project.name} — ARKA`,
    description: project.result,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  const number = String(index + 1).padStart(2, "0");
  const total = String(projects.length).padStart(2, "0");
  const facts = [
    { label: "Category", value: project.category },
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
  ];

  return (
    <>
      <Navbar />
      <main id="main" className="relative z-10 flow-root bg-background">
        <article>
          <header className="case-stage">
            <div className="case-stage-bar">
              <Link href="/#work" className="footer-link">
                All work
              </Link>
              <p className="text-xs tracking-[0.18em] text-muted">
                {number} / {total}
              </p>
            </div>

            <div className="case-stage-copy">
              <div className="case-stage-main">
                <p className="rise kicker" style={{ animationDelay: "0.12s" }}>
                  {number} — {project.category}
                </p>
                <h1 className="mt-4 max-w-[10ch] font-serif text-[clamp(3.5rem,6.4vw,6.5rem)] leading-[0.9] tracking-[-0.045em]">
                  <TextIn text={project.name} immediate delay={0.2} />
                </h1>
                <p
                  className="rise mt-5 max-w-md font-serif text-[clamp(1.25rem,1.8vw,1.6rem)] leading-[1.3] tracking-[-0.03em]"
                  style={{ animationDelay: "0.38s" }}
                >
                  {project.result}
                </p>

                <dl className="case-facts">
                  {facts.map((fact) => (
                    <div key={fact.label} className="case-fact">
                      <dt className="text-xs tracking-[0.18em] text-accent uppercase">{fact.label}</dt>
                      <dd className="mt-2 text-sm leading-snug text-foreground">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="case-stage-art">
              <ProjectArt name={project.name} size="stage" />
            </div>
          </header>

          <div className="case-body">
            <p className="kicker">The work</p>
            <p className="case-lead">{project.detail}</p>

            <ol className="case-notes">
              {project.notes.map((note, noteIndex) => (
                <li key={note} className="case-note">
                  <p className="font-serif text-[1.7rem] leading-none tracking-[-0.03em] text-accent">
                    {String(noteIndex + 1).padStart(2, "0")}
                  </p>
                  <p className="max-w-2xl text-sm leading-relaxed md:text-base">{note}</p>
                </li>
              ))}
            </ol>

            <Link href={`/work/${next.slug}`} className="case-next-link">
              <div className="case-next-copy">
                <p className="text-xs tracking-[0.18em] text-muted uppercase">Next project</p>
                <p className="case-next-name mt-3 font-serif text-[clamp(2.6rem,4.5vw,4rem)] font-bold leading-none tracking-[-0.035em] transition-colors duration-300">
                  {next.name}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{next.result}</p>
              </div>
              <div className="case-next-art">
                <ProjectArt name={next.name} size="stage" />
              </div>
            </Link>

            <div className="mt-8">
              <PillButton href="/#contact">Start a project</PillButton>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
