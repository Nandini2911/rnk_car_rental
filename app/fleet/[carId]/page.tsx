"use client";

import { useEffect, useState, type FormEvent } from "react";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { getCarById, CATEGORIES } from "@/lib/fleet-data";
import { RnkFooter } from "@/components/footer";

// Optional: multi-image gallery per car (fill with your real paths)
const galleryImagesMap: Record<string, string[]> = {
  "rolls-royce": [
    "/Super Luxury Cars-1.webp",
    "/Super Luxury Cars-2.webp",
  ],
  "hummer": ["/Super Luxury Cars-2.webp"],
  "mb-s-class": ["/Luxury Cars-1.webp"],
  "mb-gls": ["/Luxury Cars-2.webp"],
  "mb-v-class": ["/Luxury Cars-3.webp"],
  "mb-gle": ["/Luxury Cars-4.webp"],
  "mb-e-class": ["/Luxury Cars-5.webp"],
  "toyota-camry": ["/Luxury Cars-6.webp"],
  "fortuner": ["/SUV_MUV-1.webp"],
  "hycross": ["/SUV_MUV-2.webp"],
  "innova-crysta": ["/SUV_MUV-3.webp"],
  "ciaz": ["/Sedan-1.webp"],
  "honda-city": ["/Sedan-2.webp"],
  "dzire": ["/Sedan-3.jpg"],
  "toyota-coaster": ["/Mini Vans-1.webp"],
  "toyota-commuter": ["/Mini Vans-2.webp"],
  "luxury-foton": ["/Mini Vans-3.webp"],
  "standard-foton": ["/Mini Vans-4.webp"],
  "urbania": ["/Mini Vans-5.webp"],
  "volvo-9600": ["/Coaches-1.webp"],
  "43-seater": ["/Coaches-2.webp"],
  "27-seater": ["/Coaches-3.webp"],
};

type SpecProps = {
  label: string;
  value: string;
};

function Spec({ label, value }: SpecProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{
        y: -6,
        boxShadow: "0 18px 40px rgba(200,16,46,0.45)",
      }}
      className="group relative overflow-hidden rounded-xl border border-white/10 
                 bg-black/30 px-4 py-3 backdrop-blur-sm transition-all duration-300 
                 group-hover:border-[#C8102E]/70 group-hover:bg-black/60"
    >
      {/* Metallic sheen */}
      <div
        className="pointer-events-none absolute -inset-y-10 -inset-x-10 
                   bg-linear-to-r from-transparent via-white/12 to-transparent 
                   opacity-0 -translate-x-full 
                   group-hover:opacity-100 group-hover:translate-x-full
                   transition-all duration-700"
      />

      {/* Red glow accent */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br 
                      from-[#C8102E]/15 via-transparent to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 
                      group-hover:text-[#C8102E]/90 transition duration-300 mb-1">
          {label}
        </p>

        <p className="text-sm font-medium text-white transition duration-300">
          {value}
        </p>
      </div>
    </motion.div>
  );
}

export default function CarDetailPage() {
  const params = useParams();
  const carId = params?.carId as string;

  const car = getCarById(carId);
    // ---------- Enquiry form state + handler ----------
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      mobileNumber: formData.get("mobile"),      // matches name="mobile"
      startDate: formData.get("startDate"),
      passengers: formData.get("passengers"),
      pickupCity: formData.get("pickupCity"),
      vehicle: formData.get("vehicle"),         // readOnly car.name field
    };

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMessage("Thank you. Our team will get in touch with you shortly.");
        form.reset();
      } else {
        setMessage("Something went wrong. Please try again in a moment.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Unable to send right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // --------------------------------------------------


  // Build gallery images: use mapped set, fall back to single main image
  const galleryImages =
    (car && galleryImagesMap[car.id]) || (car?.image ? [car.image] : []);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when car changes
  useEffect(() => {
    if (!galleryImages.length) return;
    setCurrentIndex(0);
  }, [carId, galleryImages.length]);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!galleryImages.length) return;

    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(id);
  }, [galleryImages.length]);

  const goPrev = () => {
    if (!galleryImages.length) return;
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goNext = () => {
    if (!galleryImages.length) return;
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Fallback if car not found
  if (!car) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-4">
        <div className="text-center space-y-3">
          <p className="text-sm text-white/60 tracking-[0.28em] uppercase">
            RNK · Fleet
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold">
            Vehicle not found
          </h1>
          <p className="text-sm md:text-[15px] text-white/65 max-w-md mx-auto">
            This vehicle is not part of the active RNK fleet listing. Please go
            back to the fleet page to view available options.
          </p>
          <Link
            href="/fleet"
            className="inline-flex items-center rounded-full border border-white/30 px-5 py-2 text-[11px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition mt-2"
          >
            Back to Fleet
          </Link>
        </div>
      </main>
    );
  }

  const category = CATEGORIES.find((c) => c.id === car.category);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-screen border-b border-white/10 overflow-hidden flex items-center">
        {car.image && (
          <motion.img
            src={car.image}
            alt={car.name}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1.06, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
        )}

        <div className="absolute inset-0 bg-linear-to-b from-black/85 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          {/* Breadcrumb */}
          <div className="text-xs md:text-sm text-white/60 mb-3">
            <Link href="/" className="hover:text-[#C8102E] transition">
              Home
            </Link>
            <span className="mx-2 text-white/40">||</span>
            <Link href="/fleet" className="hover:text-[#C8102E] transition">
              Fleet
            </Link>
            <span className="mx-2 text-white/40">||</span>
            <span className="text-white/80">{car.name}</span>
          </div>

          <div className="max-w-2xl space-y-3">
            {category && (
              <p className="text-[11px] tracking-[0.28em] uppercase text-[#C8102E]/80">
                {category.label}
              </p>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
              {car.name}
            </h1>

            <p className="text-sm md:text-[15px] text-white/75 max-w-lg">
              Chauffeur-driven, well-maintained and ready for corporate
              movements, weddings, airport runs and high-touch events across
              India.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {/* PRIMARY – Book This Car (RNK red gradient) */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full 
                           bg-linear-to-r from-[#C8102E] via-[#e0313f] to-[#8b0f24]
                           px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em]
                           text-white border border-white/10
                           shadow-[0_14px_40px_rgba(200,16,46,0.65)]
                           hover:shadow-[0_20px_55px_rgba(200,16,46,0.85)]
                           hover:-translate-y-0.5 active:translate-y-0
                           transition-all duration-300"
              >
                Book This Car
              </Link>

              {/* SECONDARY – Back to Fleet */}
              <Link
                href="/fleet"
                className="inline-flex items-center justify-center rounded-full 
                           border border-white/30 bg-white/0
                           px-5 py-2 text-[11px] uppercase tracking-[0.2em]
                           text-white/80 hover:text-white
                           hover:border-[#C8102E] hover:bg-[#C8102E]/10
                           hover:shadow-[0_12px_35px_rgba(200,16,46,0.55)]
                           hover:-translate-y-0.5 active:translate-y-0
                           transition-all duration-300"
              >
                Back to Fleet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS SECTION – DARK RED/BLACK THEME */}
      <section className="bg-black text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* LEFT SIDE – SPECS */}
            <div className="md:col-span-2 space-y-5">
              <h2 className="text-xl md:text-2xl font-semibold mb-1">
                Vehicle Specifications
              </h2>

              <p className="text-sm md:text-[15px] text-white/60 max-w-xl">
                Exact model, variant and interior configuration may vary slightly
                depending on availability and city, while maintaining the same
                comfort and experience bracket.
              </p>

              {/* SPECS CARDS */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
                <Spec label="Category" value={category?.label ?? "—"} />
                <Spec label="Seating Capacity" value={car.seating} />
                <Spec label="Doors" value={car.doors} />
                <Spec label="Luggage Capacity" value={car.luggage} />
                <Spec label="Chauffeur" value="Included" />
                <Spec label="Fuel Type" value="On request" />
              </div>
            </div>

            {/* RIGHT SIDE – BOOKING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
              whileHover={{
                y: -6,
                boxShadow: "0 18px 40px rgba(200,16,46,0.35)",
              }}
              className="relative overflow-hidden rounded-2xl border border-[#C8102E]/30 bg-[#C8102E]/10 p-6 text-sm md:text-[14px] text-white/80 backdrop-blur-sm transition"
            >
              {/* Soft red gradient overlay */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#C8102E]/18 via-transparent to-black/60" />

              <div className="relative space-y-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8102E] mb-1">
                  Booking & Movement
                </p>

                <p>
                  Share your route, timings and guest profile — our team will
                  confirm availability, city-specific pricing and a tailored
                  movement plan for this vehicle.
                </p>

                <p className="text-[13px] text-white/65">
                  For multiple cars, mixed fleets or outstation itineraries,
                  mention this model as your preferred choice in the enquiry
                  form.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ENQUIRY FORM SECTION – DARK WITH SLIDER */}
      <section className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* LEFT SIDE – TEXT + IMAGE SLIDER */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                Submit Your Enquiry
              </h2>
              <p className="text-sm md:text-[15px] text-white/70 max-w-md">
                Share your basic details and our RNK team will get in touch with
                a curated quote and movement plan for the{" "}
                <span className="font-medium">{car.name}</span>.
              </p>

              {/* SLIDER UNDER TEXT – uses same galleryImages + currentIndex */}
              {galleryImages.length > 0 && (
                <div className="mt-6 relative max-w-xl">
                  <motion.div
                    key={galleryImages[currentIndex]}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="overflow-hidden rounded-2xl border border-white/15 bg-white/5"
                  >
                    <img
                      src={galleryImages[currentIndex]}
                      alt={`${car.name} enquiry view ${currentIndex + 1}`}
                      className="w-full h-64 sm:h-72 md:h-[360px] lg:h-[400px] object-cover"
                    />
                  </motion.div>

                  {/* Left arrow */}
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center 
                               rounded-full border border-white/40 bg-black/70 text-white text-lg 
                               backdrop-blur-sm 
                               hover:bg-linear-to-r hover:from-[#C8102E] hover:to-[#8b0f24]
                               hover:border-[#C8102E]
                               hover:shadow-[0_12px_35px_rgba(200,16,46,0.65)]
                               transition-all duration-300"
                  >
                    ‹
                  </button>

                  {/* Right arrow */}
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center 
                               rounded-full border border-white/40 bg-black/70 text-white text-lg 
                               backdrop-blur-sm 
                               hover:bg-linear-to-r hover:from-[#C8102E] hover:to-[#8b0f24]
                               hover:border-[#C8102E]
                               hover:shadow-[0_12px_35px_rgba(200,16,46,0.65)]
                               transition-all duration-300"
                  >
                    ›
                  </button>

                  {/* Dots */}
                  <div className="mt-3 flex items-center justify-center gap-2">
                    {galleryImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          idx === currentIndex
                            ? "w-5 bg-[#C8102E]"
                            : "w-2 bg-white/35 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT SIDE – FORM */}
           <form
  className="h-full flex flex-col justify-between space-y-4 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-md p-5 md:p-6 shadow-xl"
  onSubmit={handleSubmit}
>

              {/* FormSubmit config */}
              <input type="hidden" name="_subject" value="New RNK Car Enquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                  Full Name<span className="text-[#C8102E]">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full Name"
                  className="w-full rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
                />
              </div>

              {/* Email & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    Email<span className="text-[#C8102E]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter Email"
                    className="w-full rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    Mobile Number<span className="text-[#C8102E]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    placeholder="Mobile Number"
                    className="w-full rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
                  />
                </div>
              </div>

              {/* Start Date & Passengers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    Start Date<span className="text-[#C8102E]">*</span>
                  </label>
                  <input
                    type="date"
                    name="startDate"
                    required
                    className="w-full rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    Number of Passengers<span className="text-[#C8102E]">*</span>
                  </label>
                  <input
                    type="number"
                    name="passengers"
                    min={1}
                    required
                    placeholder="Number of Passengers"
                    className="w-full rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
                  />
                </div>
              </div>

              {/* Pickup City & Vehicle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    Pickup City<span className="text-[#C8102E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="pickupCity"
                    required
                    placeholder="Select City"
                    className="w-full rounded-md border border-white/15 bg-white px-3 py-2 text-sm text-black placeholder-black/40 focus:outline-none focus:ring-1 focus:ring-[#C8102E] focus:border-[#C8102E]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    Vehicle<span className="text-[#C8102E]">*</span>
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    readOnly
                    value={car.name}
                    className="w-full rounded-md border border-white/15 bg-black/40 px-3 py-2 text-sm text-white"
                  />
                </div>
              </div>

              {/* Submit */}
            {/* Submit */}
<div className="pt-2">
  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full md:w-auto inline-flex items-center justify-center 
               rounded-full bg-linear-to-r from-[#C8102E] via-[#e0313f] to-[#8b0f24]
               px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em]
               text-white shadow-[0_14px_40px_rgba(200,16,46,0.7)]
               hover:shadow-[0_20px_55px_rgba(200,16,46,0.9)]
               hover:-translate-y-0.5 active:translate-y-0
               transition-all duration-300 disabled:opacity-50"
  >
    {isSubmitting ? "Sending..." : "Submit your enquiry"}
  </button>

  {/* SUCCESS / ERROR MESSAGE GOES HERE */}
  {message && (
    <p className="mt-2 text-xs text-white/70">
      {message}
    </p>
  )}
</div>

            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section>
        <RnkFooter />
      </section>
    </main>
  );
}
