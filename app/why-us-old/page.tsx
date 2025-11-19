"use client";


import { NavBar } from "@/components/NavBar";
import { WhyUs } from "../../components/WhyUs";
import { RnkFooter } from "@/components/footer";

export default function WhyUsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
     
      <WhyUs />
      <RnkFooter />
    </main>
  );
}
