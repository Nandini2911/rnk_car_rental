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
    title: "Luxury, redefined",
    description:
      "Step into a premium travel experience with world-class interiors, plush seating and meticulously maintained luxury vehicles designed for comfort and elegance.",
    direction: "left",
  },
  {
    title: "Professional chauffeurs",
    description:
      "Our trained chauffeurs prioritise etiquette, safety and privacy to ensure a refined travel experience for solo travellers, families and VIP guests.",
    direction: "right",
  },
  {
    title: "GPS-enabled & trackable",
    description:
      "Every vehicle is equipped with GPS tracking for real-time movement updates and enhanced safety throughout your journey.",
    direction: "up",
  },
  {
    title: "VIP-grade comfort",
    description:
      "From climate control to perfectly cushioned seats and premium audio systems — every detail enhances the joy of long luxury drives.",
    direction: "diagonal-left",
  },
  {
    title: "Premium fleet selection",
    description:
      "Choose from BMW, Mercedes, Audi, premium SUVs, sedans, vans and more — curated to suit every luxury travel requirement.",
    direction: "diagonal-right",
  },
  {
    title: "24/7 concierge support",
    description:
      "Our team is available at all hours to help with itinerary changes, emergencies and personalised travel requests.",
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
  Bhubaneswar: "/cities/bhubaneswar.webp",
};

export default function LuxuryTravelPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white min-h-screen">

      {/* ======================= HERO ======================= */}
      <section className="relative w-full h-[70vh] md:h-[80vh] border-b border-white/10 overflow-hidden">

        <motion.img
          src="/about.webp"
          alt="Luxury Travel RNK"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-[0.22em] text-white/70 mb-4"
          >
            <Link href="/">Home</Link> / <Link href="/services">Services</Link> /
            <span className="text-[#C8102E]"> Luxury Travel</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light"
          >
            Luxury Travel
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 max-w-2xl text-white/80 text-sm md:text-[15px]"
          >
            Premium chauffeur-driven experiences curated for holidays, celebrations,
            weekend getaways and personalised luxury trips.
          </motion.p>
        </div>
      </section>

      {/* ======================= SECTION — TEXT + IMAGE (WHITE) ======================= */}
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-2 items-center">

          {/* TEXT BLOCK */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] mb-2">
              Premium Escapes
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-4">
              Travel luxuriously with{" "}
              <span className="font-semibold">world-class chauffeur-driven cars.</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/80 leading-relaxed mb-3">
              Whether you’re heading for a romantic getaway, a weekend escape, a family
              holiday or a luxurious long-drive, RNK elevates your travel experience to
              something special.
            </p>

            <p className="text-sm md:text-[15px] text-black/75 leading-relaxed mb-5">
              Every route, every stop and every detail is curated to match your comfort,
              preferences and style.
            </p>

            {/* PINK CARD */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-xl p-5 md:p-6 border border-[#C8102E]/20
                         bg-gradient-to-br from-[#ffccd5]/40 via-[#ffdde6]/30 to-[#ffe6ee]/40"
            >
              <h3 className="text-sm font-semibold text-[#C8102E] mb-2">
                Our Luxury Travel Services
              </h3>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed mb-3">
                Holiday trips, romantic drives, celebrations, long-distance scenic routes,
                VIP tours, outstation vacations and personalised luxury travel plans —
                designed just for you.
              </p>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed">
                Choose from sedans, SUVs, premium vehicles and chauffeur-driven luxury
                cars made for comfort and long-journey elegance.
              </p>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
              <motion.img
                src="/about.webp"
                alt="RNK Luxury Travel"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.9 }}
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* ======================= LUXURY TRAVEL BG SECTION ======================= */}
      <section
        className="relative py-20 border-b border-black/10 overflow-hidden
                   bg-[url('/luxury-rental-bg.webp')] bg-cover bg-center bg-fixed"
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-light text-white mb-4">
            Luxury that makes{" "}
            <span className="text-[#C8102E] font-semibold">every journey unforgettable.</span>
          </motion.h2>

          <motion.p className="text-sm md:text-[15px] text-white/85 leading-relaxed mb-4"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            From mountain drives and royal city tours to long coastal journeys — travel
            becomes an experience, not just a destination.
          </motion.p>

          <motion.p className="text-sm md:text-[15px] text-white/80 leading-relaxed mb-4"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            Our luxury fleet and trained chauffeurs ensure smooth, quiet, elegant travel
            with complete privacy and comfort.
          </motion.p>

          <motion.p className="text-sm md:text-[15px] text-white/90 font-medium"
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            Explore. Indulge. Celebrate.{" "}
            <span className="text-[#C8102E] font-semibold">Travel the RNK way.</span>
          </motion.p>
        </div>
      </section>

      {/* ======================= WHY RNK ======================= */}
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="mb-10"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-red-900/80 mb-2">
              Why RNK?
            </p>
            <h2 className="text-xl md:text-2xl font-light mb-3">
              Luxury travel is more than a ride —{" "}
              <span className="font-semibold text-[#C8102E]">it’s an experience.</span>
            </h2>
            <p className="text-sm md:text-[15px] max-w-2xl text-black/70">
              RNK curates premium travel tailored to your style, comfort and journey. From
              scenic routes to outstation travel, every drive is elevated.
            </p>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyRnkItems.map((item, index) => {
              let initial: any = { opacity: 0, y: 30 };
              if (item.direction === "left") initial = { opacity: 0, x: -40 };
              if (item.direction === "right") initial = { opacity: 0, x: 40 };
              if (item.direction === "diagonal-left") initial = { opacity: 0, x: -30, y: 30 };
              if (item.direction === "diagonal-right") initial = { opacity: 0, x: 30, y: 30 };

              return (
                <motion.div
                  key={item.title}
                  initial={initial}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="rounded-2xl border border-black/10 bg-white/90 shadow-[0_14px_40px_rgba(15,23,42,0.10)]
                             p-6 relative overflow-hidden"
                >
                  <span className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#C8102E] to-red-900" />
                  <h3 className="text-sm md:text-[15px] font-semibold text-red-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-[13px] text-black/70">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= LUXURY TRAVEL SOLUTIONS ======================= */}
      <section className="relative bg-black text-white py-16 border-b border-white/10 overflow-hidden">
        <div className="absolute -top-40 -left-20 h-72 w-72 bg-[#C8102E]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-80 w-80 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div className="mb-8"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8102E] mb-2">
              Luxury Travel Solutions
            </p>
            <h2 className="text-xl md:text-2xl font-light">
              Discover the world in{" "}
              <span className="font-semibold">absolute comfort.</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Weekend getaways",
              "Long-distance luxury journeys",
              "Romantic scenic drives",
              "Family holiday tours",
              "Road trips & personalised routes",
              "Premium outstation travel",
              "VIP and celebrity travel movements",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, x: i % 2 === 0 ? -20 : 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative rounded-2xl border border-white/12
                           bg-gradient-to-br from-white/[0.08] to-black/0 p-5 shadow-[0_18px_45px_rgba(0,0,0,0.55)]"
              >
                <span className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#C8102E] to-white/30" />
                <p className="text-xs md:text-[13px] text-white/85 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CITIES ======================= */}
      <section className="bg-white text-black py-16 border-b border-black/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-[20px] tracking-[0.25em] text-[#C8102E] font-bold mb-3">
            Our Presence
          </motion.h2>

          <p className="text-sm md:text-[15px] text-black/70 max-w-3xl mx-auto mb-8">
            Luxury travel services available across India's top cities — designed to bring
            premium comfort wherever you go.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.keys(cityImages).map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
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

                 {/* City Name */}
      <div className="absolute top-4 left-4 z-10">
        <p className="text-white text-base font-semibold">
          {city}
        </p>
      </div>
                <div className="absolute inset-0 flex items-center justify-center
                   translate-y-full group-hover:translate-y-0
                   transition-all duration-500 ease-out p-6 text-center">
                  <p className="text-white text-xs md:text-sm leading-relaxed tracking-wide">
                    Luxury Travel – {city}. Chauffeur-driven elegance for holidays,
                    weekend trips and premium journeys.
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
          <motion.h2 className="text-center text-xl md:text-2xl font-light mb-10">
            Luxury Travel <span className="font-semibold">FAQs</span>
          </motion.h2>

          <div className="space-y-4">
            {[
              [
                "Can I customise my travel route?",
                "Yes. We offer fully personalised itineraries, scenic routes and custom stopovers for your luxury journey.",
              ],
              [
                "Do you provide luxury cars for long-distance travel?",
                "Yes, we specialise in long-distance luxury journeys with premium comfort and safety.",
              ],
              [
                "Are the chauffeurs trained for premium travel experiences?",
                "All chauffeurs are trained in etiquette, long-route driving, safety and premium guest handling.",
              ],
              [
                "Can I book for weekend getaways?",
                "Absolutely! Weekend trips and extended holidays are some of our most popular luxury travel services.",
              ],
            ].map(([q, a], i) => {
              const isOpen = openFaq === i;

              return (
                <motion.div key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-xl overflow-hidden">
                  <button onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-5 py-5 flex justify-between text-left">
                    <span className="text-[15px] font-medium text-white/90">{q}</span>

                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="text-white/70 text-2xl">⌄</motion.span>
                  </button>

                  {isOpen && <div className="h-0.5 bg-gradient-to-r from-[#C8102E] to-transparent mx-5" />}

                  <motion.div initial={{ height: 0 }} animate={{ height: isOpen ? "auto" : 0 }} className="overflow-hidden">
                    <p className="px-5 pb-5 pt-3 text-sm text-white/70">{a}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= SMALL SEO TEXT ======================= */}
      <section className="bg-white text-black py-10">
        <p className="max-w-4xl mx-auto px-6 text-center text-xs text-black/60">
          RNK Rent A Car offers premium chauffeur-driven luxury travel services for
          celebrations, weekend getaways, long-distance journeys and personalised holiday
          routes. Enjoy premium comfort with trained chauffeurs and 24/7 support.
        </p>
      </section>

      {/* ======================= CTA ======================= */}
      <section className="bg-black text-white py-20 text-center">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          className="text-xl md:text-2xl font-light mb-4">
          Make your next journey unforgettable.
        </motion.h2>

        <p className="text-sm text-white/70 max-w-xl mx-auto mb-8">
          Book a premium chauffeur-driven luxury car for your next holiday, weekend trip
          or celebration.
        </p>

        <motion.a href="/book-now" whileHover={{ scale: 1.05 }}
          className="px-8 py-3 rounded-full bg-[#C8102E] text-white text-sm uppercase">
          Book Luxury Travel
        </motion.a>
      </section>

      <RnkFooter />
    </main>
  );
}
