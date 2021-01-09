import "pages/HomePage.scss";
import { ServiceSection } from "sections/ServiceSection";
import { TestimonialSection } from "sections/TestimonialSection";
import WorkExperienceSection from "sections/WorkExperienceSection";

// export function HomePage() {
//   return <div className="">homepage</div>;
// }

export function HomePage() {
  return (
    <>
      {/* <div ref={element}> */}
      {/* <section className="welcome">
        <img src="" alt="logo" className="welcome--logo" />
        <p>Even if you scroll, i will stick with you</p>
        <button className="welcome__cta-primary">Contact us</button>
      </section> */}

      {/* </div> */}
      <HeroSection />
      <ServiceSection />
      <WorkExperienceSection />
      <TestimonialSection />
    </>
  );
}

const text = {
  description: `Based out of SF. Experience working with early stage startups and small businesses. Specialize in integrating marketing tools.`,
};

function HeroSection() {
  return (
    <section id="hero-section" className="section">
      <h1 className="">Software Engineer | Marketing Consultant</h1>
      <br />
      <p className="">{text.description}</p>
      <br />
      <div className="">
        <button className="btn">I need a freelancer</button>
        <button className="btn">I'm looking to hire</button>
      </div>
    </section>
  );
}
