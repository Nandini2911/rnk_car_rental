"use client";

import { RnkFooter } from "@/components/footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* -------------------------------- */}
{/* HERO SECTION */}
{/* -------------------------------- */}
<section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-white/10">
  <motion.img
    src="/about.webp"
    alt="RNK About"
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ scale: 1.15, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1.3, ease: "easeOut" }}
  />

  <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />

  {/* LEFT-ALIGNED CONTENT */}
  <div className="relative z-10 w-full px-6 lg:px-10">
    <div className="max-w-xl">
      <p className="text-xs text-white/60 mb-4 flex items-center gap-2">
        <Link href="/" className="hover:text-[#C8102E] transition">
          Home
        </Link>
        <span className="text-white/40">/</span>
        <span className="text-[#C8102E]">About Us</span>
      </p>

      <p className="text-[11px] uppercase tracking-[0.28em] text-[#C8102E]/80 mb-3">
        RNK · ABOUT US
      </p>

      <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
        Redefining Luxury Car Rental Services since{" "}
        <span className="text-[#C8102E]">1969</span>
      </h1>

      <p className="mt-4 text-white/75 text-sm md:text-base max-w-md">
        A legacy built over 55+ years, operating across 170+ cities Pan India —
        trusted by corporates, governments, dignitaries and travellers nationwide.
      </p>
    </div>
  </div>
</section>

      {/* -------------------------------- */}
{/* -------------------------------- */}
{/* SECTION 1 — HERITAGE + IMAGE */}
{/* -------------------------------- */}
<section className="bg-white text-black py-16 md:py-20 border-b border-black/10">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT – TEXT SLIDE FROM LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">
        Ramniranjan Kedia Rent A Car Pvt. Ltd.
      </h2>

      <p
        className="text-sm md:text-[15px] text-black/70 max-w-3xl leading-relaxed text-justify"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >
        Offering excellence since 1969, operating today across 170+ cities
        Pan India.
        <br /><br />
        What began in 1969 as a modest vision soon became a landmark
        journey. In the bustling heart of Mumbai, Shri Ramniranjan Kedia,
        along with co-founder Mr. Kamal Kedia, laid the foundation of what
        would evolve into the RNK Group — a name now synonymous with refined
        travel, dependable service and elevated car rental experiences.
        <br /><br />
        Armed with a passion for excellence and an intuitive understanding
        of the travel industry, they built a company that redefined
        expectations. Over the decades, RNK expanded rapidly, establishing
        strong operational bases across India’s key cities and becoming a
        symbol of trust, reliability and innovation.
      </p>
    </motion.div>

    {/* RIGHT – IMAGE SLIDE FROM RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="relative rounded-3xl overflow-hidden border border-black/10 shadow-lg"
    >
      <motion.img
        src="/about.webp"
        alt="Founding years of RNK Rentals"
        className="w-full h-full object-cover max-h-[360px]"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      <div className="absolute bottom-3 left-4 text-[11px] uppercase tracking-[0.18em] text-white/75">
        Since 1969 · Mumbai Origin
      </div>
    </motion.div>

  </div>
</section>

      {/* -------------------------------- */}
      {/* SECTION 2 — EXPERIENCE BLOCK */}
      {/* -------------------------------- */}
      <section className="bg-black text-white py-16 md:py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-[0.28em] text-white/60 mb-2">
              Legacy in motion
            </h2>
            <h3 className="text-4xl md:text-5xl font-semibold text-[#C8102E]">
              55+
            </h3>
            <p className="text-lg font-light text-white/70 mt-1">
              Years of Experience
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-[15px] text-white/75 leading-relaxed text-justify"
          >
            For over five decades, RNK has upheld a standard rooted in precision,
            discipline and customer-first values. Every journey we deliver carries
            the weight of our legacy and the trust of the countless clients who choose us.
          </motion.p>
        </div>
      </section>

      {/* -------------------------------- */}
{/* SECTION — ACCOLADES & APPRECIATION */}
{/* -------------------------------- */}
<section className="bg-white text-black py-16 md:py-20 border-b border-black/10">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT – TEXT SLIDES FROM LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-4"
    >
      <p className="text-[11px] tracking-[0.32em] uppercase text-red-700">
        Accolades & Appreciation
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold">
        Accolades & Appreciation
      </h2>

      <p
        className="text-sm md:text-[15px] text-black/70 leading-relaxed max-w-3xl text-justify"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >
        The Government of India, through the Department of Tourism,
        bestowed its recognition upon the RNK Group, validating its
        commitment to exceptional service and unwavering quality.
        <br /><br />
        This honour stands as a testament to the tireless efforts of the
        entire RNK team and their unyielding pursuit of excellence over
        decades of operations.
      </p>
    </motion.div>

    {/* RIGHT – IMAGE SLIDES FROM RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      whileHover={{
        y: -6,
        boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
        scale: 1.02,
      }}
      className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl bg-black"
    >
      <motion.img
        src="/about.webp"
        alt="RNK recognised by Government and Tourism bodies"
        className="w-full h-full object-cover max-h-[300px]"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
        <div>
          <p className="uppercase tracking-[0.18em] text-white/60">
            Department of Tourism Recognition
          </p>
          <p className="text-[11px] text-white/75 mt-1">
            A milestone in RNK&apos;s journey of trusted travel excellence.
          </p>
        </div>
        <span className="text-[10px] px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
          SINCE 1969
        </span>
      </div>
    </motion.div>

  </div>
</section>




      {/* -------------------------------- */}
      {/* LEGACY TIMELINE */}
      {/* -------------------------------- */}
      <section className="bg-black text-white py-16 md:py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/60 mb-2">
              Legacy Timeline
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              A journey shaped by discipline and detail.
            </h2>
          </div>

          <div className="space-y-8 border-l border-white/15 pl-4 md:pl-6">
            {[
              {
                year: "1969",
                title: "The Beginning in Mumbai",
                body:
                  "Shri Ramniranjan Kedia and Mr. Kamal Kedia establish the foundation of RNK — with a single clear intention: to deliver disciplined, reliable travel.",
              },
              {
                year: "1980s–1990s",
                title: "Growing Across Metros",
                body:
                  "Operations expand into key Indian metros, serving leading business houses and institutions that demand punctuality and consistency.",
              },
              {
                year: "2000s",
                title: "Recognised by the Nation",
                body:
                  "The Government of India recognises RNK’s commitment to quality and service — strengthening its position as a trusted national player.",
              },
              {
                year: "Today",
                title: "170+ Cities. One Standard.",
                body:
                  "With a presence across 170+ cities Pan India, RNK continues to evolve — upgrading fleets, systems and service to match modern expectations.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: idx * 0.05,
                }}
                className="relative pl-4"
              >
                <span className="absolute -left-[9px] top-1 h-3 w-3 rounded-full border border-[#C8102E] bg-black">
                  <span className="block h-1.5 w-1.5 rounded-full bg-[#C8102E] m-[3px]" />
                </span>

                <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                  {item.year}
                </p>
                <h3 className="mt-1 text-sm md:text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-white/70 max-w-2xl">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------- */}
      {/* BRAND PILLARS */}
      {/* -------------------------------- */}
      <section className="bg-white text-black py-16 md:py-20 border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.28em] text-[#C8102E] mb-2">
                What RNK stands for
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                More than cars. A standard of care.
              </h2>
            </div>
            <p className="text-sm md:text-[15px] text-black/65 max-w-md">
              Every booking and chauffeur assignment is run through one lens —
              does this meet the RNK standard of trust, excellence and comfort?
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Trust",
                body:
                  "From government delegations to high-profile guests, we are trusted with movements that cannot fail.",
              },
              {
                title: "Excellence",
                body:
                  "Disciplined fleets, trained chauffeurs and processes built to run like clockwork.",
              },
              {
                title: "Comfort",
                body:
                  "Quiet cabins, clean cars and thoughtful service that lets travellers arrive as fresh as they started.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 40px rgba(0,0,0,0.12)",
                }}
                className="relative rounded-2xl border border-black/10 bg-white shadow-sm p-6 overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#C8102E]/90 blur-2xl" />
                <h3 className="text-sm md:text-base font-semibold mb-2">
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

      {/* -------------------------------- */}
      {/* WHO WE SERVE */}
      {/* -------------------------------- */}
      <section className="bg-black text-white py-16 md:py-20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-white/60 mb-2">
              Who we serve
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Built for movements that matter.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                tag: "CORPORATE & HNI",
                title: "Business & Delegations",
                body:
                  "CXOs, investor groups, roadshows and international teams — handled with protocol-friendly precision.",
              },
              {
                tag: "GOVERNMENT & DIPLOMATS",
                title: "Official & Protocol",
                body:
                  "Movements for ministries, embassies and government bodies — where timing, safety and discretion are non-negotiable.",
              },
              {
                tag: "SOCIAL & EVENTS",
                title: "Weddings & VIP Movements",
                body:
                  "From bridal entries to large guest logistics, we design movement grids that keep your events flowing smoothly.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 18px 40px rgba(200,16,46,0.27)",
                }}
                className="rounded-2xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur-sm relative overflow-hidden"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#C8102E]/35 blur-2xl" />
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/60 mb-2">
                  {item.tag}
                </p>
                <h3 className="text-sm md:text-base font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
{/* -------------------------------- */}
{/* SECTION — TRUST. EXCELLENCE. COMFORT. */}
{/* -------------------------------- */}
<section className="bg-white text-black py-16 md:py-20 border-b border-black/10">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT – TEXT SLIDES FROM LEFT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-4"
    >
      <p className="text-[11px] tracking-[0.32em] uppercase text-red-700">
        Trust · Excellence · Comfort
      </p>

      <h2 className="text-2xl md:text-3xl font-semibold">
        Trust. Excellence. Comfort.
      </h2>

      <p
        className="text-sm md:text-[15px] text-black/70 leading-relaxed max-w-3xl text-justify"
        style={{ textAlign: "justify", textJustify: "inter-word" }}
      >
        Throughout its 54+ year journey, RNK has consistently surpassed
        expectations and earned the confidence of India&apos;s most demanding
        travellers.
        <br /><br />
        The Group&apos;s clientele includes top business houses, entertainment 
        and event management companies, banks, multinationals, financial 
        institutions and diplomatic missions. Public sector organisations such 
        as the Protocol Division, Ministry of External Affairs – Media 
        Department and the Lok Sabha Secretariat&apos;s Protocol 1 have relied 
        on RNK&apos;s impeccable services for their most critical movements.
        <br /><br />
        Whether it&apos;s a seamless premium car rental, a high-stakes 
        delegation movement or a curated travel experience, RNK designs every 
        journey with the same pillars — trust, excellence and comfort.
      </p>
    </motion.div>

    {/* RIGHT – IMAGE SLIDES FROM RIGHT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      whileHover={{
        y: -6,
        boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
        scale: 1.02,
      }}
      className="relative rounded-3xl overflow-hidden border border-black/10 shadow-xl bg-black"
    >
      <motion.img
        src="/about.webp"
        alt="Premium chauffeured movements by RNK"
        className="w-full h-full object-cover max-h-[420px]"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      {/* Caption */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80">
        <div>
          <p className="uppercase tracking-[0.18em] text-white/60">
            Corporates · Events · Protocol
          </p>
          <p className="text-[11px] text-white/75 mt-1">
            Trusted by leading businesses, ministries and diplomatic missions.
          </p>
        </div>
        <span className="text-[10px] px-3 py-1 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
          RNK STANDARD
        </span>
      </div>
    </motion.div>

  </div>
</section>



      {/* -------------------------------- */}
      {/* CTA */}
      {/* -------------------------------- */}
      <section className="bg-black text-white py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Ready to plan your movement?
          </h3>
          <p className="text-white/70 max-w-xl mx-auto mt-3 text-sm md:text-base">
            Trust the RNK Group to deliver a seamless, comfortable and
            luxury-driven travel experience — whether it&apos;s one car or an
            entire movement grid.
          </p>

          
            <Link
  href="/contact"
  className="inline-block mt-8  items-center justify-center rounded-full
             bg-gradient-to-r from-[#C8102E] via-[#e0313f] to-[#8b0f24]
             px-4 py-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]
             text-white border border-white/10
             shadow-[0_14px_40px_rgba(200,16,46,0.65)]
             hover:shadow-[0_20px_55px_rgba(200,16,46,0.85)]
             hover:-translate-y-0.5 active:translate-y-0
             transition-all duration-300"
>
  Contact Us
</Link>
        </div>
      </section>
      <section>
        <RnkFooter></RnkFooter>
      </section>
    </main>
  );
}
