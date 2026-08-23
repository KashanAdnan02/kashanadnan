import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <Reveal stagger className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-7">
        <p data-reveal className="eyebrow">
          {eyebrow}
        </p>
        <h2
          data-reveal
          className="display mt-4 text-3xl text-balance sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>
      </div>
      {(intro || aside) && (
        <div className="lg:col-span-5 lg:pt-10">
          {intro && (
            <p data-reveal className="text-base text-ink-muted lg:text-lg">
              {intro}
            </p>
          )}
          {aside && (
            <div data-reveal className="mt-6">
              {aside}
            </div>
          )}
        </div>
      )}
    </Reveal>
  );
}
