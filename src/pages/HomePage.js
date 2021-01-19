import "pages/HomePage.scss";
import { HeroSection } from "sections/HeroSection";
import { ServiceSection } from "sections/ServiceSection";
import { PortfolioSection } from "sections/PortfolioSection";
import { TestimonialSection } from "sections/TestimonialSection";
import { WorkExperienceSection } from "sections/WorkExperienceSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <ServiceSection /> */}
      <WorkExperienceSection />
      <PortfolioSection />
      <TestimonialSection />
    </>
  );
}
