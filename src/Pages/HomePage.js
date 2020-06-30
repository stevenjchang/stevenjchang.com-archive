import React from "react";

import HeroSection from "Sections/HeroSection.js";
import WorkExperienceSection from "Sections/WorkExperienceSection.js";
import TestimonialSection from "Sections/TestimonialSection.js";
import ProjectSection from "Sections/ProjectSection.js";
import FooterSection from "Sections/FooterSection.js";
import HR from "Components/HR.js";

import "Styles/tailwind-dist.css";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HR />
      <WorkExperienceSection />
      <TestimonialSection />
      <ProjectSection />
      <FooterSection />
    </>
  );
};

export default HomePage;
