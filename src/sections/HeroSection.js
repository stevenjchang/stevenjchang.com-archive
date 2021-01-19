import { Link } from "react-scroll";
import "sections/HeroSection.scss";

export function HeroSection() {
  return (
    <div id="hero-section-outer" className="">
      <section id="hero-section" className="section-inner">
        <div className="left">
          <h1 className="">Software Engineer &</h1>
          <h1 className="h1-small">Marketing Consultant</h1>
          <br />
          <p className="hero-section--description mb-2">
            Based out of San Francisco. I enjoy working with early stage
            startups and small businesses.
          </p>{" "}
          <p className="hero-section--description">
            Aside from general development, I can help you get set up with
            marketing tools, especially with integration and troubleshooting.
            Have a tracking bug you can't solve? Contact me for a consultation.
          </p>
          <br />
          <div className="mt-2">
            <Link
              to="experience-section"
              spy={true}
              smooth={true}
              duration={1500}
            >
              <button className="cta-button cta-button__primary mr-8">
                View Experience
              </button>
            </Link>
            <Link to="service-section" spy={true} smooth={true} duration={1500}>
              <button className="cta-button cta-button__secondary button-2">
                See Services
              </button>
            </Link>
          </div>
        </div>
        <div className="right">
          <img src="/undraw_marketing.svg" alt="" className="" />
          {/* <img src="/undraw_programming.svg" alt="" className="" /> */}
        </div>
      </section>
    </div>
  );
}

/**
 * alternate text
 *
 * button - I'm looking to hire
 * button - I need a freelancer
 */
