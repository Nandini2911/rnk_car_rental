// components/FleetSection.tsx
import { AnimatedSection } from "@/components/AnimatedSection";

const fleet = [
  { name: "Mercedes-Benz S-Class 350d", tag: "Flagship luxury sedan" },
  { name: "Mercedes-Benz GLS 450d", tag: "Premium luxury SUV" },
  { name: "Toyota Innova Crysta", tag: "Comfort MPV for groups" },
  { name: "BMW & Audi Sedans", tag: "Executive class options" },
];

export function FleetSection() {
  return (
    <AnimatedSection id="fleet">
      <section className="max-w-6xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs tracking-[0.35em] text-red-500 uppercase mb-3">
              FLEET
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              A premium fleet, curated for every brief.
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-md text-neutral-300">
            From CEOs to wedding processions, choose from a line-up that
            signals reliability, comfort and quiet luxury.
          </p>
        </div>

        <div className="grid gap-4">
          {fleet.map((car) => (
            <div
              key={car.name}
              className="flex items-center justify-between gap-3 border-b border-white/10 py-3"
            >
              <div>
                <p className="text-sm md:text-base font-medium">
                  {car.name}
                </p>
                <p className="text-xs md:text-sm text-neutral-400">
                  {car.tag}
                </p>
              </div>
              <span className="text-[11px] md:text-xs uppercase tracking-[0.25em] text-red-500">
                Chauffeur Driven
              </span>
            </div>
          ))}
        </div>
      </section>
    </AnimatedSection>
  );
}
