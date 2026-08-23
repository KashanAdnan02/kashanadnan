import { Reveal } from "@/components/Reveal";
import { Stars } from "@/components/Stars";
import { fiverrProof, site } from "@/lib/content";

export function FiverrProof() {
  return (
    <section aria-label="Fiverr track record" className="py-20 lg:py-28">
      <Reveal
        stagger
        className="shell grid items-start gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <div className="lg:col-span-5">
          <p data-reveal className="eyebrow">
            Client proof
          </p>
          <div data-reveal className="mt-6 flex items-end gap-4">
            <p className="display text-7xl text-ink lg:text-8xl">
              {fiverrProof.rating}
            </p>
            <div className="pb-3">
              <Stars className="text-lg" />
              <p className="mt-1 text-sm text-ink-muted">
                {fiverrProof.orders} orders completed on Fiverr
              </p>
            </div>
          </div>
          <a
            data-reveal
            href={site.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
          >
            View my Fiverr profile
          </a>
        </div>

        <div className="lg:col-span-7">
          <h2
            data-reveal
            className="display text-3xl text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            {fiverrProof.headline}
          </h2>
          <p data-reveal className="mt-6 text-base text-ink-muted lg:text-lg">
            {fiverrProof.body}
          </p>

          <ul data-reveal className="mt-8 grid gap-3 sm:grid-cols-2">
            {fiverrProof.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 rounded-xl border border-line bg-paper-raised p-4 text-sm text-ink-muted"
              >
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
                {point}
              </li>
            ))}
          </ul>

          {fiverrProof.reviews.length > 0 && (
            <div data-reveal className="mt-8 grid gap-4 sm:grid-cols-2">
              {fiverrProof.reviews.map((review) => (
                <blockquote
                  key={review.quote}
                  className="rounded-xl border border-line bg-paper-raised p-5"
                >
                  <Stars />
                  <p className="mt-3 font-serif text-lg leading-snug text-ink italic">
                    “{review.quote}”
                  </p>
                  <footer className="mt-3 text-sm text-ink-faint">
                    {review.author} — {review.project}
                  </footer>
                </blockquote>
              ))}
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
