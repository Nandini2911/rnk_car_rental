"use client";

import { useState } from "react";
import Image from "next/image";


const links = [
  { label: "Home", href: "/" },
  { label: "Why Us", href: "/why-us-old" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "About", href: "/about" },
  { label: "Our Network", href: "/network" },
  { label: "Contact Us", href: "/contact" },
];
const serviceItems = [
  { label: "Corporate Car Rental", href: "/services/corporate-car-rental" },
  { label: "Airport & Railway Transfers", href: "/services/airport-railway-transfers" },
  { label: "Luxury Travel", href: "/services/luxury-travel" },
  { label: "Hotel Operations", href: "/services/hotel-operations" },
  { label: "Vacation Rentals", href: "/services/vacation-rentals" },
  { label: "VIP Movements", href: "/services/vip-movements" },
  { label: "Long Term Car Rental", href: "/services/long-term-car-rental" },
  { label: "Event / Wedding Transport", href: "/services/event-wedding-transport" },
];


export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-8xl mx-auto px-15 py-4 flex items-center justify-between">

        {/* LOGO LEFT */}
        <a href="/" className="flex items-center gap-3">
          <Image
            src="/RNK_LOGO.jpg"
            alt="RNK Rentals Logo"
            width={70}
            height={55}
            className="h-15 w-auto object-contain"
          />
        </a>

        {/* DESKTOP MENU */}
<div className="hidden md:flex items-center gap-10 text-m font-semibold">
  {links.map((item) => {
    if (item.label === "Services") {
      // special dropdown for Services
      return (
        <div key={item.label} className="relative group">
          <button
            className="flex items-center gap-1 text-black hover:text-red-900 transition-all duration-300"
          >
            {item.label}
            <span className="text-[10px] mt-[1px]"></span>
          </button>

          {/* DROPDOWN PANEL */}
<div
  className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
             absolute left-0 mt-3 w-80 bg-white border border-black/10 shadow-[0_18px_45px_rgba(0,0,0,0.18)]
             transition-all duration-200 translate-y-2 z-50 animate-rnk-services-down"
>
  {/* ALL SERVICE ITEMS – NO SCROLL */}
  <div className="py-2">
    {serviceItems.map((service) => (
      <a
        key={service.label}
        href={service.href}
        className="block px-4 py-3 text-[13px] text-black/85
                   hover:bg-red-900 hover:text-white transition-colors
                   border-b last:border-b-0 border-black/5
                   flex items-center justify-between"
      >
        <span>{service.label}</span>
        <span className="text-[11px] opacity-60"></span>
      </a>
    ))}
  </div>
</div>
        </div>
      );
    }


    // normal menu items
    return (
      <a
        key={item.label}
        href={item.href}
        className="relative text-black hover:text-red-900 transition-all duration-300"
      >
        {item.label}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-900 transition-all duration-300 hover:w-full"></span>
      </a>
    );
  })}

  {/* CTA BUTTON */}
  <a
    href="/contact"
    className="px-6 py-3 rounded-full bg-red-900 text-white uppercase text-xs font-semibold tracking-wide hover:bg-black transition-all duration-300 shadow-[0_4px_12px_rgba(200,16,46,0.35)]"
  >
    Book Now
  </a>
</div>


        {/* HAMBURGER RIGHT (MOBILE ONLY) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden h-10 w-10 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className="block w-6 h-[2px] bg-black" />
          <span className="block w-6 h-[2px] bg-black" />
          <span className="block w-6 h-[2px] bg-black" />
        </button>
      </nav>

 {/* MOBILE DROPDOWN */}
{open && (
  <div className="md:hidden bg-white shadow-xl border-t border-black/10 animate-rnk-slide-left">
    <div className="px-6 py-4 flex flex-col gap-4 text-sm">

      {links.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={() => setOpen(false)}
          className="text-black hover:text-red-900 transition-all font-bold"
        >
          {item.label}
        </a>
      ))}

      {/* MOBILE CTA */}
        <div className="p-10 border-t border-black/10 bg-white"></div>
      <a
        href="/book"
        className="mt-6 bg-red-900 text-white py-2 rounded-full text-xs font-semibold uppercase text-center tracking-wider hover:bg-black transition-all"
      >
        Book Now
      </a>
    </div>
  </div>
)}


    </header>
  );
}
