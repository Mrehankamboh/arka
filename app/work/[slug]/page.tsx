import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PillButton } from "@/components/PillButton";
import { ProjectArt } from "@/components/ProjectArt";
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

  return (
    <>
      <Navbar />
      <main id="main" className="relative z-10 flow-root bg-background">
        <article className="mx-auto w-full max-w-[1200px] px-5 pt-32 pb-24 md:px-8 md:pt-40 md:pb-32">
          <Link href="/#work" className="footer-link">
            All work
          </Link>

          <p className="kicker mt-10">0{index + 1} — {project.category}</p>
          <h1 className="mt-4 max-w-[12ch] font-serif text-[clamp(3.4rem,8vw,7rem)] leading-[0.92] tracking-[-0.04em]">
            {project.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{project.result}</p>

          <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-white/10">
            <ProjectArt name={project.name} tall />
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs tracking-[0.18em] text-foreground uppercase">The work</p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">{project.detail}</p>
              <ul className="mt-10 space-y-6">
                {project.notes.map((note) => (
                  <li key={note} className="border-t border-white/10 pt-6 text-sm leading-relaxed text-foreground md:text-base">
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid content-start gap-8 border-t border-white/10 pt-8 lg:col-span-4 lg:col-start-9 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <dt className="text-xs tracking-[0.18em] text-accent uppercase">Year</dt>
                <dd className="mt-2 text-foreground">{project.year}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] text-accent uppercase">Role</dt>
                <dd className="mt-2 text-foreground">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs tracking-[0.18em] text-accent uppercase">Timeline</dt>
                <dd className="mt-2 text-foreground">{project.timeline}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs tracking-[0.18em] text-muted uppercase">Next project</p>
              <Link href={`/work/${next.slug}`} className="mt-3 inline-block font-serif text-4xl tracking-[-0.03em] text-foreground">
                {next.name}
              </Link>
            </div>
            <PillButton href="/#contact">Start a project</PillButton>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
