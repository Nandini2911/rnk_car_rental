"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.22,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

export function IntroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1.4fr,1fr] gap-10 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={itemVariants}
            className="text-[11px] tracking-[0.3em] uppercase text-[#A72740] mb-3"
          >
            Ramniranjan Kedia Rent A Car Pvt. Ltd
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-semibold leading-tight mb-4"
          >
            <span className="text-[#A72740]">
              Redefining Luxury Car Rental Services
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-[15px] text-neutral-700 mb-3"
          >
            Offering excellence since 1969, across{" "}
            <span className="font-semibold text-black">170+ cities Pan India.</span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-[15px] text-neutral-700 leading-relaxed mb-4"
          >
            At <span className="font-semibold">RNK – Ramniranjan Kedia Group</span>, 
            we make your car rental experience unforgettable. From professional
            chauffeurs and a meticulously maintained fleet to seamless
            coordination for corporate, weddings, and VIP logistics — we stand
            for <span className="font-semibold">comfort, reliability and luxury</span>{" "}
            with every ride.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-sm md:text-[15px] text-neutral-700 leading-relaxed mb-6"
          >
            In the bustling city of Mumbai, a visionary named{" "}
            <span className="font-semibold">Ramniranjan Kedia</span>, along with
            co-founder <span className="font-semibold">Mr. Kamal Kedia</span>,
            embarked on a remarkable journey in 1969. With a passion for
            excellence and deep understanding of the travel industry, they laid 
            the foundation of what is today known as{" "}
            <span className="font-semibold">RNK – The Ramniranjan Kedia Group</span>.
          </motion.p>

          {/* CTA + Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="/about"
              className="px-6 py-3 rounded-full 
                         bg-black text-white 
                         text-[11px] font-semibold uppercase tracking-[0.18em]
                         hover:bg-[#A72740] transition-all"
            >
              Read More
            </a>

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-[#A72740]/10 flex items-center justify-center border border-[#A72740]/40">
                <span className="text-[#A72740] font-semibold text-lg">55+</span>
              </div>
              <div className="text-xs leading-snug text-neutral-700">
                <p className="font-semibold text-[13px]">Years of Experience</p>
                <p>Trusted by corporates, hotels & HNIs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT – IMAGE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-40 md:h-120 rounded-2xl overflow-hidden bg-neutral-900">
            
            {/* BRAND COLOR GRADIENT */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#A72740]/70 via-black/30 to-neutral-800" />

            <Image
              src="/intro.jpg"
              alt="RNK luxury car on duty"
              fill
              className="object-cover object-center mix-blend-screen"
            />

            <div className="absolute top-4 left-4 px-3 py-1 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.22em] uppercase text-white/80">
                Since 1969 · RNK Fleet
              </p>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">
                  Pan India Network
                </p>
                <p className="text-sm font-semibold">170+ Cities · 24/7 Support</p>
              </div>
              <div className="text-right text-[11px]">
                <p className="text-white/70">Super Luxury · SUVs · Coaches</p>
                <p className="text-white/50">Chauffeur-driven excellence</p>
              </div>
            </div>
          </div>

          {/* OUTER GLOW (BRAND COLOR) */}
          <div className="pointer-events-none absolute -inset-6 -z-10 
                          bg-gradient-to-b from-[#A72740]/15 via-transparent to-transparent 
                          blur-2xl" />
        </motion.div>
      </div>
    </section>
  );
}
