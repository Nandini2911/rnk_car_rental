"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
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
    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      mobileNumber: formData.get("phone"),
      startDate: "",
      passengers: "",
      pickupCity: "Contact form – website",
      vehicle: formData.get("service"),
      query: formData.get("query"),
    };

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage("Thank you. Our team will get back to you shortly.");
        form.reset();
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
      {/* 1. HEADER – BG IMAGE + CENTER “CONTACT US” */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] border-b border-white/10 overflow-hidden flex items-center justify-center">
        {/* Background image */}
        <motion.img
          src="/about.webp"
          alt="RNK Contact"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#A7274033,transparent_60%)]" />

        {/* Top breadcrumb */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-xs md:text-sm text-white/60 flex items-center gap-2"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="text-white/40">||</span>
            <span className="text-[#A72740]">Contact Us</span>
          </motion.div>
        </div>

        {/* Center text */}
        <div className="relative z-10 text-center px-6">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[11px] uppercase tracking-[0.28em] text-[#A72740] mb-3"
          >
            Contact Us
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-2"
          >
            Get in touch with{" "}
            <span className="text-[#A72740]">RNK.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="max-w-xl mx-auto text-sm md:text-[15px] text-white/75 leading-relaxed"
          >
            One central team for corporate movements, weddings, airport runs,
            VIP itineraries and long-term rentals.
          </motion.p>
        </div>
      </section>

      {/* 2. INFO SECTION – ADDRESS / CALL / EMAIL */}
      <section className="bg-black border-b border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-6 py-12 md:py-16"
        >
          <div className="mb-8 text-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#A72740] mb-2">
              Contact Details
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Head Office & primary contact.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Head Office Address */}
            <div className="rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A72740] mb-2">
                Head Office Address
              </p>
              <p className="text-sm md:text-[14px] text-white/80 leading-relaxed">
                Suite 19, Kaliandas Udyog Bhavan,
                <br />
                Century Bazar, Prabhadevi,
                <br />
                Mumbai, 400025 India
              </p>
            </div>

            {/* Call Us */}
            <div className="rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A72740] mb-2">
                Call Us
              </p>
              <p className="text-sm md:text-[14px] text-white/75 mb-1">
                For bookings & movement planning:
              </p>
              <a
                href="tel:02243227777"
                className="text-[15px] font-medium text-white hover:text-[#A72740] transition"
              >
                022-43227777
              </a>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-white/12 bg-white/[0.03] px-5 py-5">
              <p className="text-[11px] uppercase tracking-[0.24em] text-[#A72740] mb-2">
                Email
              </p>
              <p className="text-sm md:text-[14px] text-white/75 mb-1">
                For itineraries, proposals & queries:
              </p>
              <a
                href="mailto:info@rnk.com"
                className="text-[15px] font-medium text-white hover:text-[#A72740] transition"
              >
                info@rnk.com
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 3. FORM SECTION */}
      <section className="bg-black border-b border-white/10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-5xl mx-auto px-6 py-12 md:py-16"
        >
          <div className="mb-6 text-center">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#A72740] mb-2">
              Get in Touch
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
              Please fill the information below and click on submit
            </h2>
            <p className="text-sm md:text-[14px] text-white/70 max-w-2xl mx-auto">
              Share your name, contact details and a brief about your
              requirement. The RNK team will revert with next steps.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-white/10 bg-black/70 backdrop-blur-md px-5 py-6 md:px-7 md:py-7 shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                Name<span className="text-[#A72740]">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="Your Name"
                className="w-full rounded-lg border border-white/15 bg-white px-3 py-2.5 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-[#A72740] focus:border-[#A72740]"
              />
            </div>

            {/* Phone + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                  Phone<span className="text-[#A72740]">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Mobile Number"
                  className="w-full rounded-lg border border-white/15 bg-white px-3 py-2.5 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-[#A72740] focus:border-[#A72740]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                  Email<span className="text-[#A72740]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full rounded-lg border border-white/15 bg-white px-3 py-2.5 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-[#A72740] focus:border-[#A72740]"
                />
              </div>
            </div>

            {/* Select Services */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                Select Services<span className="text-[#A72740]">*</span>
              </label>
              <select
                name="service"
                required
                className="w-full rounded-lg border border-white/15 bg-black/30 px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#A72740] focus:border-[#A72740]"
                defaultValue=""
              >
                <option value="" disabled className="text-black">
                  Choose a service
                </option>
                <option>Corporate Car Rental</option>
                <option>Airport & Railway Transfers</option>
                <option>Luxury Travel</option>
                <option>Hotel Operations</option>
                <option>Vacation Rentals</option>
                <option>VIP Movements</option>
                <option>Long Term Car Rental</option>
                <option>Event / Wedding Transport</option>
                <option>Other / Not Listed</option>
              </select>
            </div>

            {/* Query */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium uppercase tracking-[0.18em] text-white/65">
                Query
              </label>
              <textarea
                name="query"
                rows={4}
                placeholder="Share a brief about your requirement, dates, cities, and any key details."
                className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-1 focus:ring-[#A72740] focus:border-[#A72740] resize-none"
              />
            </div>

            {/* Submit + message */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#A72740] via-[#c5385a] to-[#7d1c30] px-7 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white shadow-[0_14px_40px_rgba(167,39,64,0.8)] hover:shadow-[0_20px_55px_rgba(167,39,64,1)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>

              {message && (
                <p className="mt-2 text-xs text-white/70">{message}</p>
              )}
            </div>
          </form>
        </motion.div>
      </section>

      {/* 4. SIMPLE CONTACT STRIP */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[#A72740] mb-1">
              Contact Us
            </p>
            <p className="text-sm md:text-[14px] text-white/70">
              Call us on <span className="text-white">022-43227777</span> or
              write to{" "}
              <a
                href="mailto:info@rnk.com"
                className="text-white hover:text-[#A72740] underline underline-offset-4"
              >
                info@rnk.com
              </a>
              .
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="tel:02243227777"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-white/80 hover:border-[#A72740] hover:bg-[#A72740]/10 hover:text-white transition"
            >
              Call Us
            </a>
            <a
              href="mailto:info@rnk.com"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-white/80 hover:border-[#A72740] hover:bg-[#A72740]/10 hover:text-white transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* 5. RNK FOOTER */}
      <section className="bg-black">
        <RnkFooter />
      </section>
    </main>
  );
}
