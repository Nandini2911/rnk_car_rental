"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function slugifyCity(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

type City = {
  name: string;
  isMetro?: boolean;
};

const CITIES: City[] = [
  { name: "Bengaluru", isMetro: true },
  { name: "Chennai", isMetro: true },
  { name: "Mumbai", isMetro: true },
  { name: "Lucknow" },
  { name: "Hyderabad", isMetro: true },
  { name: "Kolkata", isMetro: true },
  { name: "Ahmedabad" },
  { name: "Bhopal" },
  { name: "Surat" },
  { name: "Nagpur" },
  { name: "Chandigarh" },
  { name: "Madurai" },
  { name: "Visakhapatnam" },
  { name: "Jamshedpur" },
  { name: "Jaipur" },
  { name: "Pune" },
  { name: "Kanpur" },
  { name: "Agra" },
  { name: "Indore" },
  { name: "Jodhpur" },
  { name: "Amritsar" },
  { name: "Patna" },
  { name: "Ludhiana" },
  { name: "Raipur" },
  { name: "Kochi" },
  { name: "Chhatrapati Sambhajinagar" },
  { name: "Bhubaneswar" },
  { name: "Vijayawada" },
  { name: "Kota" },
  { name: "Vadodara" },
  { name: "Nashik" },
  { name: "Thiruvananthapuram" },
  { name: "Varanasi" },
  { name: "Ranchi" },
  { name: "Dhanbad" },
  { name: "Meerut" },
  { name: "Gwalior" },
  { name: "Faridabad" },
  { name: "Udaipur" },
  { name: "Mysuru" },
  { name: "Prayagraj" },
  { name: "Jabalpur" },
  { name: "Guwahati" },
  { name: "Rajkot" },
  { name: "Coimbatore" },
  { name: "New Delhi" },
  { name: "Bikaner" },
  { name: "Dehradun" },
  { name: "Hubli-Dharwad" },
  { name: "Salem" },
  { name: "Aligarh" },
];

const FILTERS = [
  { id: "all", label: "All Cities" },
  { id: "metros", label: "Top Metros" },
  { id: "tier", label: "Key Business & Leisure Hubs" },
];

// helper: generate background image path per city
function getCityBg(city: City) {
  const slug = city.name
    .toLowerCase()
    .replace(/\s+/g, "-") // spaces → hyphen
    .replace(/[^a-z0-9-]/g, ""); // remove special chars

  return `/bg/${slug}.webp`;
}

export default function OurNetworkPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [expandedCity, setExpandedCity] = useState<string | null>(null);

  const filteredCities = useMemo(() => {
    let list = [...CITIES];

    if (activeFilter === "metros") {
      list = list.filter((c) => c.isMetro);
    } else if (activeFilter === "tier") {
      list = list.filter(
        (c) =>
          c.isMetro ||
          ["Pune", "Surat", "Jaipur", "Vadodara", "Indore", "Kochi"].includes(
            c.name
          )
      );
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }

    return list;
  }, [activeFilter, search]);

  const handleToggle = (name: string) => {
    setExpandedCity((prev) => (prev === name ? null : name));
  };

  return (
    <main
      className="min-h-screen  text-white"
 
    >
      {/* -------------------------------- */}
      {/* HERO / HEADER */}
      {/* -------------------------------- */}
      <section className="relative border-b border-white/10 min-h-[70vh]">
  {/* BG IMAGE – SLIDE IN, NO BLUR */}
  <motion.img
    src="/about.webp" // in /public
    alt="RNK pan-India network"
    className="absolute inset-0 h-full w-full object-cover"
    initial={{ x: 60, opacity: 0, scale: 1.05 }}
    animate={{ x: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
  />

  {/* Simple dark overlay (no blur) */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/75 to-black/90" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
    {/* Breadcrumb */}
    <motion.div
      className="mb-6 text-xs uppercase tracking-[0.22em] text-white/60 flex items-center gap-2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
    >
      <Link href="/" className="hover:text-white/90">
        Home
      </Link>
      <span className="text-white/40">•</span>
      <span className="text-[#C8102E]">Our Network</span>
    </motion.div>

    <div className="flex flex-col gap-8 md:gap-10">
      {/* Copy block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        className="max-w-3xl"
      >
        <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-3">
          Pan-India Presence
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          A single number,{" "}
          <span className="text-[#C8102E]">a national network.</span>
        </h1>
        <p className="mt-4 text-sm md:text-[15px] text-white/70 leading-relaxed">
          From early-morning airport pickups to late-night post-event drop-offs,
          RNK&apos;s fleet moves seamlessly across India&apos;s key cities.
          Every route is vetted, every chauffeur is trained, and every ride is
          designed to feel like an upgrade from the usual.
        </p>
      </motion.div>

      {/* Stats strip – NO backdrop blur here now */}
      <motion.div
        className="grid gap-4 md:grid-cols-3 max-w-4xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
      >
        <div className="rounded-2xl border border-white/12 bg-black/60 px-4 py-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 mb-1">
            Cities covered
          </p>
          <p className="text-2xl font-semibold">
            {CITIES.length}
            <span className="text-sm font-normal text-white/60 ml-1">+</span>
          </p>
          <p className="mt-1 text-[11px] text-white/55">
            Major metros, business hubs and growing leisure cities.
          </p>
        </div>

        <div className="rounded-2xl border border-white/12 bg-black/60 px-4 py-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 mb-1">
            Service Type
          </p>
          <p className="text-sm leading-snug text-white/85">
            Corporate, weddings, leisure &amp; VIP movements.
          </p>
          <p className="mt-1 text-[11px] text-white/55">
            One fleet language tailored to different journeys.
          </p>
        </div>

        <div className="rounded-2xl border border-[#C8102E]/50 bg-[#C8102E]/30 px-4 py-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#F6CED6] mb-1">
            Always On
          </p>
          <p className="text-sm text-white/90">
            24x7 support &amp; uniform RNK SOPs across cities.
          </p>
          <p className="mt-1 text-[11px] text-white/75">
            Land anywhere, step into a familiar RNK experience.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>


{/* -------------------------------- */}
{/* NEW OVERVIEW / VALUE SECTION */}
{/* -------------------------------- */}
<section className="bg-white text-black border-b border-black/10">
  <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[minmax(0,2.2fr)_minmax(0,2.5fr)] items-start">
    
    {/* Left copy block */}
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-3">
        More than just coverage
      </p>

      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-black">
        One fleet language,{" "}
        <span className="text-[#C8102E]">spoken in every city.</span>
      </h2>

      <p className="mt-4 text-sm md:text-[15px] text-black/70 leading-relaxed max-w-xl">
        Whether it&apos;s a board meeting in Mumbai, a wedding in Jaipur
        or an artist arrival in Guwahati, RNK operates like a single,
        well-rehearsed team. Your guests experience the same greeting,
        the same car standards and the same quiet efficiency—no matter
        where their pin drops.
      </p>

      <p className="mt-3 text-sm md:text-[14px] text-black/60 leading-relaxed max-w-xl">
        For you, that means one contact, one consolidated itinerary, and
        a network that simply plugs into your plan instead of complicating it.
      </p>
    </motion.div>

    {/* Right feature row */}
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
      className="grid gap-4 sm:grid-cols-3"
    >
      {/* Card 1 */}
      <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-black/60 mb-2">
            For corporates
          </p>
          <p className="text-sm font-medium text-black">
            Pan-India roadshows without juggling multiple vendors.
          </p>
        </div>
        <p className="mt-3 text-[11px] text-black/60">
          Centralised billing, uniform chauffeur training and airport
          coverage in all major business hubs.
        </p>
      </div>

      {/* Card 2 */}
      <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-black/60 mb-2">
            For weddings
          </p>
          <p className="text-sm font-medium text-black">
            Guests flying in from everywhere, handled in one place.
          </p>
        </div>
        <p className="mt-3 text-[11px] text-black/60">
          Coordinated airport runs, hotel shuttles and VIP movement
          across cities for multi-location celebrations.
        </p>
      </div>

      {/* Card 3 */}
      <div className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 flex flex-col justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.22em] text-black/60 mb-2">
            For individuals
          </p>
          <p className="text-sm font-medium text-black">
            Land, sit back, recognise the RNK experience instantly.
          </p>
        </div>
        <p className="mt-3 text-[11px] text-black/60">
          From solo travellers to families, enjoy the same premium feel
          you&apos;re used to—city after city.
        </p>
      </div>
    </motion.div>
  </div>
</section>
      {/* -------------------------------- */}
      {/* FILTERS + SEARCH */}
      {/* -------------------------------- */}
      <section className="border-b border-white/10 bg-black/95">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs md:text-[13px] transition-all ${
                    isActive
                      ? "border-[#C8102E] bg-[#C8102E] text-white shadow-[0_0_25px_rgba(200,16,46,0.4)]"
                      : "border-white/15 bg-white/[0.02] text-white/70 hover:border-white/40"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="w-full md:w-auto">
            <div className="relative max-w-xs md:max-w-sm ml-auto">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-xs text-white/40">
                🔍
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search city…"
                className="w-full rounded-full border border-white/15 bg-white/[0.02] py-2.5 pl-8 pr-3 text-xs md:text-[13px] text-white placeholder:text-white/35 outline-none focus:border-[#C8102E] focus:ring-1 focus:ring-[#C8102E]"
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* -------------------------------- */}
      {/* CITY GRID */}
      {/* -------------------------------- */}
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <div className="flex items-center justify-between gap-4 mb-6">
            <p className="text-xs md:text-[13px] text-white/60">
              Showing{" "}
              <span className="text-white">
                {filteredCities.length} city
                {filteredCities.length !== 1 ? " entries" : ""}
              </span>{" "}
              from RNK&apos;s India network.
            </p>
            <p className="hidden md:block text-[11px] uppercase tracking-[0.18em] text-white/40">
              Scroll • Tap a city • Expand details
            </p>
          </div>

          {filteredCities.length === 0 ? (
            <p className="text-sm text-white/60">
              No cities match your search yet. Try a different name.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {filteredCities.map((city, index) => {
                const isOpen = expandedCity === city.name;
                const bg = getCityBg(city);

                return (
                  <motion.div
                    key={city.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                      delay: index * 0.02,
                    }}
                    style={{
                      backgroundImage: `url('${bg}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                    className="group relative overflow-hidden rounded-2xl border border:white/10 hover:border-[#C8102E]/70 hover:shadow-[0_0_30px_rgba(200,16,46,0.35)] transition-all h-[280px] flex flex-col"
                  >
                    {/* dark overlay only */}
                    <div className="pointer-events-none absolute inset-0 bg-black/45" />

                    {/* CONTENT WRAPPER */}
                    <div className="relative z-10 flex flex-col h-full px-4 pb-4 pt-3 text-[12px] md:text-[13px] text-white/85">
                      {/* Card header */}
                      <button
                        onClick={() => handleToggle(city.name)}
                        className="flex w-full items-center justify-between gap-3 mb-2"
                      >
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-2">
                            <h2 className="text-sm md:text-[15px] font-medium tracking-tight">
                              {city.name}
                            </h2>
                            {city.isMetro && (
                              <span className="rounded-full border border-[#C8102E]/50 bg-[#C8102E]/15 px-2 py-[2px] text-[10px] uppercase tracking-[0.18em] text-[#C8102E]">
                                Metro
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Arrow / indicator */}
                        <motion.div
                          animate={{ rotate: isOpen ? 90 : 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-[10px] text-white/70 group-hover:border-[#C8102E]/70 group-hover:text-[#C8102E]"
                        >
                          ➜
                        </motion.div>
                      </button>

                      {/* Expandable content area – scroll only when open, scrollbar hidden */}
                      <div
                        className={
                          "flex-1 pr-1 " +
                          (isOpen
                            ? "overflow-y-scroll no-scrollbar"
                            : "overflow-hidden")
                        }
                      >
                        <motion.div
                          initial={false}
                          animate={
                            isOpen
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 8 }
                          }
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="space-y-2.5 h-full"
                        >
                          {isOpen && (
                            <>
                              <p className="leading-relaxed text-white/80">
                                RNK offers a full-suite premium car rental
                                service in{" "}
                                <span className="font-medium">
                                  {city.name}
                                </span>{" "}
                                — from corporate movements and airport
                                transfers to wedding logistics and VIP
                                chauffeuring.
                              </p>
                              <p className="text-white/70 leading-relaxed">
                                Every route is pre-mapped, chauffeurs follow RNK
                                SOPs, and the same fleet standards are
                                maintained across cities so your experience
                                feels familiar, reliable, and luxuriously
                                predictable.
                              </p>
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                <span className="rounded-full border border-white/25 bg:white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/85">
                                  Airport Pickups &amp; Drops
                                </span>
                                <span className="rounded-full border border-white/25 bg:white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/85">
                                  Corporate Travel
                                </span>
                                <span className="rounded-full border border-white/25 bg:white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/85">
                                  Weddings &amp; Social Events
                                </span>
                                <span className="rounded-full border border-white/25 bg:white/[0.08] px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/85">
                                  City &amp; Outstation
                                </span>
                              </div>
                            </>
                          )}
                        </motion.div>
                      </div>


                      {/* Explore button – bottom center */}
                      <div className="mt-auto pt-3 flex justify-center">
 <Link
  href={`/city/${slugifyCity(city.name)}`}
  className="inline-flex items-center justify-center rounded-full 
     bg-gradient-to-r from-[#C8102E] via-[#e0313f] to-[#8b0f24]
     px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.22em]
     text-white border border-white/10
     shadow-[0_14px_40px_rgba(200,16,46,0.65)]
     hover:shadow-[0_20px_55px_rgba(200,16,46,0.85)]
     hover:-translate-y-0.5 active:translate-y-0
     transition-all duration-300"
>
  Explore this city
</Link>
</div>

                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
{/* -------------------------------- */}
{/* CTA STRIP – WHITE VERSION */}
{/* -------------------------------- */}
<section className="border-t border-black/10 bg-white text-black">
  <div className="max-w-7xl mx-auto px-6 py-12 md:py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    
    {/* Left content */}
    <div>
      <p className="text-[11px] uppercase tracking-[0.24em] text-[#C8102E] mb-2">
        Need multi-city movement?
      </p>

      <h2 className="text-lg md:text-xl font-semibold tracking-tight mb-2 text-black">
        One itinerary. One fleet partner. All your cities, sorted.
      </h2>

      <p className="text-sm text-black/70 max-w-xl leading-relaxed">
        Plan a corporate roadshow, a destination wedding, or a VIP India
        tour with RNK as your single command centre. Our team coordinates
        cars, chauffeurs and timing across cities so your guests only
        remember how effortless it felt.
      </p>
    </div>

    {/* CTA Buttons */}
    <div className="flex flex-wrap gap-3">
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-full 
        border border-[#C8102E] bg-[#C8102E] 
        px-5 py-2.5 text-xs md:text-[13px] font-medium uppercase tracking-[0.16em]
        text-white shadow-[0_0_24px_rgba(200,16,46,0.35)]
        hover:bg-[#a00c22] hover:shadow-[0_0_30px_rgba(200,16,46,0.45)]
        transition-all"
      >
        Talk to our team
      </Link>

      <Link
        href="/book-now"
        className="inline-flex items-center justify-center rounded-full 
        border border-black/20 bg-black/5 
        px-5 py-2.5 text-xs md:text-[13px] font-medium uppercase tracking-[0.16em]
        text-black/80 hover:bg-black/10 hover:border-black/40
        transition-all"
      >
        Book a ride
      </Link>
    </div>

  </div>
</section>

    </main>
  );
}
