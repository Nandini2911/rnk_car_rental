"use client";

import { AnimatedSection } from "./AnimatedSection";

export function ContactSection() {
  return (
    <AnimatedSection id="contact">
      <section className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <p className="text-xs tracking-[0.35em] text-red-500 uppercase mb-3">
          CONTACT
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Tell us how you move. We’ll plan the rest.
        </h2>

        <div className="grid gap-10 md:grid-cols-[1.2fr,1fr]">
          {/* FORM BLOCK */}
          <form className="grid gap-4 text-sm">
            <div>
              <label className="block mb-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                Name
              </label>
              <input
                className="w-full rounded-xl bg-white/5 border border-white/15 px-3 py-2 outline-none text-sm"
                placeholder="Full name"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Email
                </label>
                <input
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-3 py-2 outline-none text-sm"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block mb-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                  Phone
                </label>
                <input
                  className="w-full rounded-xl bg-white/5 border border-white/15 px-3 py-2 outline-none text-sm"
                  placeholder="+91 ..."
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                Requirement
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl bg-white/5 border border-white/15 px-3 py-2 outline-none text-sm resize-none"
                placeholder="Dates, cities, type of cars, approx. hours or km..."
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-red-900 px-6 py-2.5 text-xs md:text-sm font-medium tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all"
            >
              Submit Enquiry
            </button>
          </form>

          {/* INFO BLOCK */}
          <div className="space-y-4 text-sm text-neutral-300">
            <p className="font-medium text-neutral-100">
              Prefer to talk directly?
            </p>

            <p>
              Call / WhatsApp:{" "}
              <span className="text-neutral-100 font-medium">
                +91-XXXXXXXXXX
              </span>
            </p>

            <p>
              Email:{" "}
              <span className="text-neutral-100 font-medium">
                bookings@rnk.com
              </span>
            </p>

            <p className="text-xs text-neutral-400 mt-4">
              Available for corporate retainers, one-time events and curated
              HNI travel plans across Mumbai, Delhi, Bengaluru, Hyderabad,
              Pune, Chennai and more.
            </p>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
