import "sections/HeroSection.scss";

export function HeroSection() {
  return (
    <div id="hero-section-outer" className="">
      <section id="hero-section" className="section-inner">
        <h1 className="">Software Engineer | Marketing Consultant</h1>
        <br />
        <p className="hero-section--description">
          Based out of San Francisco. I have experience working with early stage
          startups and small businesses.
          <br />
          <br />
          Aside from general development, I can help you get set up with
          marketing tools, especially with integration and troubleshooting. Have
          a tracking bug you can't solve? Contact me for a consultation.
        </p>
        <br />
        <div className="">
          <button className="btn btn-info">view experience</button>
          <button className="btn btn-secondary">see services</button>
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
