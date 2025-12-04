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
    title: "Chauffeur-driven luxury",
    description:
      "When you rent a chauffeur-driven car, you don't have to worry about driving and navigating through unfamiliar roads or traffic. A professional chauffeur handles everything, so you can relax, work or simply enjoy the ride.",
    direction: "left",
  },
  {
    title: "GPS-enabled",
    description:
      "A GPS-enabled car makes navigation in unknown locations effortless. It’s especially helpful when you're travelling to a new city and need to move quickly and efficiently. GPS tracking also helps maintain passenger security.",
    direction: "right",
  },
  {
    title: "Security",
    description:
      "A secure vehicle prioritises your safety with well-maintained, reliable cars and verified chauffeurs. You enjoy peace of mind knowing you'll arrive at your destination safely and on time.",
    direction: "up",
  },
  {
    title: "Comfort fit for VIPs",
    description:
      "Plush seating, climate control and refined cabins make every journey comfortable, quiet and relaxed — perfectly suited for executives, families and VIP guests.",
    direction: "diagonal-left",
  },
  {
    title: "Extensive fleet",
    description:
      "From sedans and SUVs to premium vans and coaches, RNK’s extensive fleet lets you choose the right vehicle for solo travellers, families, delegations and large groups.",
    direction: "diagonal-right",
  },
  {
    title: "24/7 support on call",
    description:
      "Round-the-clock on-call support ensures you get immediate assistance, quick resolutions and uninterrupted transfers — no matter what time your flight or train is.",
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

export default function AirportRailwayTransfersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ======================= HERO WITH IMAGE ======================= */}
      <section className="relative w-full h-[70vh] md:h-[80vh] border-b border-white/10 overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="/about.webp"   // 👉 change to an airport / travel image if you have
          alt="Airport & Railway Transfers by RNK"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 md:bg-black/60" />

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
            / <span className="text-[#C8102E]">Airport &amp; Railway Transfers</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white"
          >
            Airport &amp; Railway Transfers
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 max-w-2xl text-white/80 text-sm md:text-[15px]"
          >
            Seamless, punctual and stress-free transfers to and from airports and railway
            stations – for executives, families, guests and VIPs.
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
              Arrive on Time
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-4">
              Effortless{" "}
              <span className="font-semibold">airport &amp; railway transfers</span>{" "}
              designed around your schedule.
            </h2>

            <p className="text-sm md:text-[15px] text-black/80 mb-3 leading-relaxed">
              With RNK – Ramniranjan Kedia Group, every pick-up and drop is planned with
              precision. From flight and train tracking to terminal and platform
              coordination, we ensure your transfers are on time – without last-minute
              stress.
            </p>

            <p className="text-sm md:text-[15px] text-black/75 mb-5 leading-relaxed">
              Our chauffeur-driven vehicles manage luggage, routes and timing so you can
              focus on work, calls or simply relax between journeys.
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
                Our Special Transfer Services
              </h3>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed mb-3">
                24/7 airport &amp; railway station pick-ups and drops with real-time
                flight/train tracking, meet-and-greet options and professional chauffeurs
                for guests, teams and VIPs.
              </p>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed">
                From solo travellers to large groups, our sedans, SUVs, vans and coaches
                ensure smooth movement – with luggage handled end-to-end and waiting time
                minimised.
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
                src="/about.webp" // 👉 change to your airport/transfer image path if available
                alt="RNK Airport & Railway Transfers"
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

      {/* ======================= TRANSFER JOURNEY SECTION — BG IMAGE ======================= */}
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
            Transfers that keep{" "}
            <span className="font-semibold text-[#C8102E]">your journey on track.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-[15px] leading-relaxed mb-4 text-white/85"
          >
            Early morning departures, red-eye arrivals, last-minute changes – our team
            coordinates every detail so your arrivals and departures feel effortless.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm md:text-[15px] leading-relaxed mb-4 text-white/80"
          >
            Vehicles are dispatched with buffer time, routes are planned in advance and
            chauffeurs are briefed thoroughly – ensuring punctual, smooth transfers
            every time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-sm md:text-[15px] leading-relaxed text-white/90 font-medium"
          >
            Your flight. Your train.{" "}
            <span className="text-[#C8102E] font-semibold">
              Your journey begins and ends seamlessly with RNK.
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
              If reliability is what you are looking for,{" "}
              <span className="font-semibold text-[#C8102E]">
                you’re at the right place.
              </span>
            </h2>
            <p className="max-w-2xl text-sm md:text-[15px] text-black/70">
              RNK offers much more than just transfers. Every journey is designed around
              comfort, safety, timing and a truly elevated travel experience. Here’s why
              guests and corporates trust us for airport &amp; railway transfers:
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

                  <div className="flex items-start gap-3 mb-3">
                    <h3 className="text-sm md:text-[15px] font-semibold text-red-900">
                      {item.title}
                    </h3>
                  </div>

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

      {/* ======================= TRANSFER SOLUTIONS — DARK PREMIUM ======================= */}
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
                Transfer Solutions
              </p>
              <h2 className="text-xl md:text-2xl font-light">
                Designed to support{" "}
                <span className="font-semibold">every kind of transfer.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs md:text-[13px] text-white/70 leading-relaxed">
              From solo business travellers to entire delegations, RNK builds reliable,
              on-time transfer plans that match your flight and train schedules.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Airport pick-ups & drops",
              "Railway station transfers",
              "Early morning & red-eye flights",
              "Guest & delegation movements",
              "Hotel to airport/station connectivity",
              "Multi-stop corporate transfers",
              "Crew & staff transfers",
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

                  <div className="flex items-start gap-3">
                    <p className="text-xs md:text-[13px] text-white/80 leading-relaxed">
                      {item}
                    </p>
                  </div>

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
              RNK: Luxury Car Rental &amp; Transfer Services Across{" "}
              <span className="font-semibold">Various Cities in India</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/70 max-w-3xl mx-auto leading-relaxed">
              RNK offers premium chauffeur-driven car rental and transfer services across
              multiple cities in India, ensuring comfort, style and convenience wherever
              you travel.
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
                className="group relative overflow-hidden
                 border border-black/5
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
                    Luxury Car Rental &amp; Transfers – {city}. Premium chauffeur-driven
                    services for business, leisure and events.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= FAQ — DARK WITH UNIQUE CHEVRON ARROW ======================= */}
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
              Airport &amp; Railway Transfer{" "}
              <span className="font-semibold">FAQs</span>
            </h2>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {[
              [
                "Do you track flights and trains for delays?",
                "Yes. Our team tracks your flight or train in real-time and adjusts pick-up timings to avoid unnecessary waiting and charges.",
              ],
              [
                "Can you arrange late-night or early-morning transfers?",
                "Absolutely. We operate 24/7 and regularly manage early check-ins, red-eye flights and late-night arrivals.",
              ],
              [
                "Is there assistance for luggage handling?",
                "Yes. Chauffeurs assist with loading and unloading luggage, ensuring a smooth transition from terminal or platform to the car.",
              ],
              [
                "Can you handle group or delegation movements?",
                "Yes, we provide vans, SUVs and coaches for groups, delegations and events with coordinated pick-ups and drops.",
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
            RNK Rent A Car offers premium chauffeur-driven airport and railway transfer
            solutions across India. With a modern fleet, trained chauffeurs and 24/7
            support, we ensure seamless, comfortable and stylish journeys for corporate,
            leisure, wedding and VIP clients.
          </p>
        </div>
      </section>

      {/* ======================= SECTION — Final CTA ======================= */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-light mb-4"
          >
            Experience stress-free airport &amp; railway transfers.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm text-white/70 max-w-xl mx-auto mb-8"
          >
            Book a chauffeur-driven vehicle for your next departure or arrival. Our fleet,
            service quality and trained chauffeurs deliver world-class transfer
            experiences.
          </motion.p>

          <motion.a
            href="/book-now"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 rounded-full bg-[#C8102E] text-white
                       text-sm uppercase tracking-wide"
          >
            Book Your Transfer
          </motion.a>
        </div>
      </section>

      {/* ======================= FOOTER ======================= */}
      <RnkFooter />
    </main>
  );
}
