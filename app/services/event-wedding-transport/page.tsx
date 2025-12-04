"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RnkFooter } from "@/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const whyRnkItems = [
  {
    title: "Perfectly managed guest logistics",
    description:
      "From airport pickups to hotel-to-venue transfers, our end-to-end logistics ensure your guests, family, VIPs and delegates travel smoothly and reach every function or event on time.",
    direction: "left",
  },
  {
    title: "Luxury fleet for weddings & events",
    description:
      "Choose from sedans, SUVs, Mercedes, BMWs, Audi, luxury vans and convoy vehicles — ideal for groom entry, bridal travel, VIP guests and high-profile attendees.",
    direction: "right",
  },
  {
    title: "Dedicated coordination team",
    description:
      "A specialised coordination desk handles venue schedules, route planning, guest lists, timing management and last-minute changes for weddings and large-scale events.",
    direction: "up",
  },
  {
    title: "Professional chauffeurs",
    description:
      "Our chauffeurs are trained for hospitality, premium guest handling, event protocol, multi-stop requirements and late-night travel during celebrations or corporate events.",
    direction: "diagonal-left",
  },
  {
    title: "Realtime tracking & safety",
    description:
      "All vehicles are GPS-enabled for safe, secure transportation during wedding functions, VIP movements, exhibitions, conferences and backstage crew mobility.",
    direction: "diagonal-right",
  },
  {
    title: "Seamless multi-day operations",
    description:
      "Ideal for 2–5 day destination weddings, exhibitions, shoots or summits where constant movement of guests, VIPs and team members is required.",
    direction: "up-soft",
  },
];

const cities = [
  "Mumbai",
  "Delhi",
  "Chennai",
  "Bangalore",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Vadodara",
  "Indore",
  "Bhopal",
  "Jaipur",
  "Lucknow",
  "Chandigarh",
  "Goa",
  "Kochi",
  "Guwahati",
  "Bhubaneswar",
];

export default function EventWeddingTransportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ======================= HERO WITH IMAGE ======================= */}
      <section className="relative w-full h-[70vh] md:h-[80vh] border-b border-white/10 overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="/about.webp"
          alt="Event & Wedding Transport RNK"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.22em] text-white/70 mb-4"
          >
            <Link href="/" className="hover:text-white">
              Home
            </Link>{" "}
            /{" "}
            <Link href="/services" className="hover:text-white">
              Services
            </Link>{" "}
            / <span className="text-[#C8102E]">Event / Wedding Transport</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white"
          >
            Event / Wedding Transport
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 max-w-2xl text-white/80 text-sm md:text-[15px]"
          >
            Premium, punctual and elegantly managed transport solutions for weddings,
            guests, VIPs, artists, crew, delegates and large-scale corporate events.
          </motion.p>
        </div>
      </section>

      {/* ======================= NEW SECTION — TEXT + IMAGE (WHITE) ======================= */}
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">
          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] mb-2">
              Travel in Style
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-4">
              Seamless mobility for{" "}
              <span className="font-semibold">weddings & events.</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/80 mb-3 leading-relaxed">
              Whether it’s a luxury wedding, destination celebration, corporate event,
              exhibition, conference or VIP gathering — RNK ensures every travel moment
              runs perfectly.
            </p>

            <p className="text-sm md:text-[15px] text-black/75 mb-5 leading-relaxed">
              From airport pickups to mandap arrivals, backstage crew drops or VIP green
              room movements, our coordination team manages everything end-to-end.
            </p>

            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-xl p-5 md:p-6 border border-[#C8102E]/20
                 bg-gradient-to-br from-[#ffccd5]/40 via-[#ffdde6]/30 to-[#ffe6ee]/40
                 shadow-[0_10px_30px_rgba(200,16,46,0.08)]"
            >
              <h3 className="text-sm font-semibold text-[#C8102E] mb-2 tracking-wide">
                Specialised Event Services
              </h3>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed mb-3">
                Groom & bridal travel, luxury VIP cars, artist movements, guest shuttle
                loops, hotel coordination, stage crew mobility, event logistics and 24×7
                support.
              </p>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed">
                Perfect for luxury weddings, award nights, exhibitions, summits,
                concerts, brand launches and destination events.
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <motion.img
                src="/about.webp"
                alt="Event & Wedding Travel RNK"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======================= LUXURY RENTAL SECTION — CLEAN BG IMAGE ONLY ======================= */}
      <section
        className="relative py-20 border-b border-black/10 overflow-hidden
               bg-[url('/luxury-rental-bg.webp')] bg-cover bg-center bg-fixed"
      >
        {/* Dark overlay for readability (very soft) */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-light mb-4 text-white"
          >
            Luxury transport for{" "}
            <span className="font-semibold text-[#C8102E]">every celebration.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-[15px] leading-relaxed mb-4 text-white/85"
          >
            Whether transporting 20 guests or 2,000 — RNK delivers a seamless, comfortable
            and perfectly coordinated experience for weddings, corporate events and
            destination celebrations.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm md:text-[15px] leading-relaxed mb-4 text-white/80"
          >
            Luxury cars, SUVs, vans, shuttles and multi-vehicle convoys — maintained with
            precision, hygiene and top-tier hospitality.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-sm md:text-[15px] leading-relaxed text-white/90 font-medium"
          >
            One team, one fleet —{" "}
            <span className="text-[#C8102E] font-semibold">
              flawless transport for every function.
            </span>
          </motion.p>
        </div>
      </section>

      {/* ======================= WHY RNK — WHITE SECTION ======================= */}
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-10"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-red-900/80 mb-2">
              Why RNK?
            </p>
            <h2 className="text-xl md:text-2xl font-light mb-3">
              A luxury experience for{" "}
              <span className="font-semibold text-[#C8102E]">
                every function & event.
              </span>
            </h2>
            <p className="max-w-2xl text-sm md:text-[15px] text-black/70">
              RNK goes beyond basic travel. Our event & wedding transport services are
              built around timing, hospitality and guest comfort — so every arrival feels
              as special as the occasion itself.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyRnkItems.map((item, index) => {
              // Different slide directions per card
              let initial: any = { opacity: 0, y: 30 };
              if (item.direction === "left") {
                initial = { opacity: 0, x: -40, y: 20 };
              } else if (item.direction === "right") {
                initial = { opacity: 0, x: 40, y: 20 };
              } else if (item.direction === "up") {
                initial = { opacity: 0, y: 50 };
              } else if (item.direction === "diagonal-left") {
                initial = { opacity: 0, x: -30, y: 30 };
              } else if (item.direction === "diagonal-right") {
                initial = { opacity: 0, x: 30, y: 30 };
              } else if (item.direction === "up-soft") {
                initial = { opacity: 0, y: 40, scale: 0.96 };
              }

              return (
                <motion.div
                  key={item.title}
                  initial={initial}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.05,
                  }}
                  className="group relative rounded-2xl border border-black/10 
                       bg-white/90 shadow-[0_14px_40px_rgba(15,23,42,0.10)]
                       px-5 py-5 md:px-6 md:py-6 overflow-hidden"
                >
                  {/* subtle red top border accent */}
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#C8102E] via-red-900 to-[#C8102E]/70 opacity-70" />

                  <div className="flex items-start gap-3 mb-3">
                    <h3 className="text-sm md:text-[15px] font-semibold text-red-900">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-[13px] text-black/70 leading-relaxed">
                    {item.description}
                  </p>

                  {/* hover glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-40%] bg-gradient-to-br from-red-900/4 via-transparent to-[#C8102E]/6" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= EVENT / WEDDING SOLUTIONS (DARK) ======================= */}
      <section className="relative bg-black text-white py-16 md:py-18 border-b border-white/10 overflow-hidden">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-[#C8102E]/18 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] mb-2">
                Event & Wedding Solutions
              </p>
              <h2 className="text-xl md:text-2xl font-light">
                Designed to support{" "}
                <span className="font-semibold">every celebration & event.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs md:text-[13px] text-white/70 leading-relaxed">
              From baraat convoys to delegate movements — RNK manages the entire fleet
              with precision, comfort and luxury hospitality.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Luxury bridal & groom cars",
              "Guest shuttle loops & hotel transfers",
              "Airport pickups for VIPs & family",
              "Event crew mobility & backstage drops",
              "VIP & celebrity movements",
              "Multi-day destination wedding support",
              "Convoy cars for high-profile events",
            ].map((item, i) => {
              const fromLeft = i % 2 === 0;
              const fromTop = i % 3 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    x: fromLeft ? -24 : 24,
                    y: fromTop ? 32 : 16,
                    scale: 0.97,
                  }}
                  whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: i * 0.05,
                  }}
                  className="group relative rounded-2xl border border-white/12 
                       bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-black/0
                       px-4 py-4.5 md:px-5 md:py-5
                       shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                       overflow-hidden"
                >
                  {/* red accent strip */}
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#C8102E] via-white/40 to-[#C8102E] opacity-80" />

                  <div className="flex items-start gap-3">
                    <p className="text-xs md:text-[13px] text-white/80 leading-relaxed">
                      {item}
                    </p>
                  </div>

                  {/* hover glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-40%] bg-gradient-to-br from-[#C8102E]/10 via-transparent to-white/8" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= CITIES SECTION — PURE TRANSPARENT HOVER ======================= */}
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="text-[20px] uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-bold">
              Our Presence
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-3">
              RNK delivers premium transport across{" "}
              <span className="font-semibold">major Indian cities</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/70 max-w-3xl mx-auto leading-relaxed">
              RNK offers premium chauffeur-driven services for weddings, events, VIP
              movements and luxury travel across multiple cities in India.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative rounded-2xl overflow-hidden
                 border border-black/5
                 bg-transparent
                 h-64 md:h-64 cursor-pointer"
              >
                {/* BG Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center
                   
                   transition-all duration-500"
                  style={{
                    backgroundImage: `url('/cities/${city.toLowerCase()}.webp')`,
                  }}
                />

                
                {/* City Name */}
      <div className="absolute top-4 left-4 z-10">
        <p className="text-white text-base font-semibold">
          {city}
        </p>
      </div>
                {/* Hover Reveal */}
                <div
                 className="absolute inset-0 flex items-center justify-center
                   translate-y-full group-hover:translate-y-0
                   transition-all duration-500 ease-out p-6 text-center"
      >
                  <p className="text-white text-xs md:text-sm leading-relaxed tracking-wide">
                    Premium chauffeur-driven services for weddings, events, VIP movements
                    & luxury travel in {city}.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= SECTION 4 — Premium FAQ (DARK with UNIQUE CHEVRON ARROW) ======================= */}
      <section className="bg-black text-white py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] mb-3">
              FAQs
            </p>
            <h2 className="text-xl md:text-2xl font-light">
              Frequently Asked <span className="font-semibold">Questions</span>
            </h2>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {[
              [
                "Do you provide wedding cars for groom and bride entry?",
                "Yes, we offer premium sedans, SUVs and luxury cars for grand bridal and groom entries.",
              ],
              [
                "Can you handle large guest logistics for multi-day weddings?",
                "Absolutely — our coordination team manages airport pickups, hotel loops and venue transfers across all days.",
              ],
              [
                "Do you provide shuttle services for events?",
                "Yes, we offer shuttle loops, VIP drops, crew mobility and backstage support vehicles.",
              ],
              [
                "Are your chauffeurs trained for VIP and celebrity movements?",
                "Yes — all chauffeurs follow etiquette, confidentiality and event-ready protocols.",
              ],
            ].map(([q, a], i) => {
              const isOpen = openFaq === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl border border-white/10 
                       bg-white/[0.04] backdrop-blur-md
                       shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                       overflow-hidden"
                >
                  {/* HEADER */}
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-5 py-5 flex items-center justify-between text-left"
                  >
                    <span className="text-[15px] font-medium text-white/90">{q}</span>

                    {/* UNIQUE CHEVRON ARROW */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/60 text-2xl leading-none"
                    >
                      ⌄
                    </motion.span>
                  </button>

                  {/* RED ACCENT */}
                  {isOpen && (
                    <div className="h-0.5 bg-gradient-to-r from-[#C8102E] to-transparent mx-5"></div>
                  )}

                  {/* ANSWER */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-3 text-sm text-white/70 leading-relaxed">
                      {a}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ======================= SMALL TEXT ======================= */}
      <section className="bg-white text-black py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-black/60 leading-relaxed">
            RNK Rent A Car offers long-term chauffeur-driven travel solutions for
            corporates, professionals and families across India — blending flexibility,
            comfort and reliability in one seamless service.
          </p>
        </div>
      </section>

      {/* ======================= FINAL CTA ======================= */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-light mb-4"
          >
            Seamless travel for every guest, function & event.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm text-white/70 max-w-xl mx-auto mb-8"
          >
            Book luxury chauffeur-driven vehicles for your upcoming wedding or event.
            Our fleet, hospitality and 24×7 coordination ensure the perfect experience.
          </motion.p>

          <motion.a
            href="/book-now"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 rounded-full bg-[#C8102E] text-white
                 text-sm uppercase tracking-wide"
          >
            Book Your Ride
          </motion.a>
        </div>
      </section>

      {/* ======================= FOOTER ======================= */}
      <RnkFooter />
    </main>
  );
}
