import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/content";

function Thumb({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.title} interface`}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    );
  }

  // Abstract stand-in until a screenshot is dropped into /public/work.
  return (
    <div className="absolute inset-0 overflow-hidden bg-accent-soft">
      <div
        aria-hidden="true"
        className="absolute -right-16 -bottom-24 size-72 rounded-full border border-accent/25"
      />
      <div
        aria-hidden="true"
        className="absolute -right-4 -bottom-16 size-52 rounded-full border border-accent/20"
      />
      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="font-mono text-[0.7rem] tracking-[0.18em] text-ink-faint uppercase">
          {project.category}
        </span>
        <span className="font-mono text-[0.7rem] text-ink-muted">
          {project.stack.slice(0, 3).join(" · ")}
        </span>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const href = project.study
    ? `/work/${project.slug}`
    : (project.live ?? project.repo ?? "#");
  const isInternal = Boolean(project.study);

  return (
    <article
      data-reveal
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised"
    >
      <div className="relative aspect-16/10 overflow-hidden border-b border-line">
        <div data-thumb className="absolute inset-0">
          <Thumb project={project} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="display text-2xl text-ink">{project.title}</h3>
          <span className="font-mono text-xs text-ink-faint">
            {project.year}
          </span>
        </div>

        <p className="mt-1 text-sm text-ink-faint">{project.client}</p>

        <p className="mt-4 text-sm leading-relaxed text-ink-muted">
          {project.summary}
        </p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-ink-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5 text-sm">
          {isInternal ? (
            <Link
              href={href}
              className="font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Read the case study
            </Link>
          ) : null}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
            >
              Live site
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
