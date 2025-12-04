"use client";

import { motion, type Variants } from "framer-motion";
import {
  Car,
  BadgeDollarSign,
  Headset,
  RefreshCcw,
  Layers,
} from "lucide-react"; // using lucide icons

const items = [
  {
    title: "Wide Selection",
    description:
      "We provide various vehicles for all needs, from compact cars to spacious SUVs.",
    icon: <Car size={28} strokeWidth={1.5} />,
  },
  {
    title: "Competitive Pricing",
    description:
      "Our rates are designed to be affordable, with transparent pricing and no hidden fees.",
    icon: <BadgeDollarSign size={28} strokeWidth={1.5} />,
  },
  {
    title: "Customer Service",
    description:
      "Our team is dedicated to providing exceptional service, ready to assist with any request.",
    icon: <Headset size={28} strokeWidth={1.5} />,
  },
  {
    title: "Flexible Options",
    description:
      "Choose from short-term or long-term rental options tailored to your travel plans.",
    icon: <RefreshCcw size={28} strokeWidth={1.5} />,
  },
  {
    title: "Additional Services",
    description:
      "We provide extras like GPS, child seats, and insurance for added peace of mind.",
    icon: <Layers size={28} strokeWidth={1.5} />,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function HomeWhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="text-center mb-14"
        >
          <motion.p
            variants={itemVariants}
            className="text-xs tracking-[0.3em] uppercase text-[#A72740] mb-3"
          >
            Why Us
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold leading-tight"
          >
            Trusted By Thousands,
            <br className="hidden md:block" />
            <span className="text-[#A72740]"> Loved For Our Service.</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-sm md:text-base text-neutral-600 mt-3 max-w-2xl mx-auto"
          >
            At RNK, we go beyond just transportation — we deliver comfort, clarity, and
            consistency with every journey.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="
                group 
                bg-white 
                border border-neutral-200 
                shadow-[0_4px_20px_rgba(0,0,0,0.05)]
                hover:shadow-[0_6px_28px_rgba(0,0,0,0.12)]
                rounded-xl
                p-6
                transition-all
                cursor-default
                flex flex-col items-start
                relative
              "
            >
              {/* Icon */}
              <div
                className="
                  text-[#A72740] 
                  mb-4 
                  group-hover:scale-110 
                  transition-transform
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className="
                  text-[17px] 
                  font-semibold 
                  mb-2 
                  group-hover:text-[#A72740] 
                  transition-colors
                "
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom brand accent */}
              <span
                className="
                  absolute 
                  bottom-0 
                  left-0 
                  h-[3px] 
                  w-0 
                  bg-[#A72740] 
                  rounded-full 
                  group-hover:w-full 
                  transition-all 
                  duration-500
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
