"use client";

import { AnimatedSection } from "./AnimatedSection";

const cities = [
  "Mumbai",
  "Delhi NCR",
  "Bengaluru",
  "Hyderabad",
  "Pune",
  "Chennai",
  "Goa",
  "Jaipur",
  "Indore",
  "Ahmedabad",
];

export function OurNetwork() {
  return (
    <AnimatedSection id="our-network">
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">

        <p className="text-xs tracking-[0.35em] text-red-500 uppercase mb-3">
          OUR NETWORK
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Pan-India presence with local reliability.
        </h2>

        <p className="text-sm md:text-base text-neutral-300 max-w-2xl mb-10">
          RNK operates directly in Mumbai and through vetted on-ground partners
          across major metros and destination cities.  
          Centralised communication, locally optimised execution.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          {cities.map((city) => (
            <span
              key={city}
              className="px-5 py-2 rounded-full border border-white/15 text-xs md:text-sm text-neutral-200"
            >
              {city}
            </span>
          ))}
        </div>

      </section>
    </AnimatedSection>
  );
}
