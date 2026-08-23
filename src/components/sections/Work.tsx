"use client";

import { useMemo, useRef, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { NO_REDUCED_MOTION, gsap, useGSAP } from "@/lib/gsap";
import { projectFilters, projects, site } from "@/lib/content";

type FilterId = (typeof projectFilters)[number]["id"];

export function Work() {
  const [filter, setFilter] = useState<FilterId>("all");
  const grid = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () =>
      filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(NO_REDUCED_MOTION, () => {
        const cards = gsap.utils.toArray<HTMLElement>(
          "[data-reveal]",
          grid.current,
        );

        cards.forEach((card) => {
          const trigger = { trigger: card, start: "top 92%", once: true };

          gsap.fromTo(
            card,
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.85, scrollTrigger: trigger },
          );

          const thumb = card.querySelector("[data-thumb]");
          if (thumb) {
            gsap.fromTo(
              thumb,
              { clipPath: "inset(0% 0% 100% 0%)", scale: 1.06 },
              {
                clipPath: "inset(0% 0% 0% 0%)",
                scale: 1,
                duration: 1.05,
                delay: 0.12,
                ease: "power2.out",
                scrollTrigger: trigger,
              },
            );
          }
        });
      });

      return () => media.revert();
    },
    { scope: grid, dependencies: [filter], revertOnUpdate: true },
  );

  return (
    <section id="work" className="scroll-mt-24 py-20 lg:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Real projects, live URLs and the{" "}
              <em className="italic">code behind them</em>.
            </>
          }
          intro="Client sites, products and tools I designed, built and deployed. Every card links to something you can open — no mockups standing in for shipped work."
          aside={
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 transition-opacity hover:opacity-70"
            >
              Browse everything on GitHub
            </a>
          }
        />

        <div
          className="mt-14 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects"
        >
          {projectFilters.map((option) => {
            const active = option.id === filter;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                aria-pressed={active}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink-muted hover:border-ink hover:text-ink"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>

        <div
          ref={grid}
          className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
