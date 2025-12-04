"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    step: "Step 01",
    title: "Share Your Requirement",
    description:
      "Tell us your route, occasion, car preference and schedule — from a single airport transfer to multi-day movements.",
  },
  {
    step: "Step 02",
    title: "Curated Fleet & Quotation",
    description:
      "Our team recommends the ideal fleet mix with transparent pricing, chauffeurs and coordination tailored to your need.",
  },
  {
    step: "Step 03",
    title: "Confirmation & Scheduling",
    description:
      "Once approved, your itinerary is locked-in, vehicles are reserved, and a dedicated coordinator is assigned.",
  },
  {
    step: "Step 04",
    title: "Smooth On-Ground Execution",
    description:
      "Chauffeurs arrive on time, routes are pre-planned, and every movement is tracked for a seamless RNK experience.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-[0.3em] uppercase text-[#A72740] mb-2">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black">
              A Seamless Journey,
              <br className="hidden md:block" />
              <span className="text-[#A72740]"> Designed For Every Traveller.</span>
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-[15px] text-neutral-600 md:max-w-md"
          >
            Whether it's a board meeting, a wedding convoy, or an airport run —
            we've simplified the process into a few polished steps,
            handled end-to-end by RNK’s expert team.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              variants={itemVariants}
              className="
                relative
                flex flex-col gap-3
                bg-white
                border border-neutral-200
                px-5 py-6
                rounded-xl
                shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                hover:shadow-[0_8px_28px_rgba(0,0,0,0.12)]
                hover:border-[#A72740]
                transition-all
                group
              "
            >
              {/* STEP BADGE */}
              <div className="flex items-center gap-3 mb-1">
                <div
                  className="
                    h-8 w-8 rounded-full
                    flex items-center justify-center
                    bg-[#A72740] text-white
                    text-[11px] font-medium tracking-wide
                    shadow-[0_0_12px_rgba(167,39,64,0.5)]
                  "
                >
                  {index + 1}
                </div>

                <p className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
                  {item.step}
                </p>
              </div>

              {/* TITLE */}
              <h3
                className="
                  text-[15px] md:text-[16px]
                  font-semibold
                  text-black
                  group-hover:text-[#A72740]
                  transition-colors
                "
              >
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[13px] leading-relaxed text-neutral-700">
                {item.description}
              </p>

              {/* CTA */}
              <div className="mt-auto flex items-center justify-between text-[11px] text-neutral-500 pt-3">
                <span className="uppercase tracking-[0.22em] group-hover:text-[#A72740] transition-all">
                  {index === 0
                    ? "Start Here"
                    : index === steps.length - 1
                    ? "Enjoy The Ride"
                    : "Next Step"}
                </span>

                <span
                  className="
                    text-neutral-600
                    text-xs
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:text-[#A72740]
                  "
                >
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
