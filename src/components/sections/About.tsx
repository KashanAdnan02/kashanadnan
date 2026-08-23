import { Reveal } from "@/components/Reveal";
import { about, skillGroups } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28">
      <Reveal
        stagger
        className="shell grid gap-14 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-7">
          <p data-reveal className="eyebrow">
            About
          </p>
          <h2
            data-reveal
            className="display mt-4 text-3xl text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            {about.heading}
          </h2>

          <div className="mt-8 space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                data-reveal
                className="text-base leading-relaxed text-ink-muted lg:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div
            data-reveal
            className="rounded-2xl border border-line bg-paper-raised p-6 lg:p-7"
          >
            <p className="eyebrow">How I work</p>
            <ul className="mt-4 space-y-3">
              {about.workingWith.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink-muted">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-0.5 size-4 shrink-0 text-accent"
                    aria-hidden="true"
                  >
                    <path d="M20 6.5 9.5 17 4 11.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="mt-6 space-y-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-[0.7rem] tracking-[0.18em] text-ink-faint uppercase">
                  {group.label}
                </p>
                <ul className="mt-2.5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
