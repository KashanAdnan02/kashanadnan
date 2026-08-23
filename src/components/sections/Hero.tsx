"use client";

import { useRef } from "react";
import { Stars } from "@/components/Stars";
import { NO_REDUCED_MOTION, gsap, useGSAP } from "@/lib/gsap";
import { fiverrProof, site, skillGroups, whatsappHref } from "@/lib/content";

export function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(NO_REDUCED_MOTION, () => {
        gsap
          .timeline({ defaults: { duration: 0.9 } })
          .fromTo(
            "[data-hero-line]",
            { opacity: 0, y: 34 },
            { opacity: 1, y: 0, stagger: 0.1 },
          )
          .fromTo(
            "[data-hero-tail] [data-reveal]",
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, stagger: 0.08, duration: 0.7 },
            "-=0.5",
          )
          .fromTo(
            "[data-hero-card]",
            { opacity: 0, y: 26 },
            { opacity: 1, y: 0, duration: 0.9 },
            "-=0.85",
          );
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="relative overflow-hidden pt-32 pb-16 lg:pt-44 lg:pb-24"
    >
      {/* Soft accent wash behind the headline. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[38rem] rounded-full bg-accent-soft blur-3xl"
      />

      <div className="shell relative grid gap-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p data-hero-line data-reveal className="eyebrow">
            {site.role} — {site.location}
          </p>

          <h1 className="display mt-6 text-[2.3rem] leading-[1.06] text-balance sm:text-5xl lg:text-[4.4rem]">
            <span data-hero-line data-reveal className="block">
              I build full-stack web
            </span>
            <span data-hero-line data-reveal className="block">
              apps that actually{" "}
              <em className="font-serif text-accent italic">ship</em>.
            </span>
          </h1>

          <div data-hero-tail>
            <p
              data-reveal
              className="mt-8 max-w-xl text-lg text-ink-muted lg:text-xl"
            >
              Next.js and MERN products with real authentication, real databases
              and real users — for founders, agencies and small teams who need
              the thing finished, not prototyped.
            </p>

            <div data-reveal className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-85"
              >
                See selected work
              </a>
              <a
                href={site.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Hire on Fiverr
                <Stars className="translate-y-px" />
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 text-sm text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
              >
                Or message me on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <aside
          data-hero-card
          data-reveal
          className="lg:col-span-5 lg:pt-4"
          aria-label="Availability and credentials"
        >
          <div className="rounded-2xl border border-line bg-paper-raised p-6 lg:p-7">
            <div className="flex items-center gap-2.5">
              <span className="relative grid size-2.5 place-items-center">
                <span className="absolute size-2.5 animate-ping rounded-full bg-accent opacity-60" />
                <span className="size-2 rounded-full bg-accent" />
              </span>
              <p className="text-sm font-medium text-ink">
                Available for new projects
              </p>
            </div>

            <dl className="mt-6 space-y-4 border-t border-line pt-6 text-sm">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-ink-faint">Fiverr</dt>
                <dd className="flex items-center gap-2 font-medium text-ink">
                  {fiverrProof.rating} rating
                  <Stars />
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-ink-faint">Orders delivered</dt>
                <dd className="font-medium text-ink">{fiverrProof.orders}</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-ink-faint">Students taught</dt>
                <dd className="font-medium text-ink">150+</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-ink-faint">Working hours</dt>
                <dd className="font-medium text-ink">{site.timezone}</dd>
              </div>
            </dl>

            <div className="mt-6 border-t border-line pt-6">
              <p className="eyebrow">Core stack</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {[
                  ...skillGroups[0].items.slice(0, 4),
                  ...skillGroups[1].items.slice(0, 2),
                  ...skillGroups[2].items.slice(0, 2),
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[0.7rem] text-ink-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
