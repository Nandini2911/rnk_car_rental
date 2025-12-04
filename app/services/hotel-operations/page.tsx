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
    title: "Seamless guest experience",
    description:
      "From airport pick-up to hotel driveway, every guest movement is planned to reflect your hotel’s standards — smooth, punctual and welcoming.",
    direction: "left",
  },
  {
    title: "Trained hospitality chauffeurs",
    description:
      "Our chauffeurs are trained in hotel etiquette, guest handling, luggage assistance and discretion — ensuring a refined first and last impression.",
    direction: "right",
  },
  {
    title: "Real-time tracking & coordination",
    description:
      "All vehicles are GPS-enabled and coordinated live with your front desk or concierge, ensuring accurate ETAs and timely guest updates.",
    direction: "up",
  },
  {
    title: "Dedicated account management",
    description:
      "A single point of contact for reservations, VIP requirements, bulk bookings, events and last-minute requests — tailored for hotel teams.",
    direction: "diagonal-left",
  },
  {
    title: "Fleet for every guest profile",
    description:
      "From executive sedans to luxury cars, SUVs and vans — choose the right vehicle mix for business travellers, families, VIPs and delegations.",
    direction: "diagonal-right",
  },
  {
    title: "24/7 operations for check-in & check-out",
    description:
      "Round-the-clock availability aligned with early check-ins, late check-outs, red-eye arrivals and late-night departures.",
    direction: "up-soft",
  },
];

const cityImages: Record<string, string> = {
  Mumbai: "/cities/mumbai.webp",
  Delhi: "/cities/delhi.webp",
  Chennai: "/cities/chennai.webp",
  Bangalore: "/cities/bangalore.webp",
  Kolkata: "/cities/kolkata.webp",
  Hyderabad: "/cities/hyderabad.webp",
  Pune: "/cities/pune.webp",
  Ahmedabad: "/cities/ahmedabad.webp",
  Vadodara: "/cities/vadodara.webp",
  Indore: "/cities/indore.webp",
  Bhopal: "/cities/bhopal.webp",
  Jaipur: "/cities/jaipur.webp",
  Lucknow: "/cities/lucknow.webp",
  Chandigarh: "/cities/chandigarh.webp",
  Goa: "/cities/goa.webp",
  Kochi: "/cities/kochi.webp",
  Guwahati: "/cities/guwahati.webp",
};

export default function HotelOperationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ======================= HERO WITH IMAGE ======================= */}
      <section className="relative w-full h-[70vh] md:h-[80vh] border-b border-white/10 overflow-hidden">
        <motion.img
          src="/about.webp" // 👉 replace with hotel / lobby / car-at-hotel image if you have
          alt="Hotel Operations by RNK"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />

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
            / <span className="text-[#C8102E]">Hotel Operations</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white"
          >
            Hotel Operations
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 max-w-2xl text-white/80 text-sm md:text-[15px]"
          >
            Integrated, chauffeur-driven mobility solutions designed specially for hotels,
            resorts and serviced residences — for guests, staff and VIP movements.
          </motion.p>
        </div>
      </section>

      {/* ======================= SECTION — TEXT + IMAGE (WHITE) ======================= */}
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
              For Hotels &amp; Hospitality
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-4">
              Seamless{" "}
              <span className="font-semibold">guest &amp; hotel mobility</span>{" "}
              managed end-to-end.
            </h2>

            <p className="text-sm md:text-[15px] text-black/80 mb-3 leading-relaxed">
              RNK partners with hotels and hospitality brands to manage all ground
              transport — from guest arrivals and departures to staff and crew
              movements, events and corporate stays.
            </p>

            <p className="text-sm md:text-[15px] text-black/75 mb-5 leading-relaxed">
              We operate as an extended arm of your hotel team, ensuring every ride
              complements the experience you promise inside the property.
            </p>

            {/* Special Services card */}
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
                Our Hotel Operations Services
              </h3>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed mb-3">
                Contracted travel desks, guest pick-up &amp; drop, crew movement,
                event-related transport, VIP movements, corporate stay logistics and
                more — built around your hotel’s operational needs.
              </p>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed">
                We coordinate closely with your reservations, concierge and events team
                to deliver a smooth, branded experience at every touchpoint.
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
                src="/about.webp" // 👉 replace with hotel driveway / car-at-hotel image
                alt="RNK Hotel Operations Transport"
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

      {/* ======================= BG SECTION — HOTEL MOBILITY PHILOSOPHY ======================= */}
      <section
        className="relative py-20 border-b border-black/10 overflow-hidden
                   bg-[url('/luxury-rental-bg.webp')] bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-light mb-4 text-white"
          >
            Mobility that{" "}
            <span className="font-semibold text-[#C8102E]">
              matches your hospitality standards.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-[15px] leading-relaxed mb-4 text-white/85"
          >
            From first airport greeting to the final goodbye, transport plays a crucial
            role in shaping your guest’s memory of their stay.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm md:text-[15px] leading-relaxed mb-4 text-white/80"
          >
            RNK ensures every journey to and from your hotel feels polished, reliable
            and aligned with your brand’s promise.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-sm md:text-[15px] leading-relaxed text-white/90 font-medium"
          >
            Guests remember how they arrived and how they left —{" "}
            <span className="text-[#C8102E] font-semibold">
              we help you perfect both.
            </span>
          </motion.p>
        </div>
      </section>

      {/* ======================= WHY RNK — WHITE ======================= */}
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
              A mobility partner{" "}
              <span className="font-semibold text-[#C8102E]">
                built for hospitality brands.
              </span>
            </h2>
            <p className="max-w-2xl text-sm md:text-[15px] text-black/70">
              RNK doesn’t just send cars — we build long-term mobility partnerships
              with hotels, ensuring consistency, reliability and guest delight across
              every stay.
            </p>
          </motion.div>

          {/* Cards grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyRnkItems.map((item, index) => {
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
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#C8102E] via-red-900 to-[#C8102E]/70 opacity-70" />

                  <h3 className="text-sm md:text-[15px] font-semibold text-red-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-[13px] text-black/70 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-40%] bg-gradient-to-br from-red-900/4 via-transparent to-[#C8102E]/6" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= HOTEL OPS SOLUTIONS — DARK ======================= */}
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
                Hotel Mobility Solutions
              </p>
              <h2 className="text-xl md:text-2xl font-light">
                Designed to support{" "}
                <span className="font-semibold">every hotel requirement.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs md:text-[13px] text-white/70 leading-relaxed">
              From independent boutique hotels to large chains and resorts, RNK designs
              mobility plans that support daily operations and special occasions.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Guest pick-ups & drops (airport / station / city)",
              "On-call cars for in-house guests",
              "Corporate stay & long-stay guest mobility",
              "Crew, staff & management transfers",
              "VIP & VVIP movements for high-profile guests",
              "Event, conference & wedding guest shuttles",
              "Dedicated travel desk partnerships",
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
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#C8102E] via-white/40 to-[#C8102E] opacity-80" />

                  <p className="text-xs md:text-[13px] text-white/80 leading-relaxed">
                    {item}
                  </p>

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
              RNK: Hotel Mobility &amp; Transport Services Across{" "}
              <span className="font-semibold">Multiple Cities in India</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/70 max-w-3xl mx-auto leading-relaxed">
              RNK partners with hotels across key Indian cities, providing reliable,
              premium chauffeur-driven transport that enhances your guest experience.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
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
            ].map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative 
                 border border-black/5 overflow-hidden
                 bg-transparent
                 h-64 md:h-64 cursor-pointer"
              >
                {/* BG Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center
                   
                   transition-all duration-500"
                  style={{
                    backgroundImage: `url('${cityImages[city] ?? `/cities/${city.toLowerCase()}.webp`}')`,
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
                    Hotel transport &amp; luxury car services – {city}. Supporting
                    hotels with guest, staff and VIP movements.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= FAQ — DARK WITH CHEVRON ARROW ======================= */}
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
              Hotel Operations{" "}
              <span className="font-semibold">FAQs</span>
            </h2>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {[
              [
                "Do you work on long-term contracts with hotels?",
                "Yes. We offer long-term contracts, retainers and structured arrangements for hotels, resorts and serviced residences.",
              ],
              [
                "Can you set up a dedicated travel desk inside the hotel?",
                "Yes. We can provide a dedicated travel desk model with on-ground executives or tightly integrated remote coordination.",
              ],
              [
                "Do you support 24/7 guest movements?",
                "Absolutely. Our operations are 24/7, aligned with early check-ins, late check-outs and red-eye movements.",
              ],
              [
                "Can you handle high-volume events or weddings at our hotel?",
                "Yes. We regularly manage bulk transport for conferences, weddings and large events hosted at hotels.",
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
                    <div className="h-0.5 bg-gradient-to-r from-[#C8102E] to-transparent mx-5" />
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

      {/* ======================= SMALL SEO TEXT ======================= */}
      <section className="bg-white text-black py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-black/60 leading-relaxed">
            RNK Rent A Car partners with hotels, resorts and serviced residences to
            deliver premium, chauffeur-driven transport for guests, staff, crew and VIP
            movements. With a modern fleet, trained chauffeurs and 24/7 support, we help
            hotels extend their hospitality beyond the lobby.
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
            Elevate your hotel’s guest experience with RNK.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm text-white/70 max-w-xl mx-auto mb-8"
          >
            Set up a premium, reliable and professional transport partner for your
            property — from daily operations to special events.
          </motion.p>

          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 rounded-full bg-[#C8102E] text-white
                       text-sm uppercase tracking-wide"
          >
            Talk to Our Team
          </motion.a>
        </div>
      </section>

      {/* ======================= FOOTER ======================= */}
      <RnkFooter />
    </main>
  );
}
