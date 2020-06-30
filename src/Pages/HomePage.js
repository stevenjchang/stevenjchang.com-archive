import React from "react";

import HeroSection from "Sections/HeroSection.js";
import WorkExperienceSection from "Sections/Experience/WorkExperienceSection.js";
import TestimonialCarousel from "Sections/TestimonialCarousel/TestimonialCarousel.js";
import PortfolioSection from "Sections/PortfolioSection/PortfolioSection.js";
import FooterSection from "Sections/FooterSection.js";
import HR from "Components/HR.js";

import "Styles/tailwind.css";
import "Styles/index.css";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HR />
      <WorkExperienceSection />
      <PortfolioSection />
      <TestimonialCarousel />
      <FooterSection />
    </>
  );
};

export default HomePage;
