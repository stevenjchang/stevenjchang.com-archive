import React from "react";

import Experience from "Sections/Experience/Experience.js";
import TestimonialCarousel from "Sections/TestimonialCarousel/TestimonialCarousel.js";
import PortfolioSection from "Sections/PortfolioSection/PortfolioSection.js";
import Footer from "Sections/Footer/Footer.js";
import HR from "Components/HR.js";

import "Styles/tailwind.css";
import "Styles/index.css";

const HomePage = () => {
  return (
    <>
      <Experience />
      <HR />
      <TestimonialCarousel />
      <HR />
      <PortfolioSection />
      <HR />
      <Footer />
    </>
  );
};

export default HomePage;
