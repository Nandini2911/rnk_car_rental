"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const statItems = [
  {
    value: 55,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 85,
    suffix: "+",
    label: "Vehicles",
  },
  {
    value: 2,
    suffix: "M",
    label: "Trips Done",
  },
];

const images = [
  { src: "/statsSection1.jpg", position: "top-6 left-4" },
  { src: "/statsSection2.webp", position: "bottom-10 left-10" },
  { src: "/statsSection3.webp", position: "top-10 right-8" },
  { src: "/statsSection4.jpg", position: "bottom-6 right-4" },
];

// Animated single stat block
function AnimatedStat({
  value,
  suffix,
  label,
  index,
}: {
  value: number;
  suffix?: string;
  label: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);

      const duration = 2000; // ms
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const current = Math.floor(progress * value);
        setCount(current);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  }, [isInView, hasAnimated, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.15 * index }}
      className="flex flex-col items-center"
    >
      <p className="text-4xl md:text-5xl font-semibold">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-neutral-300 text-center">
        {label}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="relative bg-[#111111] text-white py-20 overflow-hidden">
      {/* angled top & bottom edges */}
      <div className="absolute -top-10 left-0 w-full h-20 bg-[#111111] rotate-[3deg] origin-left" />
      <div className="absolute -bottom-10 left-0 w-full h-20 bg-[#111111] -rotate-[3deg] origin-left" />

      {/* subtle gradient glow (brand colour applied) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(167,39,64,0.18),_transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* FLOATING IMAGES – DESKTOP ONLY */}
        <div className="hidden md:block">
          {images.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12 }}
              className={`absolute ${img.position} w-[170px] h-[110px] overflow-hidden`}
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? -1.5 : 1.5 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="relative w-full h-full"
              >
                <Image
                  src={img.src}
                  alt="RNK moments"
                  fill
                  className="object-cover rounded-[4px] [clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)]"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CENTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-neutral-300 mb-3">
            RNK in Numbers
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-3">
            Decades of Trust,
            <span className="text-[#A72740]"> Millions of Miles.</span>
          </h2>

          <p className="text-sm md:text-[15px] text-neutral-300 mb-10">
            From corporate corridors to wedding convoys, RNK has been on the
            road since 1969 — delivering safe,
            <br />
            reliable and memorable journeys
            across India.
          </p>

          {/* STATS ROW WITH REAL-TIME COUNTING */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            {statItems.map((stat, idx) => (
              <AnimatedStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={idx}
              />
            ))}
          </div>
        </motion.div>

        {/* MOBILE IMAGE STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-10 flex md:hidden flex-wrap items-center justify-center gap-5"
        >
          {images.map((img) => (
            <div
              key={img.src}
              className="relative w-[140px] h-[90px] overflow-hidden"
            >
              <Image
                src={img.src}
                alt="RNK mobile stats"
                fill
                className="object-cover rounded-[4px] [clip-path:polygon(10%_0%,100%_0%,90%_100%,0%_100%)]"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
