"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Corporate Car Rental",
    slug: "corporate-car-rental",
    image: "/Corporate_Car_rental.webp",
  },
  {
    title: "Airport & Railway Transfers",
    slug: "airport-railway-transfers",
    image: "/airport-railway-transfers.jpg",
  },
  {
    title: "Luxury Travel",
    slug: "luxury-travel",
    image: "/luxury-travel.webp",
  },
  {
    title: "Hotel Operations",
    slug: "hotel-operations",
    image: "/hotel-operations.webp",
  },
  {
    title: "Vacation Rentals",
    slug: "vacation-rentals",
    image: "/vacation-rentals.webp",
  },
  {
    title: "VIP Movements",
    slug: "vip-movements",
    image: "/vip-movements.webp",
  },
  {
    title: "Long Term Car Rental",
    slug: "long-term-car-rental",
    image: "/long_term_car_rental.webp",
  },
  {
    title: "Event / Wedding Transport",
    slug: "event-wedding-transport",
    image: "/events-wedding.webp",
  },
];

const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const fadeUpCard: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-20 text-white">
      {/* BLURRED BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/about.webp"
          alt="RNK services background"
          fill
          priority={false}
          className="object-center blur-lg scale-110 opacity-70"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* HEADING SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <motion.p
              variants={slideFromLeft}
              className="text-xs tracking-[0.3em] uppercase text-neutral-200 mb-3"
            >
              Our Services
            </motion.p>

            <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-white space-y-1">
              <motion.span variants={slideFromLeft} className="block">
                Premium Car Rental Solutions,
              </motion.span>

              <motion.span variants={slideFromRight} className="block">
                <span className="text-[#A72740]"> Tailored To Every Journey.</span>
              </motion.span>
            </h2>
          </div>

          <motion.p
            variants={fadeUpCard}
            className="text-sm md:text-[15px] text-neutral-300 md:max-w-md"
          >
            From corporate mobility to VIP convoys and destination weddings —
            RNK orchestrates end-to-end transport with precision, discretion,
            and an unwavering focus on comfort.
          </motion.p>
        </motion.div>

        {/* SERVICES GRID – 3D TILT + GLASS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const textVariant = index % 2 === 0 ? slideFromLeft : slideFromRight;

            return (
              <motion.div
                key={service.slug}
                initial="hidden"
                whileInView="visible"
                variants={fadeUpCard}
                viewport={{ once: true, margin: "-80px" }}
                className="perspective-[1200px]" // 3D depth container
              >
                <motion.a
                  href={`/services/${service.slug}`}
                  whileHover={{
                    scale: 1.03,
                    rotateX: -4,
                    rotateY: 4,
                    translateZ: 10,
                  }}
                  whileTap={{ scale: 0.99, rotateX: 0, rotateY: 0 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  className="
                    group 
                    relative
                    h-44
                    md:h-48
                    overflow-hidden
                    border border-neutral-800
                    shadow-[0_4px_18px_rgba(0,0,0,0.35)]
                    hover:shadow-[0_16px_40px_rgba(0,0,0,0.7)]
                    transition-all
                    rounded-none
                    block
                    will-change-transform
                  "
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* BACKGROUND IMAGE */}
                  <motion.div
                    className="absolute inset-0"
                    style={{ transform: "translateZ(-10px)" }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="
                        object-cover 
                        object-center 
                        transition-transform 
                        duration-700 
                        group-hover:scale-[1.08]
                      "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent" />
                  </motion.div>

                  {/* GLASS OVERLAY PANEL */}
                  <motion.div
                    className="
                      absolute 
                      left-3 
                      right-3 
                      bottom-3 
                      rounded-xl 
                      bg-white/8 
                      border border-white/15 
                      backdrop-blur-md 
                      px-3 
                      py-2.5 
                      flex 
                      flex-col 
                      gap-1.5
                    "
                    style={{ transform: "translateZ(20px)" }}
                  >
                    <motion.p
                      variants={textVariant}
                      className="
                        text-[14px]
                        font-semibold
                        text-white
                        mb-0
                        transition-colors
                        duration-300
                        group-hover:text-[#A72740]
                      "
                    >
                      {service.title}
                    </motion.p>

                    <motion.div
                      variants={textVariant}
                      className="flex items-center justify-between text-[11px]"
                    >
                      <div className="flex items-center gap-2">
                        <span className="uppercase tracking-[0.22em] text-neutral-200 group-hover:text-[#A72740] transition-colors">
                          Learn More
                        </span>
                      </div>

                      <span
                        className="
                          text-neutral-300 
                          text-xs 
                          transition-transform 
                          duration-300 
                          group-hover:translate-x-1 
                          group-hover:text-[#A72740]
                        "
                      >
                        →
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
