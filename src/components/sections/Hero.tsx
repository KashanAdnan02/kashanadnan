"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { NO_REDUCED_MOTION, gsap, useGSAP } from "@/lib/gsap";
import { site, whatsappHref } from "@/lib/content";

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const [portraitReady, setPortraitReady] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.onload = () => setPortraitReady(true);
    img.onerror = () => setPortraitReady(false);
    img.src = site.portrait;
  }, []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(NO_REDUCED_MOTION, () => {
        gsap
          .timeline({ defaults: { duration: 0.85, ease: "power3.out" } })
          .fromTo(
            "[data-hero-line]",
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, stagger: 0.09 },
          )
          .fromTo(
            "[data-hero-cta]",
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.65 },
            "-=0.45",
          )
          .fromTo(
            "[data-hero-photo]",
            { opacity: 0, scale: 0.96 },
            { opacity: 1, scale: 1, duration: 1 },
            "-=0.9",
          );
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <section
      ref={scope}
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,var(--accent-soft),transparent_55%)]"
      />

      <div className="shell relative grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="order-2 lg:order-1 lg:col-span-7">
          <p data-hero-line data-reveal className="eyebrow">
            {site.role} · {site.location}
          </p>

          <h1
            data-hero-line
            data-reveal
            className="display mt-5 text-[2.6rem] leading-[1.05] text-balance sm:text-5xl lg:text-[4.25rem]"
          >
            {site.name}
          </h1>

          <p
            data-hero-line
            data-reveal
            className="mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            I build full-stack web apps that actually{" "}
            <em className="font-serif text-accent italic">ship</em> — Next.js
            and MERN products with real auth, real databases, and real users.
          </p>

          <div
            data-hero-cta
            data-reveal
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              Start a project
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 text-sm text-ink-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink hover:decoration-accent"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div
          data-hero-photo
          data-reveal
          className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:col-span-5 lg:mx-0 lg:max-w-none"
        >
          <figure className="relative mx-auto aspect-square w-full max-w-[22rem] overflow-hidden rounded-[2rem] bg-accent lg:max-w-none">
            {portraitReady ? (
              <Image
                src={site.portrait}
                alt={site.name}
                fill
                priority
                sizes="(min-width: 1024px) 28vw, 80vw"
                className="object-cover object-center"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-accent-soft">
                <span className="font-serif text-5xl text-accent/70">
                  {site.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
              </div>
            )}
          </figure>
        </div>
      </div>
    </section>
  );
}
