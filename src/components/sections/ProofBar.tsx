import { Reveal } from "@/components/Reveal";
import { stats } from "@/lib/content";

export function ProofBar() {
  return (
    <section aria-label="Track record" className="border-y border-line py-12">
      <Reveal
        stagger
        className="shell grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} data-reveal>
            <p className="display text-4xl text-ink lg:text-5xl">
              {stat.value}
              {"unit" in stat && stat.unit ? (
                <span className="ml-1 align-top text-xl text-gold">
                  {stat.unit}
                </span>
              ) : null}
            </p>
            <p className="mt-2 text-sm font-medium text-ink">{stat.label}</p>
            <p className="mt-1 text-sm text-ink-faint">{stat.detail}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
