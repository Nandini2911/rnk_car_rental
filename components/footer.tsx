"use client";

import { motion } from "framer-motion";

export function RnkFooter() {
  return (
    <motion.footer
      className="relative bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* optional background car image */}
      <img
        src="/"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-black/85" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-0 py-12 md:py-16">
        <div className="grid gap-10 md:gap-8 md:grid-cols-4">
          {/* QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0 }}
          >
            <FooterHeading>Quick Links</FooterHeading>
            <FooterList>
              <FooterLink label="Home" href="#home" />
              <FooterLink label="About Us" href="#about" />
              <FooterLink label="Why Us" href="#why-us" />
              <FooterLink label="Fleet" href="#fleet" />
              <FooterLink label="Our Network" href="#network" />
              <FooterLink label="Terms &amp; Conditions" href="#terms" />
              <FooterLink label="Privacy Policy" href="#privacy" />
              <FooterLink label="Contact Us" href="#contact" />

              
            </FooterList>
          </motion.div>

          {/* OUR FLEET */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.12 }}
          >
            <FooterHeading>Our Fleet</FooterHeading>
            <FooterList>
              <FooterText>Super Luxury Cars</FooterText>
              <FooterText>Luxury Cars</FooterText>
              <FooterText>SUV / MUV</FooterText>
              <FooterText>Sedan</FooterText>
              <FooterText>Mini Vans</FooterText>
              <FooterText>Coaches</FooterText>
            </FooterList>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.24 }}
          >
            <FooterHeading>Services</FooterHeading>
            <FooterList>
              <FooterText>Corporate Car Rental</FooterText>
              <FooterText>Airport &amp; Railway Transfers</FooterText>
              <FooterText>Luxury Travel</FooterText>
              <FooterText>Hotel Operations</FooterText>
              <FooterText>Vacation Rentals</FooterText>
              <FooterText>VIP Movements</FooterText>
              <FooterText>Long Term Car Rental</FooterText>
              <FooterText>Event / Wedding Transport</FooterText>
            </FooterList>
          </motion.div>

          {/* CONTACT US */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.36 }}
          >
            <FooterHeading>Contact Us</FooterHeading>

            {/* Call card */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#ffff]">
                <span aria-hidden className="text-lg">📞</span>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold">Call us</p>
                <a
                  href="tel:02243227777"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  022-43227777
                </a>
              </div>
            </div>

            {/* Mail card */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#ffff]">
                <span aria-hidden className="text-lg">✉️</span>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold">Write to us</p>
                <a
                  href="mailto:info@rnk.com"
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  info@rnk.com
                </a>
              </div>
            </div>

            {/* Address card */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#ffff]">
                <span aria-hidden className="text-lg">📍</span>
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-semibold">Head Office Address</p>
                <p className="text-neutral-300">
                  Suite 19, Kaliandas Udyog Bhavan,
                  <br />
                  Century Bazar, Prabhadevi, Mumbai,
                  <br />
                  400025 India
                </p>
              </div>
            </div>

      <div className="flex gap-3 pt-2 justify-center">
  <SocialIcon href="https://facebook.com">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.34 2 2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.01H8.08v-2.92h2.36V9.41c0-2.33 1.39-3.62 3.52-3.62 1.02 0 2.09.18 2.09.18v2.29h-1.18c-1.16 0-1.52.72-1.52 1.45v1.74h2.59l-.41 2.92h-2.18v7.01C18.34 21.26 22 17.09 22 12.07z" />
  </svg>
</SocialIcon>


 <SocialIcon href="https://instagram.com">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.75-3.75a1.25 1.25 0 1 0 1.25 1.25A1.26 1.26 0 0 0 16.75 5.75z" />
  </svg>
</SocialIcon>


 <SocialIcon href="https://linkedin.com">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.8v1.7h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.9V20h-4v-5.5c0-1.3 0-3-2-3s-2.3 1.4-2.3 2.9V20h-4V8z" />
  </svg>
</SocialIcon>

  <SocialIcon href="https://youtube.com">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
  >
    <path d="M23.5 6.2c-.3-1.3-1.3-2.3-2.6-2.6C18.6 3 12 3 12 3s-6.6 0-8.9.6c-1.3.3-2.3 1.3-2.6 2.6C0 8.6 0 12 0 12s0 3.4.5 5.8c.3 1.3 1.3 2.3 2.6 2.6 2.3.6 8.9.6 8.9.6s6.6 0 8.9-.6c1.3-.3 2.3-1.3 2.6-2.6.5-2.4.5-5.8.5-5.8s0-3.4-.5-5.8z" />
    <path fill="#000" opacity="0.9" d="M10 15.5v-7l6 3.5-6 3.5z" />
  </svg>
</SocialIcon>

</div>

          </motion.div>
        </div>
      </div>

      {/* bottom bar */}
      <motion.div
        className="relative border-t border-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="mx-auto max-w-6xl px-6 py-4 text-center text-[11px] md:text-xs text-neutral-400">
          © Copyright 2025. All Rights Reserved.
        </p>
      </motion.div>
    </motion.footer>
  );
}

/* Helper components */

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <h4 className="text-sm md:text-base font-semibold uppercase tracking-[0.08em]">
        {children}
      </h4>
      <span className="mt-1 block h-[2px] w-10 bg-[#9B0E1A]" />
    </div>
  );
}

function FooterList({ children }: { children: React.ReactNode }) {
  return <ul className="space-y-1.5 text-sm text-neutral-300">{children}</ul>;
}

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        className="hover:text-white transition-colors duration-150"
      >
        {label}
      </a>
    </li>
  );
}

function FooterText({ children }: { children: React.ReactNode }) {
  return <li>{children}</li>;
}

function SocialIcon({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-md border border-[#9B0E1A] text-xs uppercase tracking-wide hover:bg-[#9B0E1A] hover:border-[#9B0E1A] transition-colors"
    >
      {children}
    </a>
  );
}
