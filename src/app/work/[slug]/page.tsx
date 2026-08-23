import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { caseStudies, projects, site, whatsappHref } from "@/lib/content";

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} — ${project.client}`,
    description: project.summary,
    openGraph: {
      title: `${project.title} · ${site.name}`,
      description: project.summary,
      url: `${site.url}/work/${project.slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project?.study) notFound();

  const { study } = project;
  const others = caseStudies.filter((item) => item.slug !== project.slug).slice(0, 3);

  return (
    <article className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <header className="shell">
        <Link
          href="/#work"
          className="text-sm text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
        >
          ← All work
        </Link>

        <Reveal stagger className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p data-reveal className="eyebrow">
              {project.category} — {project.year}
            </p>
            <h1
              data-reveal
              className="display mt-5 text-4xl text-balance sm:text-5xl lg:text-6xl"
            >
              {project.title}
            </h1>
            <p data-reveal className="mt-4 text-lg text-ink-muted">
              {project.client}
            </p>
          </div>

          <div className="lg:col-span-5 lg:pt-14">
            <p data-reveal className="text-base leading-relaxed text-ink-muted">
              {project.summary}
            </p>
            <div data-reveal className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
                >
                  Open live site
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
                >
                  View code
                </a>
              )}
            </div>
          </div>
        </Reveal>
      </header>

      <Reveal className="shell mt-14">
        <div className="relative aspect-16/9 overflow-hidden rounded-2xl border border-line">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} interface`}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 overflow-hidden bg-accent-soft">
              <div
                aria-hidden="true"
                className="absolute -right-24 -bottom-40 size-[30rem] rounded-full border border-accent/25"
              />
              <div
                aria-hidden="true"
                className="absolute -right-10 -bottom-28 size-80 rounded-full border border-accent/20"
              />
              <div className="relative flex h-full flex-col justify-between p-8 lg:p-12">
                <span className="eyebrow">{project.client}</span>
                <span className="max-w-lg font-mono text-xs leading-relaxed text-ink-muted">
                  {project.stack.join(" · ")}
                </span>
              </div>
            </div>
          )}
        </div>
      </Reveal>

      <div className="shell mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-28">
            <div className="rounded-2xl border border-line bg-paper-raised p-6">
              <p className="eyebrow">Built with</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] text-ink-muted"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-line pt-6">
                <p className="eyebrow">Role</p>
                <p className="mt-2 text-sm text-ink-muted">
                  Sole developer — architecture, build, deployment.
                </p>
              </div>
            </div>
          </Reveal>
        </aside>

        <div className="lg:col-span-8">
          <Reveal stagger className="space-y-14">
            <section data-reveal>
              <h2 className="display text-2xl text-ink lg:text-3xl">
                The problem
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted lg:text-lg">
                {study.problem}
              </p>
            </section>

            <section data-reveal>
              <h2 className="display text-2xl text-ink lg:text-3xl">
                What I built
              </h2>
              <ol className="mt-6 space-y-5">
                {study.approach.map((step, index) => (
                  <li key={step} className="flex gap-5">
                    <span className="mt-1 font-mono text-xs text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="flex-1 border-b border-line pb-5 text-base leading-relaxed text-ink-muted">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <section data-reveal>
              <h2 className="display text-2xl text-ink lg:text-3xl">
                The outcome
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-muted lg:text-lg">
                {study.outcome}
              </p>
            </section>
          </Reveal>
        </div>
      </div>

      <Reveal className="shell mt-24">
        <div className="rounded-2xl border border-line bg-paper-raised p-8 lg:p-12">
          <h2 className="display text-3xl text-balance lg:text-4xl">
            Want something like this built for you?
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink-muted">
            Send me the idea and you&apos;ll get a scope, a timeline and a
            straight answer on whether I&apos;m the right person for it.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              Start a project
            </Link>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>

      {others.length > 0 && (
        <div className="shell mt-20">
          <p className="eyebrow">More case studies</p>
          <Reveal stagger className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                data-reveal
                href={`/work/${item.slug}`}
                className="group rounded-2xl border border-line p-5 transition-colors hover:border-ink"
              >
                <p className="font-mono text-[0.7rem] tracking-[0.14em] text-ink-faint uppercase">
                  {item.category}
                </p>
                <p className="display mt-3 text-xl text-ink">{item.title}</p>
                <p className="mt-2 text-sm text-ink-faint transition-colors group-hover:text-ink-muted">
                  {item.client}
                </p>
              </Link>
            ))}
          </Reveal>
        </div>
      )}
    </article>
  );
}
