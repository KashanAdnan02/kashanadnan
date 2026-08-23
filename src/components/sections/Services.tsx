import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 border-y border-line bg-paper-raised py-20 lg:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              What you can <em className="italic">hand me</em>.
            </>
          }
          intro="Scoped in plain language, quoted before I start, delivered with the source code and deployment in your hands."
        />

        <Reveal stagger className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-reveal
              className="flex flex-col rounded-2xl border border-line bg-paper p-6 lg:p-8"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-xs text-ink-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[0.7rem] tracking-[0.14em] text-accent uppercase">
                  {service.price}
                </span>
              </div>

              <h3 className="display mt-5 text-2xl text-ink lg:text-3xl">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {service.blurb}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-line pt-6">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-ink-muted"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
