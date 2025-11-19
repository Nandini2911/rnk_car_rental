"use client";

import { AnimatedSection } from "./AnimatedSection";

export function About() {
  return (
    <AnimatedSection id="about">
      <section className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <p className="text-xs tracking-[0.35em] text-red-500 uppercase mb-3">
          ABOUT RNK
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Built for people who treat time, image and comfort as non-negotiable.
        </h2>

        <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
          RNK is a Mumbai-born rental company with 24+ cars and a trusted
          partner network across India. We work with corporates, wedding
          planners, production houses and HNIs to plan, deploy and manage
          movement with discipline. Every booking is tracked, every chauffeur
          is briefed and every guest is treated like a priority — not a passenger.
        </p>
      </section>
    </AnimatedSection>
  );
}
