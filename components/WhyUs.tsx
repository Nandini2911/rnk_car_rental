"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

// -----------------------------------
// DATA BLOCKS
// -----------------------------------
const features = [
  {
    title: "Chauffeur-driven luxury",
    body: "Professional chauffeurs for stress-free, premium travel — ideal for executives, celebrities and families.",
  },
  {
    title: "GPS-enabled & secure",
    body: "Live tracking, optimised routes and complete visibility of the journey for safety and efficiency.",
  },
  {
    title: "Reliable & safe vehicles",
    body: "Meticulously maintained luxury fleet with verified chauffeurs to ensure safe, disciplined travel.",
  },
  {
    title: "Comfort fit for VIPs",
    body: "Plush seating, premium interiors, climate control and noise-free cabins for top-tier comfort.",
  },
  {
    title: "Extensive luxury fleet",
    body: "Mercedes, BMW, Audi, SUVs, sedans, Innovas, coaches — pick what suits your occasion best.",
  },
  {
    title: "24/7 on-call support",
    body: "Flight delays, event changes, long rides — we support you round-the-clock.",
  },
];

const stats = [
  { value: "24+", label: "Premium Cars" },
  { value: "30+", label: "Cities Covered" },
  { value: "97%", label: "On-Time Movements" },
  { value: "200+", label: "Corporate & HNI Clients" },
];

const journeys = [
  {
    tag: "CORPORATE",
    title: "Business travel without interruptions.",
    body: "Roadshows, board meetings, executives, delegations — perfectly organised travel.",
  },
  {
    tag: "WEDDINGS",
    title: "Luxury rides for celebrations.",
    body: "Bridal entries, family logistics, VIP movements — coordinated seamlessly.",
  },
  {
    tag: "OUTSTATION",
    title: "Long drives made luxurious.",
    body: "Reliable SUVs and sedans with trained chauffeurs for weekend getaways.",
  },
];

// -----------------------------------
// ANIMATION VARIANTS
// -----------------------------------
const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

// -----------------------------------
// MAIN COMPONENT
// -----------------------------------
export function WhyUs() {
  return (
    <div className="w-full">
{/* ----------------------------------- */}
{/* SECTION 1 — DARK HERO WITH BG IMAGE */}
{/* ----------------------------------- */}
<AnimatedSection id="why-us-hero">
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative w-full min-h-[60vh] text-white overflow-hidden"
  >
    {/* Background image */}
    <motion.img
      src="/about.webp"     // 👉 replace with your actual image
      alt="RNK Luxury Rentals"
      className="absolute inset-0 h-full w-full object-cover"
      initial={{ scale: 1.12 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
    />

    {/* Dark Overlay for contrast */}
    <div className="absolute inset-0 bg-black/70 md:bg-black/60 backdrop-blur-[1px]" />

    {/* Soft luxury red glow */}
    <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-red-900/25 blur-3xl" />
    <div className="pointer-events-none absolute -left-24 bottom-[-80px] h-64 w-64 rounded-full bg-red-800/20 blur-3xl" />

    {/* CONTENT */}
    <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-28">
      {/* Breadcrumb */}
      <p className="text-xs text-neutral-400 mb-4 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span className="text-neutral-600">/</span>
        <span className="text-red-900">Why Us</span>
      </p>

      {/* Title block */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl space-y-4"
      >
        <p className="text-[11px] tracking-[0.32em] uppercase text-red-900">
          Why RNK Rentals
        </p>

        <div className="inline-block">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-2">
            Why choose <span className="text-red-900">RNK Rentals?</span>
          </h1>

          {/* Underline animation */}
          <motion.span
            className="block h-[2px] w-16 bg-red-600 rounded-full mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            style={{ transformOrigin: "left center" }}
          />
        </div>

        <p className="text-neutral-200 max-w-2xl text-sm md:text-base">
          If luxury and reliability are what you expect, RNK offers a premium fleet,
          trained chauffeurs, and Pan-India coverage — built for people who
          can’t afford friction in how they move.
        </p>
      </motion.div>

      {/* CTA buttons */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link href="/contact">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(248,113,113,0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-8 py-3 bg-red-900 rounded-full uppercase tracking-[0.25em] text-[11px] md:text-xs border border-red-900"
          >
            Contact Us
          </motion.button>
        </Link>

        <Link
          href="/fleet"
          className="text-xs md:text-sm text-neutral-200 hover:text-white transition-colors underline-offset-4 hover:underline"
        >
          Explore our fleet
        </Link>
      </div>
    </div>
  </motion.section>
</AnimatedSection>

      {/* ----------------------------------- */}
{/* SECTION 2 — WHITE (Features Grid) */}
{/* ----------------------------------- */}
<AnimatedSection id="why-us-features">
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white text-black py-20 px-6"
  >
    <div className="max-w-6xl mx-auto">

      {/* TITLE BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
      >
        <div>
          <p className="text-[11px] tracking-[0.32em] uppercase text-red-600 mb-2">
            Core advantages
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            What makes RNK <span className="text-red-700">different?</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-neutral-600 max-w-md">
          Every journey is treated like a small project — right car, right
          chauffeur, right timing. That&apos;s how we keep movements smooth.
        </p>
      </motion.div>

      {/* FEATURE CARDS — SLIDE UP ONE BY ONE */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          show: {
            transition: { staggerChildren: 0.18 }
          }
        }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
            whileHover={{
              y: -6,
              boxShadow: "0 18px 40px rgba(74, 6, 6, 0.15)"
            }}
            className="p-6 rounded-2xl border border-black/8 bg-white shadow-sm relative overflow-hidden"
          >
            {/* GLOW CORNER */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-red-900/90 blur-2xl" />

            <p className="text-red-600 font-semibold mb-2 text-xs">
              0{index + 1}
            </p>
            <h3 className="font-semibold mb-2 text-sm md:text-base">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {item.body}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </motion.section>
</AnimatedSection>

     {/* ----------------------------------- */}
{/* SECTION 3 — DARK (Stats Strip) */}
{/* ----------------------------------- */}
<AnimatedSection id="why-us-stats">
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative bg-black text-white py-16 px-6 border-y border-white/10 overflow-hidden"
  >
    {/* Soft background glow */}
    <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-64 max-w-xl rounded-full bg-red-900/25 blur-3xl" />
    <div className="pointer-events-none absolute -left-32 bottom-[-80px] h-64 w-64 rounded-full bg-red-800/20 blur-3xl" />

    <div className="relative max-w-6xl mx-auto">
      {/* Small label */}
      <p className="text-[11px] tracking-[0.32em] uppercase text-neutral-400 mb-6 text-center md:text-left">
        RNK BY THE NUMBERS
      </p>

      <div className="grid gap-8 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 via-black/80 to-black px-5 py-6 flex flex-col items-center md:items-start text-center md:text-left overflow-hidden"
          >
            {/* subtle accent ring */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-red-500/25 blur-2xl" />

            <p className="text-3xl md:text-4xl font-semibold mb-1">
              {stat.value}
            </p>
            <p className="text-[11px] tracking-[0.2em] text-neutral-400 uppercase">
              {stat.label}
            </p>

            {/* divider line */}
            <span className="mt-4 h-px w-10 bg-gradient-to-r from-red-500/70 via-white/10 to-transparent" />
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
</AnimatedSection>

     {/* ----------------------------------- */}
{/* SECTION 4 — WHITE (Journeys) */}
{/* ----------------------------------- */}
<AnimatedSection id="why-us-journeys">
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-white text-black py-20 px-6"
  >
    <div className="max-w-6xl mx-auto">
      {/* Heading block with subtle slide-up */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-10"
      >
        <p className="text-red-600 tracking-[0.35em] text-[11px] mb-2 uppercase">
          Movements we specialise in
        </p>
        <div className="inline-block">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Designed for real journeys.
          </h2>
          <motion.span
            className="block h-[2px] w-12 bg-red-600 rounded-full mt-2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{ transformOrigin: "left center" }}
          />
        </div>
      </motion.div>

      {/* Cards – slide up one by one */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          show: {
            transition: { staggerChildren: 0.18 },
          },
        }}
        className="grid gap-6 md:grid-cols-3"
      >
        {journeys.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: "easeOut" },
              },
            }}
            whileHover={{
              y: -6,
              boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
            }}
            className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm flex flex-col justify-between relative overflow-hidden"
          >
            {/* soft corner glow */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-red-900/80 blur-2xl" />

            <div>
              <p className="text-red-600 text-xs tracking-[0.22em] mb-2 uppercase">
                {item.tag}
              </p>
              <h3 className="font-semibold mb-2 text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                {item.body}
              </p>
            </div>

            <Link
              href="/contact"
              className="text-xs text-red-700 underline underline-offset-4 mt-2"
            >
              Plan with RNK →
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.section>
</AnimatedSection>


      {/* ----------------------------------- */}
      {/* SECTION 5 — DARK (CTA) */}
      {/* ----------------------------------- */}
      <AnimatedSection id="why-us-cta">
        <motion.section
          
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-black text-white py-20 px-6"
        >
          <div className="max-w-5xl mx-auto text-center relative overflow-hidden rounded-3xl border border-red-700/50 bg-gradient-to-r from-red-900/60 via-black to-black px-6 py-12 md:px-10">
            {/* subtle glow */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-red-500/25 blur-3xl" />

            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to plan your movement?
            </h2>

            <p className="text-neutral-200 max-w-xl mx-auto mb-8 text-sm md:text-base">
              Share your dates, destination and requirement — our team will
              revert with options, availability and costing so you can lock
              your cars in one go.
            </p>

            <Link href="/contact">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 0 32px rgba(248,113,113,0.45)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-3 bg-red-900 rounded-full uppercase tracking-[0.25em] text-[11px] md:text-xs border border-red-500/80"
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.section>
      </AnimatedSection>
    </div>
  );
}
