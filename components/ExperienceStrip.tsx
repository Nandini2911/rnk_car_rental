"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function ExperienceStrip() {
  return (
    <motion.section
      className="relative w-full min-h-[55vh] bg-black text-white overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {/* Background image with subtle hover parallax */}
      <motion.img
        src="/about.webp"
        alt="Mercedes-Benz rental by RNK"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Soft cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          {/* Label */}
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="mb-4 text-[11px] md:text-xs tracking-[0.25em] uppercase text-white"
          >
            Ramniranjan Kedia Rent A Car
          </motion.p>

          {/* Heading with sliding underline */}
          <div className="relative inline-block">
            <h2 className="mx-auto max-w-3xl text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Affordable Rentals, Unforgettable Experiences!
            </h2>

            <motion.span
              className="absolute left-1/2 bottom-0 h-[2px] w-14 -translate-x-1/2 rounded-full"
              style={{ backgroundColor: "#A72740" }}
              initial={{ width: 0 }}
              animate={{ width: 56 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          </div>

          {/* Subheading with breathing effect */}
          <motion.p
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="mx-auto max-w-xl text-sm md:text-base text-neutral-100/90 mb-10"
          >
            Don&apos;t hesitate and send us a message.
          </motion.p>

          {/* Premium CTA button – brand colour */}
          <Link href="/contact">
            <motion.button
              type="button"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 32px rgba(167,39,64,0.75)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="
                inline-flex items-center justify-center
                rounded-full border border-white/85
                px-10 py-3.5 text-sm md:text-base font-medium
                bg-[#A72740] backdrop-blur-sm
                hover:border-[#A72740]
                transition-all
              "
            >
              Contact Now
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
