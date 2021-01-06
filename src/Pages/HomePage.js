import React from "react";

import Navbar from "Sections/Navbar.js";
import HeroSection from "Sections/HeroSection.js";
import ServiceSection from "Sections/ServiceSection.js";
import WorkExperienceSection from "Sections/WorkExperienceSection.js";
import TestimonialSection from "Sections/TestimonialSection.js";
import ProjectSection from "Sections/ProjectSection.js";
import FooterSection from "Sections/FooterSection.js";
import HR from "Components/HR.js";

import "Styles/tailwind-dist.css";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <HR />
      <WorkExperienceSection />
      <TestimonialSection />
      <ProjectSection />
      <HR />
      <FooterSection />
    </>
  );
};

export default HomePage;
