import { AnimatedSection } from "@/components/AnimatedSection";
import { CustomerReviewsSection } from "@/components/CustomerReviewsSection";
import { ExperienceStrip } from "@/components/ExperienceStrip";
import { RnkFooter } from "@/components/footer";
import { Hero } from "@/components/Hero";
import { HomeWhyUsSection } from "@/components/WhyUsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { IntroSection } from "@/components/IntroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { StatsSection } from "@/components/StatsSection";
import { USPSection } from "@/components/USPSection";


export default function HomePage() {
  return (
    <>

      <Hero />
      <IntroSection />
      <AnimatedSection children={undefined}  />
      <ServicesSection /> 
      <HowItWorksSection />
      <USPSection />
      <HomeWhyUsSection />
      <StatsSection />
      <CustomerReviewsSection />
      <ExperienceStrip />
      <RnkFooter />
      {/* Other sections: Why Us, Services, Fleet, etc. */}
    </>
  );
}