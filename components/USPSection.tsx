"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const uspItems = [
  {
    id: "standards",
    title: "We Maintain The Highest Standards",
    short:
      "Armed with a passion for excellence and a deep understanding of the industry, RNK stands for professionalism, punctuality and trust.",
    long: `
At RNK Rent A Car, we maintain the highest standards in every aspect of our service — from the quality and cleanliness of our vehicles to the professionalism of our team. With a strong commitment to safety, punctuality, and customer satisfaction, we aim to provide a seamless and reliable transportation experience across every corner of India.

Whether you're renting for business or leisure, our well-maintained fleet and personalised support ensure that your journey is comfortable, convenient, and worry-free.
    `,
    image: "/upsection1.webp",
  },
  {
    id: "luxury",
    title: "Enjoy The Sheer Luxury Of Vehicles",
    short:
      "Experience unmatched comfort with RNK’s premium fleet — crafted to deliver first-class journeys for every occasion.",
    long: `
At RNK Rent A Car, we invite you to experience unmatched comfort and class with our premium fleet. Whether you're travelling for business, leisure, or a special occasion, our luxury vehicles are designed to deliver a first-class experience every time.

Indulge in smooth rides, elegant interiors, and top-tier features — because you deserve nothing less.
    `,
    image: "/upsection2.webp",
  },
  {
    id: "packages",
    title: "Offer Packages To Suit Customer Needs",
    short:
      "From hourly rentals to long-term programs, every package is designed around your schedule, comfort, and requirements.",
    long: `
At RNK Rent A Car, we understand that every journey is unique. That’s why we offer flexible rental packages designed to suit your specific requirements — whether it’s for a few hours, a full day, or long-term use.

From business travel to family vacations, our customisable solutions ensure you get exactly what you need, with no compromise on quality or service.
    `,
    image: "/upsection3.webp",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.16 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

type UspItem = (typeof uspItems)[number];

export function USPSection() {
  const [active, setActive] = useState<UspItem | null>(null);

  return (
    <section className="relative py-20 text-white bg-black">
      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* CARDS WRAPPER WITH ANIMATION */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {uspItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="relative group"
            >
              {/* glow border on hover (brand colour) */}
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_top,_rgba(167,39,64,0.4),_transparent_55%)]" />

              <div
                className="
                  relative
                  bg-black/80
                  border border-white/10
                  px-6 py-7
                  rounded-xl
                  backdrop-blur-sm
                  shadow-[0_12px_40px_rgba(0,0,0,0.7)]
                  flex flex-col justify-between
                  overflow-hidden
                "
              >
                {/* subtle top accent line in brand colour */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#A72740] to-transparent scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-400" />

                <div className="space-y-3">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-neutral-400">
                    0{index + 1} · Highlight
                  </p>

                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed line-clamp-4">
                    {item.short}
                  </p>
                </div>

                <button
                  onClick={() => setActive(item)}
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-[11px]
                    uppercase
                    tracking-[0.22em]
                    text-neutral-200
                    hover:text-[#A72740]
                    transition-colors
                  "
                  type="button"
                >
                  Read More
                  <span
                    className="
                      text-xs
                      transform
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* POPUP */}
      {active && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4 z-50"
          onClick={() => setActive(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              bg-white text-black
              max-w-4xl w-full
              rounded-2xl
              overflow-hidden
              shadow-[0_18px_60px_rgba(0,0,0,0.6)]
              flex flex-col md:flex-row
            "
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setActive(null)}
              className="
                absolute right-4 top-4
                h-8 w-8
                rounded-full
                bg-black/5
                flex items-center justify-center
                text-neutral-500
                hover:bg-black/10
                hover:text-black
                transition
                text-lg
              "
              aria-label="Close"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative w-full md:w-[45%] h-56 md:h-auto">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-[55%] p-6 md:p-8 flex flex-col gap-4">
              <h3 className="text-xl md:text-2xl font-semibold mb-1">
                {active.title}
              </h3>
              <p className="text-sm md:text-[15px] leading-relaxed text-neutral-700 whitespace-pre-line">
                {active.long.trim()}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
