"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-black">

      {/* HERO SECTION */}
      <section className="relative bg-black text-white min-h-[70vh] overflow-hidden flex items-center">
        <motion.img
          src="/about.webp"
          alt="RNK Luxury Fleet"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-20">
          {/* Breadcrumb */}
          <p className="text-xs text-white/70 mb-3 flex items-center gap-2">
            <Link href="/" className="hover:text-[#C8102E] transition">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="text-[#C8102E]">About Us</span>
          </p>

          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C8102E]/80 mb-2">
            Ramniranjan Kedia Rent A Car Pvt. Ltd.
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-2xl">
            Redefining{" "}
            <span className="text-[#C8102E]">
              Luxury Car Rental Services
            </span>
          </h1>

          <p className="mt-4 text-white/75 max-w-xl text-sm md:text-base">
            Offering excellence since 1969, across 170+ cities Pan India.  
            A legacy of curated travel experiences for corporates, dignitaries,
            artists and families who expect more from how they move.
          </p>
        </div>
      </section>

      {/* HERITAGE + YEARS BADGE */}
      <section className="py-14 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#C8102E] mb-3">
              Our Heritage
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              A legacy that began in 1969.
            </h2>

            <p className="text-black/70 leading-relaxed text-sm md:text-base">
              In the heart of Mumbai, a visionary named{" "}
              <span className="font-medium">Ramniranjan Kedia</span>, along with
              co-founder <span className="font-medium">Mr. Kamal Kedia</span>,
              set out to build something rare — a car rental company where
              service, safety and dignity travelled together.
            </p>

            <p className="text-black/70 leading-relaxed mt-4 text-sm md:text-base">
              What began as a modest operation soon expanded into a Pan-India
              network, trusted by business houses, production companies, banks,
              multinationals, financial institutions and diplomatic missions.
              RNK became a quiet constant behind high-stakes movements.
            </p>
          </div>

          {/* YEARS BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#C8102E]/25 bg-[#C8102E]/5 p-8 flex flex-col items-start backdrop-blur-sm"
          >
            <h3 className="text-5xl md:text-6xl font-bold text-[#C8102E]">
              55+
            </h3>
            <p className="mt-2 text-black/70 uppercase tracking-[0.22em] text-xs">
              Years of Experience
            </p>
            <p className="mt-4 text-black/70 text-sm">
              A rare combination of old-school discipline and modern fleet
              management — built over decades of on-ground learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* DARK STATS STRIP */}
      <section className="py-12 md:py-14 bg-black text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-white/60 mb-4">
            RNK at a glance
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              { value: "55+", label: "Years of Excellence" },
              { value: "170+", label: "Cities Covered Pan India" },
              { value: "24+", label: "Cars in Premium Fleet" },
              { value: "200+", label: "Corporate & HNI Clients" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.6)",
                }}
                className="relative rounded-2xl border border-white/12 bg-gradient-to-b from-white/10 via-black/90 to-black px-5 py-6 overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#C8102E]/40 blur-2xl" />
                <p className="text-2xl md:text-3xl font-semibold">
                  {stat.value}
                </p>
                <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C8102E] mb-3">
            Who we serve
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold max-w-xl">
              Built for people who can&apos;t afford friction in how they move.
            </h2>
            <p className="text-sm md:text-base text-black/70 max-w-md">
              RNK specialises in high-stakes movements where timing, safety and
              discretion matter as much as comfort.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                title: "Corporate & Business Houses",
                body: "Board meetings, AGMs, CXO movements, delegations and roadshows.",
              },
              {
                title: "Entertainment & Events",
                body: "Celebrities, artists, crews and VIP logistics for shoots and events.",
              },
              {
                title: "Government & Diplomats",
                body: "Protocol movements, visiting dignitaries and official delegations.",
              },
              {
                title: "Weddings & Social Celebrations",
                body: "Family, guests and bridal entries coordinated with dignity and style.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 40px rgba(15,23,42,0.12)",
                }}
                className="relative rounded-2xl border border-black/10 bg-white px-5 py-6 shadow-sm overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-20 w-20 rounded-full bg-[#C8102E]/70 blur-2xl" />
                <h3 className="font-semibold mb-2 text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-black/70 leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOLADES */}
      <section className="py-14 bg-black text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C8102E]/80 mb-3">
            Accolades & Appreciation
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Recognised for disciplined, dependable travel.
          </h2>

          <p className="text-white/75 max-w-3xl text-sm md:text-base leading-relaxed">
            RNK has been recognised by the{" "}
            <span className="font-medium">
              Government of India&apos;s Department of Tourism
            </span>
            , along with Protocol Divisions and Ministries for its commitment
            to safe, well-coordinated movements. Public sector undertakings,
            diplomatic missions and top private institutions continue to rely on
            RNK when consistency is non-negotiable.
          </p>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#C8102E] mb-3">
            Our Philosophy
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Trust. Excellence. Comfort.
          </h2>

          <p className="text-black/70 leading-relaxed text-sm md:text-base max-w-3xl">
            For RNK, a car is never just a vehicle. It&apos;s an extension of
            the host&apos;s reputation. Every movement — whether it&apos;s a
            midnight airport run or a high-profile convoy — is planned with the
            same discipline: verified chauffeurs, meticulously maintained
            vehicles and timing that respects every minute of your schedule.
          </p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto text-center px-6 md:px-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to plan your next movement with RNK?
          </h2>

          <p className="text-white/70 max-w-xl mx-auto mb-8 text-sm md:text-base">
            Share your dates, routes and requirements — our team will revert
            with the right fleet mix, availability and costing so you can lock
            everything in one go.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full bg-[#C8102E] text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] hover:bg-red-900 transition shadow-[0_10px_32px_rgba(200,16,46,0.55)]">
                Contact Us
              </button>
            </Link>
            <Link href="/fleet">
              <button className="px-8 py-3 rounded-full border border-white/40 text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] hover:bg-white hover:text-black transition">
                Explore Fleet
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
