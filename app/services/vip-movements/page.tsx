"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { RnkFooter } from "@/components/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// WHY RNK (VIP VERSION)
const whyRnkItems = [
  {
    title: "Elite chauffeur protocol",
    description:
      "Our chauffeurs are trained for VIP etiquette, red-carpet handling, priority reception, and high-profile guest movement.",
    direction: "left",
  },
  {
    title: "GPS-enabled secure fleet",
    description:
      "All VIP vehicles include GPS tracking, monitored routes and secure chauffeur protocols for celebrities, CEOs and diplomats.",
    direction: "right",
  },
  {
    title: "Confidential & discreet travel",
    description:
      "Perfect for film shoots, public figures, brand events, and confidential visits where privacy is essential.",
    direction: "up",
  },
  {
    title: "Priority route planning",
    description:
      "Every route is pre-planned for timings, red-carpet entries, multi-venue schedules and secure access points.",
    direction: "diagonal-left",
  },
  {
    title: "Luxury VIP fleet",
    description:
      "Choose from Mercedes, BMW, Audi, premium SUVs and sedans for VIP movements, convoys and elite guest travel.",
    direction: "diagonal-right",
  },
  {
    title: "24/7 VIP desk",
    description:
      "Last-minute changes, urgent event updates, backstage requests or late-night movements — our team manages it all.",
    direction: "up-soft",
  },
];

// CITY IMAGES
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
  Bhubaneswar: "/cities/bhubaneswar.webp",
};

export default function VipMovementsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white min-h-screen">

      {/* ======================= HERO ======================= */}
      <section className="relative w-full h-[70vh] md:h-[80vh] border-b border-white/10 overflow-hidden">
        <motion.img
          src="/about.webp"
          alt="VIP Movements RNK"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.22em] text-white/70 mb-4"
          >
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> /
            <span className="text-[#C8102E]"> VIP Movements</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight"
          >
            VIP Movements
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 max-w-2xl text-white/80 text-sm md:text-[15px]"
          >
            Precision-managed, confidential, and chauffeur-driven travel designed
            for celebrities, CEOs, international guests, diplomats, and elite personalities.
          </motion.p>

        </div>
      </section>

      {/* ======================= TEXT + IMAGE (WHITE) ======================= */}
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
              VIP Movements
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-4">
              Seamless travel crafted for{" "}
              <span className="font-semibold">elite personalities.</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/80 mb-3 leading-relaxed">
              Every VIP movement demands discretion, punctuality and
              high-standard guest handling. RNK ensures fully coordinated,
              protocol-ready travel for celebrities, executives and high-profile clients.
            </p>

            <p className="text-sm md:text-[15px] text-black/75 mb-5 leading-relaxed">
              From airport receptions to multi-vehicle convoys, backstage entries,
              hotel transfers and event-to-venue movements — everything is handled with care.
            </p>

            {/* Pink Card */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-xl p-5 md:p-6 border border-[#C8102E]/20
                         bg-gradient-to-br from-[#ffccd5]/40 via-[#ffdde6]/30 to-[#ffe6ee]/40
                         shadow-[0_10px_30px_rgba(200,16,46,0.08)]"
            >
              <h3 className="text-sm font-semibold text-[#C8102E] mb-2">Our VIP Services</h3>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed mb-3">
                Red-carpet arrivals, celebrity movements, film-shoot logistics,
                high-profile airport pick-ups, backstage transfers, and
                confidential travel for premium guests.
              </p>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed">
                Ideal for brand events, luxury weddings, media days, summits,
                diplomatic movements and time-sensitive schedules.
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <motion.img
                src="/about.webp"
                alt="VIP chauffeur travel RNK"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ======================= BG IMAGE SECTION ======================= */}
      <section
        className="relative py-20 border-b border-black/10 overflow-hidden
                   bg-[url('/luxury-rental-bg.webp')] bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl md:text-3xl font-light mb-4 text-white"
          >
            Luxury VIP travel made  
            <span className="font-semibold text-[#C8102E]"> effortless.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm md:text-[15px] leading-relaxed mb-4 text-white/85"
          >
            Your guests deserve the best. RNK manages every detail — from secure routing
            to time-specific movements and premium guest care.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm md:text-[15px] leading-relaxed text-white/90"
          >
            Every journey is curated with privacy, comfort and world-class standards.
          </motion.p>

        </div>
      </section>

      {/* ======================= WHY RNK ======================= */}
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8 md:mb-10"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-red-900/80 mb-2">
              Why RNK?
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-3">
              VIP mobility crafted for{" "}
              <span className="font-semibold text-[#C8102E]">precision & privacy.</span>
            </h2>

            <p className="max-w-2xl text-sm md:text-[15px] text-black/70">
              Every movement is coordinated with security, timing accuracy,
              high-level guest etiquette and complete confidentiality.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyRnkItems.map((item, index) => {
              let initial: any = { opacity: 0, y: 30 };
              if (item.direction === "left") initial = { opacity: 0, x: -40, y: 20 };
              if (item.direction === "right") initial = { opacity: 0, x: 40, y: 20 };
              if (item.direction === "up") initial = { opacity: 0, y: 50 };
              if (item.direction === "diagonal-left") initial = { opacity: 0, x: -30, y: 30 };
              if (item.direction === "diagonal-right") initial = { opacity: 0, x: 30, y: 30 };
              if (item.direction === "up-soft") initial = { opacity: 0, y: 40, scale: 0.96 };

              return (
                <motion.div
                  key={item.title}
                  initial={initial}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= DARK VIP SOLUTIONS ======================= */}
      <section className="relative bg-black text-white py-16 md:py-18 border-b border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-[#C8102E]/18 blur-3xl" />
          <div className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-8 md:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] mb-2">
                VIP Movements
              </p>
              <h2 className="text-xl md:text-2xl font-light">
                Designed for{" "}
                <span className="font-semibold">every VIP requirement.</span>
              </h2>
            </div>

            <p className="max-w-md text-xs md:text-[13px] text-white/70 leading-relaxed">
              From film shoot logistics to confidential meetings,
              RNK manages high-profile movements with precision.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Celebrity airport arrivals",
              "Film shoot movements",
              "Hotel to event transfers",
              "Escort-managed movements",
              "VIP & delegation drops",
              "Luxury wedding VIP movements",
              "Confidential meeting transfers",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="group relative rounded-2xl border border-white/12 
                           bg-gradient-to-br from-white/[0.08] via-white/[0.02] to-black/0
                           px-4 py-4.5 md:px-5 md:py-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#C8102E] via-white/40 to-[#C8102E] opacity-80" />
                <p className="text-xs md:text-[13px] text-white/80">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CITIES SECTION ======================= */}
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <p className="text-[20px] uppercase tracking-[0.25em] text-[#C8102E] mb-3 font-bold">
              Our Presence
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-3">
              RNK VIP Movements Across{" "}
              <span className="font-semibold">Major Cities in India</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/70 max-w-3xl mx-auto">
              Available in 17+ cities offering dedicated VIP readiness.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.keys(cityImages).map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative  overflow-hidden
                 border border-black/5
                 bg-transparent
                 h-64 md:h-64 cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center
                   
                   transition-all duration-500"
                  style={{ backgroundImage: `url(${cityImages[city]})` }}
                />

                <div className="absolute top-4 left-4 z-10">
                  <p className="text-white text-base font-semibold drop-shadow">{city}</p>
                </div>

                <div
                  className="absolute inset-0 flex items-center justify-center
                   translate-y-full group-hover:translate-y-0
                   transition-all duration-500 ease-out p-6 text-center"
                >
                  <p className="text-white text-xs md:text-sm leading-relaxed tracking-wide">
                    VIP Movements in {city}.  
                    Premium chauffeur services for celebrities, executives and elite guests.
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= FAQ ======================= */}
      <section className="bg-black text-white py-20 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] mb-3">
              FAQs
            </p>
            <h2 className="text-xl md:text-2xl font-light">
              Frequently Asked <span className="font-semibold">Questions</span>
            </h2>
          </motion.div>

          {/* FAQ LIST */}
          <div className="space-y-4">
            {[
              [
                "Do you handle celebrity and VIP movements?",
                "Yes, RNK specialises in celebrity movements, backstage transfers, airport receptions, and high-profile event logistics.",
              ],
              [
                "Is my travel kept confidential?",
                "Absolutely. Every VIP movement is handled with complete confidentiality and privacy.",
              ],
              [
                "Can you provide multi-car convoys?",
                "Yes, we can arrange multi-vehicle convoys for events, delegations and secure movements.",
              ],
              [
                "Are chauffeurs trained for VIP etiquette?",
                "All chauffeurs are trained for VIP behaviour, red-carpet protocol, secure routing and high-profile hospitality.",
              ],
            ].map(([q, a], i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-5 py-5 flex items-center justify-between"
                  >
                    <span className="text-[15px]">{q}</span>

                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-2xl text-white/60"
                    >
                      ⌄
                    </motion.span>
                  </button>

                  {isOpen && (
                    <div className="h-0.5 bg-[#C8102E] mx-5"></div>
                  )}

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 pt-3 text-sm text-white/70 leading-relaxed">
                      {a}
                    </p>
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
            RNK provides premium VIP movement services with trained chauffeurs,
            luxury vehicles and 24/7 command desk support.
          </p>
        </div>
      </section>

      {/* ======================= CTA ======================= */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl font-light mb-4"
          >
            Travel like a VIP — every moment, every mile.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm text-white/70 max-w-xl mx-auto mb-8"
          >
            Book a VIP chauffeur-driven experience designed for premium comfort,
            privacy and professionalism.
          </motion.p>

          <motion.a
            href="/book-now"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-3 rounded-full bg-[#C8102E] text-white text-sm uppercase tracking-wide"
          >
            Book Your Ride
          </motion.a>
        </div>
      </section>

      <RnkFooter />
    </main>
  );
}
