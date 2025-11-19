"use client";

export function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white overflow-hidden">

      {/* Background YouTube VIDEO */}
      <iframe
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        src="https://www.youtube.com/embed/UBV59CAgDEQ?autoplay=1&mute=1&controls=0&loop=1&playlist=UBV59CAgDEQ&modestbranding=1&showinfo=0&rel=0"
        title="RNK Rentals Video"
        allow="autoplay; encrypted-media; fullscreen"
      ></iframe>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" />

      {/* Soft red glow behind content */}
      <div className="hero-glow" />

      {/* CONTENT BLOCK (Left Only) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center">
        
        <p className="hero-sub-anim text-[11px] tracking-[0.35em] uppercase text-red-400 mb-3">
          RNK RENTALS · MUMBAI
        </p>

        <h1 className="hero-title-anim text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight max-w-2xl drop-shadow-[0_10px_26px_rgba(0,0,0,0.9)]">
          Drive <span className="text-red-500">Luxury</span>. Not Just a Car.
        </h1>

        <p className="hero-sub-anim mt-4 text-sm sm:text-base text-white/80 max-w-xl drop-shadow-[0_6px_18px_rgba(0,0,0,0.85)]">
          From corporate runs and airport transfers to VIP movements and
          weddings — RNK curates a car and chauffeur for every journey.
        </p>

        <div className="hero-cta-anim mt-8 flex flex-wrap gap-4">
          <a
            href="/book"
            className="px-7 py-3 rounded-full bg-red-900 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] hover:bg-red-900 transition-all shadow-[0_8px_30px_rgba(200,16,46,0.55)]"
          >
            Book Now
          </a>

          <a
            href="/fleet"
            className="px-7 py-3 rounded-full border border-white/40 text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] hover:bg-white hover:text-black transition-all"
          >
            View Fleet
          </a>
        </div>

        <p className="hero-sub-anim mt-4 text-[11px] text-white/60">
          24+ cars · Chauffeur & self-drive · 24/7 support
        </p>

      </div>
    </section>
  );
}
