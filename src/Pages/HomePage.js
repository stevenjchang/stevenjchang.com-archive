import React from "react";

import HeroSection from "Sections/HeroSection.js";
import WorkExperienceSection from "Sections/WorkExperienceSection.js";
import TestimonialSection from "Sections/TestimonialSection.js";
import PortfolioSection from "Sections/PortfolioSection.js";
import FooterSection from "Sections/FooterSection.js";
import HR from "Components/HR.js";

import "Styles/tailwind-dist.css";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HR />
      <WorkExperienceSection />
      <PortfolioSection />
      <TestimonialSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
