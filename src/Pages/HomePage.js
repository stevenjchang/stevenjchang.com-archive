import React from "react";

import HeroSection from "Sections/HeroSection.js";
import Experience from "Sections/Experience/Experience.js";
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
      <Experience />
      <PortfolioSection />
      <TestimonialCarousel />
      <FooterSection />
    </>
  );
};

export default HomePage;
