import "sections/HeroSection.scss";

export function HeroSection() {
  return (
    <div id="hero-section-outer" className="">
      <section id="hero-section" className="section-inner">
        <div className="left">
          <h1 className="">Software Engineer &</h1>
          <h1>Marketing Consultant</h1>
          <br />
          <p className="hero-section--description">
            Based out of San Francisco. I have experience working with early
            stage startups and small businesses.
            <br />
            <br />
            Aside from general development, I can help you get set up with
            marketing tools, especially with integration and troubleshooting.
            Have a tracking bug you can't solve? Contact me for a consultation.
          </p>
          <br />
          <div className="">
            <button className="btn btn-info">view experience</button>
            <button className="btn btn-secondary">see services</button>
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
