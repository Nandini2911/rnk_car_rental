"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { RnkFooter } from "@/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    setIsSubmitting(true);
    setMessage(null);

    const data = new FormData(form);

const payload = {
  // required (backend checks these)
  fullName: data.get("fullName"),
  email: data.get("email"),
  mobileNumber: data.get("phone"), // map phone -> mobileNumber

  // extra fields your route.ts uses in the email template
  startDate: "Contact form – not specified",
  passengers: "Not specified",
  pickupCity: "Contact Page",
  vehicle: data.get("service") || "General enquiry",
};


    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage("Thank you. Our team will contact you shortly.");
        form.reset();
      } else {
        setMessage("Failed to send. Please try again.");
      }
    } catch (err) {
      setMessage("Something went wrong. Try later.");
    }

    setIsSubmitting(false);
  };

  return (
    <main className="bg-black text-white min-h-screen">

      {/* -------------------------------------------------- */}
      {/* SECTION 1 — DARK HERO WITH BG IMAGE               */}
      {/* -------------------------------------------------- */}
      <section className="relative min-h-[100vh] flex items-center justify-center text-center">
        <motion.img
          src="/about.webp"
          alt="Contact RNK"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/80 to-black" />

        <div className="relative z-10">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-3"
          >
            Contact Us
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold"
          >
            We’re always{" "}
            <span className="text-[#C8102E]">here for you.</span>
          </motion.h1>
        </div>
      </section>

      {/* -------------------------------------------------- */}
{/* SECTION 2 — BLACK BACKGROUND + REDDISH GLOW CARDS */}
{/* -------------------------------------------------- */}
<section className="bg-white text-black py-14 border-b border-black/10">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
      RNK Contact Details
    </h2>

    <div className="grid gap-6 md:grid-cols-3">

      {/* CARD 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        whileHover={{
          y: -6,
          boxShadow: "0 0 50px rgba(200,16,46,0.7)",
          borderColor: "#C8102E",
        }}
        transition={{ duration: 0.4 }}
        className="
          rounded-xl p-6 border border-[#C8102E]/30 
          bg-gradient-to-br from-[#3a000c] via-[#4d0212] to-[#2a0008]
          shadow-[0_0_25px_rgba(200,16,46,0.35)]
          backdrop-blur-md
          transition-all
        "
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#ff4d6a]">
          Head Office
        </p>
        <p className="mt-3 text-white/80 leading-relaxed">
          Suite 19, Kaliandas Udyog Bhavan,<br />
          Century Bazar, Prabhadevi,<br />
          Mumbai, 400025 India
        </p>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        whileHover={{
          y: -6,
          boxShadow: "0 0 50px rgba(200,16,46,0.7)",
          borderColor: "#C8102E",
        }}
        transition={{ duration: 0.4 }}
        className="
          rounded-xl p-6 border border-[#C8102E]/30 
          bg-gradient-to-br from-[#3a000c] via-[#4d0212] to-[#2a0008]
          shadow-[0_0_25px_rgba(200,16,46,0.35)]
          backdrop-blur-md
          transition-all
        "
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#ff4d6a]">
          Call Us
        </p>
        <a
          href="tel:02243227777"
          className="mt-3 block text-lg font-semibold text-white"
        >
          022 – 43227777
        </a>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        whileHover={{
          y: -6,
          boxShadow: "0 0 50px rgba(200,16,46,0.7)",
          borderColor: "#C8102E",
        }}
        transition={{ duration: 0.4 }}
        className="
          rounded-xl p-6 border border-[#C8102E]/30 
          bg-gradient-to-br from-[#3a000c] via-[#4d0212] to-[#2a0008]
          shadow-[0_0_25px_rgba(200,16,46,0.35)]
          backdrop-blur-md
          transition-all
        "
      >
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#ff4d6a]">
          Email
        </p>
        <a
          href="mailto:info@rnk.com"
          className="mt-3 block text-lg font-semibold text-white"
        >
          info@rnk.com
        </a>
      </motion.div>

    </div>
  </div>
</section>

      {/* -------------------------------------------------- */}
{/* SECTION 3 — STYLED CONTACT FORM (CLASSY)           */}
{/* -------------------------------------------------- */}
<section className="bg-black text-white py-16 border-b border-white/10">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
      {/* LEFT SIDE – TEXT + HIGHLIGHTS */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-5"
      >
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E]">
          Get in touch
        </p>

        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Share your requirement,{" "}
          <span className="text-[#C8102E]">we’ll map the rest.</span>
        </h2>

        <p className="text-sm md:text-[15px] text-white/70 max-w-md leading-relaxed">
          Whether it&apos;s a one-time airport run or a multi-day movement
          grid across cities, the RNK team will respond with a clear, structured
          plan and transparent pricing.
        </p>

        {/* small chips */}
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/75">
            Response within 24 hours
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/75">
            Pan-India movements
          </span>
          <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/75">
            Corporate & weddings
          </span>
        </div>
      </motion.div>

      {/* RIGHT SIDE – FORM CARD */}
      <motion.form
        onSubmit={handleSubmit}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="relative space-y-5 rounded-3xl border border-white/12 bg-gradient-to-br from-white/[0.06] via-black/80 to-black px-6 py-7 md:px-7 md:py-8 shadow-[0_26px_70px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* subtle top highlight */}
        <div className="pointer-events-none absolute -top-20 right-[-40px] h-40 w-40 rounded-full bg-[#C8102E]/30 blur-3xl" />

        <div className="relative">
          <p className="text-[11px] uppercase tracking-[0.2em] text-white/60 mb-1">
            Contact form
          </p>
          <p className="text-sm text-white/70">
            Fill in your details and a short note. Our team will get back with
            availability, fleet options and next steps.
          </p>
        </div>

        {/* Name */}
        <div className="relative space-y-1">
          <label className="text-[11px] uppercase tracking-[0.18em] text-white/70">
            Name<span className="text-[#C8102E]">*</span>
          </label>
          <input
            name="fullName"
            type="text"
            required
            placeholder="Your full name"
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
          />
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[11px] uppercase tracking-[0.18em] text-white/70">
              Phone<span className="text-[#C8102E]">*</span>
            </label>
            <input
              name="phone"
              type="tel"
              required
              placeholder="Mobile number"
              className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
            />
          </div>
          <div className="space-y-1">
            <label className="text-[11px] uppercase tracking-[0.18em] text-white/70">
              Email<span className="text-[#C8102E]">*</span>
            </label>
            <input
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
            />
          </div>
        </div>

        {/* Service */}
        <div className="space-y-1">
          <label className="text-[11px] uppercase tracking-[0.18em] text-white/70">
            Service required<span className="text-[#C8102E]">*</span>
          </label>
          <select
            name="service"
            required
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
            defaultValue=""
          >
            <option value="" disabled className="text-black">
              Select a service
            </option>
            <option>Corporate Car Rental</option>
            <option>Airport Transfers</option>
            <option>Luxury Travel</option>
            <option>Weddings & Events</option>
            <option>VIP Movements</option>
            <option>Long Term Rental</option>
          </select>
        </div>

        {/* Query */}
        <div className="space-y-1">
          <label className="text-[11px] uppercase tracking-[0.18em] text-white/70">
            Brief / query
          </label>
          <textarea
            name="query"
            rows={4}
            placeholder="Dates, cities, approximate timings, number of guests, or any special notes."
            className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E] resize-none"
          />
        </div>

        {/* Button + message */}
        <div className="pt-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C8102E] via-[#e0313f] to-[#8b0f24] px-7 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white shadow-[0_16px_50px_rgba(200,16,46,0.9)] hover:shadow-[0_22px_60px_rgba(200,16,46,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Submit enquiry"}
          </button>

          {message && (
            <p className="text-[11px] text-white/70 mt-2 md:mt-0">
              {message}
            </p>
          )}
        </div>
      </motion.form>
    </div>
  </div>
</section>


      {/* -------------------------------------------------- */}
      {/* SECTION 5 — FOOTER                                */}
      {/* -------------------------------------------------- */}
      <RnkFooter />
    </main>
  );
}
