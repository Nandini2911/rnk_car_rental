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
      "When you rent a chauffeur-driven luxury car, you don't have to worry about driving and navigating through unfamiliar roads or traffic. A professional chauffeur handles everything, so you can relax, work or simply enjoy the ride.",
    direction: "left",
  },
  {
    title: "GPS-enabled",
    description:
      "A GPS-enabled luxury car makes navigation in unknown locations effortless. It’s especially helpful when you're travelling to a new city and need to move quickly and efficiently. GPS tracking also helps maintain passenger security.",
    direction: "right",
  },
  {
    title: "Security",
    description:
      "A secure luxury car prioritises your safety with well-maintained, reliable vehicles and verified chauffeurs. You enjoy peace of mind knowing you'll arrive at your destination safely and on time.",
    direction: "up",
  },
  {
    title: "Comfort fit for VIPs",
    description:
      "Plush seating, climate control and advanced sound systems make every journey comfortable, quiet and refined — perfectly suited for VIPs, executives and special guests.",
    direction: "diagonal-left",
  },
  {
    title: "Extensive fleet of luxury cars",
    description:
      "From BMW, Audi and Mercedes to premium SUVs and sedans, RNK’s extensive fleet lets you choose a car that perfectly matches your occasion, profile and comfort preference.",
    direction: "diagonal-right",
  },
  {
    title: "24/7 support on call",
    description:
      "Round-the-clock on-call support ensures you get immediate assistance, quick resolutions and uninterrupted travel — no matter what time your journey begins or ends.",
    direction: "up-soft",
  },
];

export default function CorporateCarRentalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ======================= HERO WITH IMAGE ======================= */}
      <section className="relative w-full h-[70vh] md:h-[80vh] border-b border-white/10 overflow-hidden">
        {/* Background Image */}
        <motion.img
          src="/about.webp" // 👉 put your image file here
          alt="Corporate Car Rental RNK"
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
            / <span className="text-[#A72740]">Corporate Car Rental</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-white"
          >
            Corporate Car Rental
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-4 max-w-2xl text-white/80 text-sm md:text-[15px]"
          >
            Premium, punctual and professionally managed corporate mobility designed
            for executives, teams, clients and VIP movements.
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
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#A72740] mb-2">
              Travel in Style
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-4">
              Travel in style with our{" "}
              <span className="font-semibold">
                premium local car rental services.
              </span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/80 mb-3 leading-relaxed">
              At RNK – Ramniranjan Kedia Group, we strive to make your experience of
              renting a car unforgettable. You will experience quality with every ride.
            </p>

            <p className="text-sm md:text-[15px] text-black/75 mb-5 leading-relaxed">
              Make the most of your ride with comfort and panache. Chauffeur-driven cars
              offer a chance for you to prioritise your work without worrying about
              traffic, routes and time.
            </p>

            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="rounded-xl p-5 md:p-6 border border-[#A72740]/20
                 bg-gradient-to-br from-[#ffccd5]/40 via-[#ffdde6]/30 to-[#ffe6ee]/40
                 shadow-[0_10px_30px_rgba(167,39,64,0.18)]"
            >
              <h3 className="text-sm font-semibold text-[#A72740] mb-2 tracking-wide">
                Our Special Services
              </h3>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed mb-3">
                Find the car of your dreams! Why go for anything less than perfect when
                you can choose from our extensive fleet of luxury cars available in
                170+ cities across India. The cars are well-maintained and cleaned
                for ultimate comfort.
              </p>

              <p className="text-xs md:text-[13px] text-black/75 leading-relaxed">
                From eight-seater vans to luxury Volvo buses, to luxury sedans, SUVs
                and more — our services accommodate large groups of people and ensure
                that their travelling experience remains comfortable from start to finish.
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
                src="/about.webp" // 👉 change to your actual image path
                alt="Corporate chauffeur-driven car by RNK"
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
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-light mb-4 text-white"
          >
            Luxury rental car services of your{" "}
            <span className="font-semibold text-[#A72740]">choice</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm md:text-[15px] leading-relaxed mb-4 text-white/85"
          >
            Renting a luxury car for local travel isn’t just transportation —{" "}
            <span className="text-[#A72740] font-medium">
              it’s an elevated experience.
            </span>{" "}
            Whether you’re marking a special occasion, attending a corporate event,
            hosting global guests or indulging in premium comfort, RNK ensures every
            journey feels premium, polished and unforgettable.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm md:text-[15px] leading-relaxed mb-4 text-white/80"
          >
            Our fleet includes chauffeur-driven sedans, SUVs and luxury cars — each
            maintained with{" "}
            <span className="text-[#A72740] font-medium">
              precision, hygiene and detailing
            </span>{" "}
            to ensure a peaceful and comfortable ride every single time.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="text-sm md:text-[15px] leading-relaxed text-white/90 font-medium"
          >
            Your comfort. Your style.{" "}
            <span className="text-[#A72740] font-semibold">
              Your luxury journey begins with RNK.
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
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#A72740] mb-2">
              Why RNK?
            </p>
            <h2 className="text-xl md:text-2xl font-light mb-3">
              If luxury is what you are looking for,{" "}
              <span className="font-semibold text-[#A72740]">
                you’re at the right place.
              </span>
            </h2>
            <p className="max-w-2xl text-sm md:text-[15px] text-black/70">
              RNK offers much more than just premium cars. Every journey is designed
              around comfort, safety, reliability and a truly elevated travel
              experience. Here’s why guests and corporates choose our services:
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
                  {/* subtle brand top border accent */}
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#A72740] via-[#A72740] to-[#A72740]/70 opacity-70" />

                  <div className="flex items-start gap-3 mb-3">
                    <h3 className="text-sm md:text-[15px] font-semibold text-[#A72740]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-[13px] text-black/70 leading-relaxed">
                    {item.description}
                  </p>

                  {/* hover glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-40%] bg-gradient-to-br from-[#A72740]/4 via-transparent to-[#A72740]/10" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================= SECTION 2 — Corporate Solutions (DARK PREMIUM) ======================= */}
      <section className="relative bg-black text-white py-16 md:py-20 border-b border-white/10 overflow-hidden">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -top-40 -left-32 h-72 w-72 rounded-full bg-[#A72740]/18 blur-3xl" />
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
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#A72740] mb-2">
                Corporate Solutions
              </p>
              <h2 className="text-xl md:text-2xl font-light">
                Designed to support{" "}
                <span className="font-semibold">every corporate need.</span>
              </h2>
            </div>
            <p className="max-w-md text-xs md:text-[13px] text.white/70 md:text-white/70 leading-relaxed">
              From daily executive commutes to VIP convoys and long-term contracts, RNK
              builds mobility plans that match how your teams actually travel.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              "Executive office commute",
              "Client pick-ups & drop-offs",
              "Airport & railway transfers",
              "Meetings and site visits",
              "Intercity corporate travel",
              "VIP & delegation movements",
              "Long-term company contracts",
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
                             px-4 py-4 md:px-5 md:py-5
                             shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                             overflow-hidden"
                >
                  {/* brand accent strip */}
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#A72740] via-white/40 to-[#A72740] opacity-80" />

                  <div className="flex items-start gap-3">
                    <p className="text-xs md:text-[13px] text-white/80 leading-relaxed">
                      {item}
                    </p>
                  </div>

                  {/* hover glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-[-40%] bg-gradient-to-br from-[#A72740]/10 via-transparent to-white/8" />
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
            <p className="text-[20px] uppercase tracking-[0.25em] text-[#A72740] mb-3 font-bold">
              Our Presence
            </p>

            <h2 className="text-xl md:text-2xl font-light mb-3">
              RNK: Luxury Car Rental Services Across{" "}
              <span className="font-semibold">Various Cities in India</span>
            </h2>

            <p className="text-sm md:text-[15px] text-black/70 max-w-3xl mx-auto leading-relaxed">
              RNK offers premium luxury car rental services across various cities in
              India, ensuring comfort, style, and convenience wherever you travel.
            </p>
          </motion.div>

          {/* Cards Grid */}
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
      className="group relative  overflow-hidden
                 border border-black/5
                 bg-transparent
                 h-64 md:h-64 cursor-pointer"
    >
      {/* BG Image – crystal clear, no overlay, no shadow */}
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

      {/* Hover text – fully transparent background, just text sliding up */}
      <div
        className="absolute inset-0 flex items-center justify-center
                   translate-y-full group-hover:translate-y-0
                   transition-all duration-500 ease-out p-6 text-center"
      >
        <p className="text-white text-xs md:text-sm leading-relaxed tracking-wide">
          Luxury Car Rental – {city}. Premium chauffeur-driven services for
          business, leisure, and events.
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
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#A72740] mb-3">
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
                "Is corporate car rental better than cabs?",
                "Yes. You get a predictable, chauffeur-driven premium service without wait times.",
              ],
              [
                "Do you offer monthly corporate contracts?",
                "Yes, we offer monthly and yearly leasing options for companies.",
              ],
              [
                "Is billing GST supported?",
                "Yes, all invoices are GST compliant with monthly statements.",
              ],
              [
                "Are chauffeurs trained for VIP movements?",
                "All chauffeurs are trained in etiquette, safety and corporate protocol.",
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
                    <span className="text-[15px] font-medium text-white/90">
                      {q}
                    </span>

                    {/* UNIQUE CHEVRON ARROW */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/60 text-2xl leading-none"
                    >
                      ⌄
                    </motion.span>
                  </button>

                  {/* BRAND ACCENT */}
                  {isOpen && (
                    <div className="h-0.5 bg-gradient-to-r from-[#A72740] to-transparent mx-5" />
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

      <section className="bg-white text-black py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs text-black/60 leading-relaxed">
            RNK Rent A Car offers premium chauffeur-driven travel solutions across India.
            With a modern fleet, trained chauffeurs and 24/7 support, we ensure seamless,
            comfortable and stylish journeys for corporate, leisure, wedding and VIP
            clients.
          </p>
        </div>
      </section>

      {/* ======================= SECTION 5 — Final CTA ======================= */}
      <section className="bg-black text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-2xl font-light mb-4"
          >
            Experience luxury, comfort & reliability — every time.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-sm text-white/70 max-w-xl mx-auto mb-8"
          >
            Book a chauffeur-driven premium vehicle for your next trip. Our fleet, service
            quality, and trained chauffeurs deliver world-class travel experiences.
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-3 rounded-full bg-[#A72740] text-white
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
