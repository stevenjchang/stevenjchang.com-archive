import React from "react";

import Experience from "Sections/Experience/Experience.js";
import TestimonialCarousel from "Sections/TestimonialCarousel/TestimonialCarousel.js";

import "Styles/tailwind.css";
import "Styles/index.css";

const HomePage = () => {
  return (
    <>
      <Experience />
      <TestimonialCarousel />
    </>
  );
};

export default HomePage;
