"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reviews = [
  {
    quote:
      "I appreciate the attention to detail and the fact that they go above and beyond to ensure everything is just right. I highly recommend this luxury car rental service to anyone needing top-notch transportation.",
    name: "Vallabhdad Lalchand",
  },
  {
    quote:
      "They make travel a breeze, and I would highly recommend them to anyone looking for a luxury car rental experience.",
    name: "Mr. Murali M Natrajan",
  },
  {
    quote:
      "I recently used this luxury car rental service for a tour around Mumbai, and the quality of the experience blew me away. The driver was professional and courteous, and the vehicle was in pristine condition",
    name: "Mr. Farokh Subedar",
  },
];

// smooth + premium look variants
const cardVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    y: 20,
    x: direction > 0 ? 30 : -30,
    scale: 0.98,
    filter: "blur(2px)",
  }),
  center: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    y: -15,
    x: direction > 0 ? -25 : 25,
    scale: 0.985,
    filter: "blur(2px)",
    transition: {
      duration: 0.45,
      ease: "easeIn",
    },
  }),
};

// pre-defined "dust" particle positions
const dustParticles = [
  { top: "15%", left: "12%", size: 4, duration: 9 },
  { top: "30%", left: "85%", size: 5, duration: 11 },
  { top: "65%", left: "18%", size: 3, duration: 10 },
  { top: "78%", left: "72%", size: 4, duration: 12 },
  { top: "50%", left: "50%", size: 3, duration: 13 },
];

export function CustomerReviewsSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleDotClick = (i: number) => {
    if (i === index) return;
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  const active = reviews[index];

  return (
    <motion.section
      className="relative bg-white py-20 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* soft dust / floating specs */}
      {dustParticles.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full bg-neutral-300"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: 0.35,
          }}
          animate={{ y: [0, -6, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-5xl mx-auto px-6">
        {/* heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold uppercase text-neutral-900 mb-4">
          Customer Reviews
        </h2>

        {/* stars in brand colour */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <span className="text-[#A72740] text-lg">★</span>
          <span className="text-[#A72740] text-lg">★</span>
          <span className="text-[#A72740] text-lg">★</span>
          <span className="text-[#A72740] text-lg">★</span>
          <span className="text-[#A72740] text-lg">★</span>
        </div>

        {/* card container */}
        <div className="relative max-w-3xl mx-auto">
          {/* gradient border like Vision Pro – brand tint */}
          <motion.div
            aria-hidden
            className="absolute -inset-[1.5px] rounded-[26px] bg-[conic-gradient(from_180deg,rgba(255,255,255,0.3),rgba(167,39,64,0.55),rgba(0,0,0,0.04),rgba(167,39,64,0.35),rgba(255,255,255,0.2))]"
            style={{ filter: "blur(0.2px)" }}
            animate={{ opacity: [0.5, 1, 0.6] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* white base + soft shadow */}
          <div className="absolute inset-0 rounded-[24px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.07)]" />

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              
              initial="enter"
              animate="center"
              exit="exit"
              // drag/swipe
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.18}
              onDragEnd={(_, info) => {
                const swipeThreshold = 60;
                const velocityThreshold = 350;

                if (
                  info.offset.x < -swipeThreshold ||
                  info.velocity.x < -velocityThreshold
                ) {
                  // swipe left → next
                  goNext();
                } else if (
                  info.offset.x > swipeThreshold ||
                  info.velocity.x > velocityThreshold
                ) {
                  // swipe right → prev
                  goPrev();
                }
              }}
              whileHover={{
                y: -6,
                rotate: -0.3,
                boxShadow: "0 26px 80px rgba(0,0,0,0.10)",
              }}
              transition={{
                type: "spring",
                stiffness: 130,
                damping: 18,
              }}
              className="relative rounded-[24px] bg-white px-8 md:px-12 py-12 md:py-16 text-center cursor-grab active:cursor-grabbing"
            >
              {/* slow breathing inner content */}
              <motion.div
                animate={{
                  scale: [1, 1.01, 1],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-sm md:text-[15px] text-neutral-700 italic leading-relaxed mb-8">
                  {active.quote}
                </p>

                <p className="text-xs md:text-sm font-semibold tracking-[0.22em] uppercase text-[#A72740]">
                  {active.name}
                </p>

                {/* lens-flare line under name */}
                <motion.div
                  className="mt-6 flex justify-center"
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    x: [-4, 4, -4],
                  }}
                  transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="relative h-px w-24 overflow-hidden rounded-full bg-neutral-200">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A72740]/70 to-transparent" />
                    <motion.div
                      className="absolute top-0 h-[2px] w-10 bg-white/70 blur-[3px]"
                      animate={{ left: ["-20%", "120%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* dots */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleDotClick(i)}
              className={`
                h-2.5 w-2.5 rounded-full transition-all
                ${i === index ? "bg-[#A72740] w-3" : "bg-neutral-300"}
              `}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
