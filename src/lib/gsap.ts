"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

gsap.defaults({ ease: "power3.out", duration: 0.8 });

/** Media query for `gsap.matchMedia()` so every reveal respects the OS setting. */
export const NO_REDUCED_MOTION = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, useGSAP };
