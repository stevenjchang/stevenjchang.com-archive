import React from "react";

const HeroSection = () => {
  return (
    <div
      id="hero-section"
      className="section-background text-center flex flex-col justify-center"
    >
      <h1 className="mb-6 text-4xl font-extrabold">Steven J Chang</h1>
      <h2 className="uppercase mb-24">
        Frontend Engineer | Ad-tech & Mar-Tech specialist
      </h2>
      <div className="c">
        <a href="https://bit.ly/stevenjchang-resume">
          <button className="cta-dark uppercase rounded">See Resume</button>
        </a>
        <br />
      </div>
    </div>
  );
};

export default HeroSection;
