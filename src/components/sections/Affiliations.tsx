import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { affiliations, certifications } from "@/lib/content";

export function Affiliations() {
  return (
    <section
      id="trust"
      className="scroll-mt-24 border-y border-line bg-paper-raised py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Background"
          title={
            <>
              Trained at Saylani and SMIT. Now{" "}
              <em className="italic">teaching it myself</em>.
            </>
          }
          intro="I didn't learn this alone and I don't work alone. Here is where my training came from and what I run today."
        />

        <Reveal stagger className="mt-14 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {affiliations.map((item) => (
            <a
              key={item.name}
              data-reveal
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-ink lg:p-7"
            >
              <p className="font-mono text-[0.7rem] tracking-[0.18em] text-ink-faint uppercase">
                {item.period}
              </p>
              <h3 className="display mt-4 text-2xl text-ink">{item.name}</h3>
              <p className="mt-1 text-sm font-medium text-accent">
                {item.role}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-muted">
                {item.blurb}
              </p>
              <span className="mt-6 text-sm text-ink-faint transition-colors group-hover:text-ink">
                View profile →
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal className="mt-12 rounded-2xl border border-line bg-paper p-6 lg:p-7">
          <p className="eyebrow">Certifications</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2.5 text-sm text-ink-muted">
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
                {cert}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
