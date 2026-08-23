"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { NO_REDUCED_MOTION, gsap, useGSAP } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  /** Animate `[data-reveal]` descendants in sequence instead of the wrapper itself. */
  stagger?: boolean;
  /** Play on mount rather than waiting for the section to scroll into view. */
  immediate?: boolean;
  delay?: number;
  distance?: number;
  as?: ElementType;
  className?: string;
};

export function Reveal({
  children,
  stagger = false,
  immediate = false,
  delay = 0,
  distance = 22,
  as: Tag = "div",
  className,
}: RevealProps) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(NO_REDUCED_MOTION, () => {
        const root = scope.current;
        if (!root) return;

        const targets = stagger
          ? gsap.utils.toArray<HTMLElement>("[data-reveal]", root)
          : [root];

        if (!targets.length) return;

        gsap.fromTo(
          targets,
          { opacity: 0, y: distance },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay,
            stagger: stagger ? 0.09 : 0,
            scrollTrigger: immediate
              ? undefined
              : { trigger: root, start: "top 88%", once: true },
          },
        );
      });

      return () => media.revert();
    },
    { scope, dependencies: [stagger, immediate, delay, distance] },
  );

  return (
    <Tag
      ref={scope}
      className={className}
      {...(stagger ? {} : { "data-reveal": "" })}
    >
      {children}
    </Tag>
  );
}
