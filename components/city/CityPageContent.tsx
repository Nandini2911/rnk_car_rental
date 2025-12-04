"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ServicesSection } from "../ServicesSection";
import { RnkFooter } from "../footer";

type CityPageContentProps = {
  cityName: string;
  slug: string;
};

export default function CityPageContent({ cityName }: CityPageContentProps) {
  const displayCity = cityName || "City";
  const heroImage = "/about.webp";

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const chipItem = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  // --- FORM STATE + HANDLER (only ONE handleSubmit) ---
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage(null);

  const form = e.currentTarget; // 👈 save reference BEFORE await
  const formData = new FormData(form);

  const payload = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    mobileNumber: formData.get("mobileNumber"),
    startDate: formData.get("startDate"),
    passengers: formData.get("passengers"),
    pickupCity: formData.get("pickupCity"),
    vehicle: formData.get("vehicle"),
  };

  try {
    const res = await fetch("/api/send-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setMessage("Thank you. Our team will get in touch with you shortly.");
      form.reset(); // 👈 use saved form reference
    } else {
      setMessage("Something went wrong. Please try again in a moment.");
    }
  } catch (error) {
    console.error(error);
    setMessage("Unable to send right now. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <main className="min-h-screen bg-black text-white">
      {/* -------------------------------- */}
      {/* HERO SECTION */}
      {/* -------------------------------- */}
      <section className="border-b border-white/10 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20 grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,2.1fr)] items-center">
          {/* Left – breadcrumb + text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <div className="mb-4 text-xs uppercase tracking-[0.22em] text-white/60 flex items-center gap-2">
              <Link href="/" className="hover:text-white/90">
                Home
              </Link>
              <span className="text-white/40">•</span>
              <Link href="/network" className="hover:text-white/90">
                Our Network
              </Link>
              <span className="text-white/40">•</span>
              <span className="text-[#C8102E]">{displayCity}</span>
            </div>

            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-2">
              RNK in {displayCity}
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-3">
              Premium car rentals in{" "}
              <span className="text-[#C8102E]">{displayCity}</span>.
            </h1>

            <p className="max-w-xl text-sm md:text-[15px] text-white/72 leading-relaxed">
              From airport runs and corporate movements to weddings and VIP
              hosting, RNK brings its signature fleet and chauffeur standards to{" "}
              {displayCity}. One number, one team — every ride feels familiar,
              efficient and quietly luxurious.
            </p>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-5 flex flex-wrap gap-2"
            >
              <motion.span
                variants={chipItem}
                className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/75"
              >
                Airport Pickups &amp; Drops
              </motion.span>
              <motion.span
                variants={chipItem}
                className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/75"
              >
                Corporate &amp; Events
              </motion.span>
              <motion.span
                variants={chipItem}
                className="rounded-full border border-white/20 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/75"
              >
                Weddings &amp; Leisure
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Right – hero image card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="order-1 md:order-2"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_22px_60px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-[#C8102E33]" />
              <img
                src={heroImage}
                alt={`RNK in ${displayCity}`}
                className="h-[260px] w-full object-cover md:h-[320px]"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-xs">
                <span className="uppercase tracking-[0.18em] text-white/70">
                  RNK • {displayCity}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------- */}
      {/* WHITE CENTERED NARRATIVE */}
      {/* -------------------------------- */}
      <section className="bg-white text-black border-b border-black/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-6 py-14 text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-3">
            Designed for real itineraries
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-black">
            The same RNK discipline,{" "}
            <span className="text-[#C8102E]">tuned to {displayCity}.</span>
          </h2>

          <p className="mt-5 text-sm md:text-[15px] text-black/70 leading-relaxed max-w-2xl mx-auto">
            Your schedule may be packed — airport arrivals, meetings, events,
            dinners — but your transport doesn&apos;t need to feel hectic. RNK
            plugs into your plan with pre-mapped routes, trained chauffeurs and
            a fleet that feels consistent with every booking.
          </p>

          <p className="mt-4 text-sm md:text-[14px] text-black/60 leading-relaxed max-w-2xl mx-auto">
            Share your flights, venue list and timing windows; our team will
            convert it into a clean, city-ready movement grid for {displayCity}.
          </p>
        </motion.div>
      </section>

      {/* -------------------------------- */}
      {/* SERVICES STRIP */}
      {/* -------------------------------- */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-0 md:px-0">
          <ServicesSection />
        </div>
      </section>

      {/* -------------------------------- */}
      {/* FLEET + MOVEMENT TYPES */}
      {/* -------------------------------- */}
      <section className="bg-white text-black border-b border-black/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[minmax(0,1.6fr)_minmax(0,2fr)] items-start"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-3">
              Fleet available in {displayCity}
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
              The right car,{" "}
              <span className="text-[#C8102E]">for the right moment.</span>
            </h2>
            <p className="mt-4 text-sm md:text-[15px] text-black/70 leading-relaxed max-w-md">
              Mix and match the RNK fleet in {displayCity} — from executive
              sedans and business SUVs to people-movers for guests and crews.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/75">
                Executive Sedans
              </span>
              <span className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/75">
                Luxury SUVs
              </span>
              <span className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/75">
                People Movers
              </span>
              <span className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-black/75">
                Premium Transfers
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4">
              <p className="text-sm font-semibold mb-1">Executive &amp; CXOs</p>
              <p className="text-[12px] text-black/65 leading-relaxed">
                Sedans and premium SUVs configured for leadership and key
                guests, with trained chauffeurs and discreet movement.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4">
              <p className="text-sm font-semibold mb-1">Teams &amp; families</p>
              <p className="text-[12px] text-black/65 leading-relaxed">
                Comfortable people-movers and mixed fleets for internal teams,
                families and artist entourages.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4">
              <p className="text-sm font-semibold mb-1">Point-to-point</p>
              <p className="text-[12px] text-black/65 leading-relaxed">
                Single-route airport, hotel and venue movements designed to run
                like clockwork.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4">
              <p className="text-sm font-semibold mb-1">Full-day plans</p>
              <p className="text-[12px] text-black/65 leading-relaxed">
                Half-day and full-day rental formats for dense meeting days or
                event build-up schedules in {displayCity}.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* -------------------------------- */}
      {/* KEY ROUTES + OUTSTATION */}
      {/* -------------------------------- */}
      <section className="bg-black text-white border-b border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid gap-10 md:grid-cols-2"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-3">
              Key routes we handle in {displayCity}
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
              Everyday routes,{" "}
              <span className="text-[#C8102E]">expertly planned.</span>
            </h2>
            <ul className="space-y-2 text-[13px] text-white/75">
              <li>• Airport ⇄ business hotels and meeting zones.</li>
              <li>• Hotel ⇄ corporate parks, convention centres and venues.</li>
              <li>• Multi-stop client visits within and around {displayCity}.</li>
              <li>• Late-night event wrap-ups and after-event drops.</li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-3">
              Extended movements from {displayCity}
            </p>
            <h2 className="text-xl md:text-2xl font-semibold tracking-tight mb-4">
              When your plan{" "}
              <span className="text-[#C8102E]">goes beyond city limits.</span>
            </h2>
            <ul className="space-y-2 text-[13px] text-white/75">
              <li>• Same-day business trips to nearby cities and industrial belts.</li>
              <li>• Weekend leisure drives and hotel-to-hotel movements.</li>
              <li>• Airport → city → outstation combinations in a single plan.</li>
              <li>• Artist, crew and production logistics for shoots or events.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* -------------------------------- */}
      {/* CITY ENQUIRY FORM – WHITE SECTION */}
      {/* -------------------------------- */}
      <section className="bg-white text-black border-b border-black/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-6 py-14 md:py-20"
        >
          <div className="mb-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-2">
              Plan your movement
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">
              Share your details —{" "}
              <span className="text-[#C8102E]">we’ll take it from here.</span>
            </h2>

            <p className="mt-3 text-sm md:text-[15px] text-black/60 max-w-xl mx-auto">
              Tell us a few basics about your plan in {displayCity}. Our team
              will tailor the perfect movement plan for you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid gap-6 md:grid-cols-2 bg-white border border-black/10 rounded-3xl px-6 py-8 md:px-10 md:py-10 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
          >
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Full Name<span className="text-[#C8102E]">*</span>
              </label>
              <input
                name="fullName"
                type="text"
                required
                placeholder="Full Name"
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/40 focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Email<span className="text-[#C8102E]">*</span>
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="Enter Email"
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/40 focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Mobile Number<span className="text-[#C8102E]">*</span>
              </label>
              <input
                name="mobileNumber"
                type="tel"
                required
                placeholder="Mobile Number"
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/40 focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Start Date<span className="text-[#C8102E]">*</span>
              </label>
              <input
                name="startDate"
                type="date"
                required
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Number of Passengers<span className="text-[#C8102E]">*</span>
              </label>
              <input
                name="passengers"
                type="number"
                min={1}
                required
                placeholder="Number of Passengers"
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black placeholder:text-black/40 focus:border-[#C8102E] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Pickup City<span className="text-[#C8102E]">*</span>
              </label>
              <select
                name="pickupCity"
                required
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black focus:border-[#C8102E] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Select City
                </option>
                <option value={displayCity}>{displayCity}</option>
              </select>
            </div>

            <div className="md:col-span-2 md:max-w-sm">
              <label className="block text-xs uppercase tracking-[0.18em] text-black/60 mb-1.5">
                Vehicle<span className="text-[#C8102E]">*</span>
              </label>
              <select
                name="vehicle"
                required
                className="w-full rounded-xl border border-black/20 bg-white px-3 py-2.5 text-sm text-black focus:border-[#C8102E] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Select Vehicle
                </option>
                <option value="Rolls Royce">Rolls Royce</option>
              </select>
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-[#C8102E] border border-[#C8102E] text-white text-[11px] px-7 py-3 uppercase tracking-[0.22em] hover:bg-white hover:text-[#C8102E] transition-all duration-200 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit your enquiry"}
              </button>
            </div>

            {message && (
              <div className="md:col-span-2 text-xs text-black/70 pt-1">
                {message}
              </div>
            )}
          </form>
        </motion.div>
      </section>

      {/* -------------------------------- */}
      {/* FOOTER */}
      {/* -------------------------------- */}
      <section className="bg-black">
        <RnkFooter />
      </section>
    </main>
  );
}
