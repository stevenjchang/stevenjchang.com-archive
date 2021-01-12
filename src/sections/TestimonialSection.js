import React from "react";
import classnames from "classnames";

import Carousel from "components/Carousel.js";
// import HeadingH2 from "Components/HeadingH2.js";
import "sections/TestimonialSection.scss";

const shortData = [
  `Steve is a problem solver. He is the type of developer that you can rely on to fix the unknown issue.`,
  `You won’t find a more detail oriented full-stack software engineer than Steve.`,
  `I was very impressed by Steve’s ability to take a project from inception to research to implementation to production.`,
  `We could always count on Steve to bring his thoughtful perspective to conversations.`,
  `Steve's attention to detail and quick delivery made it easy for us to get up and running quickly`,
  `He always played a significant role in developing and implementing overall front-end strategies, and dealt with the details along with the bigger picture.`,
  `Steve is able to smile and maintain a cheerful demeanor even when working under stress; he brings palpable positive energy to the team's he works with.`,
];

const TestimonialSection = () => {
  return (
    <>
      <div
        id="testimonial-section"
        className="section-background section-outer"
      >
        <HeadingH2>Recommendations</HeadingH2>
        <div className="container mx-auto px-4">
          <Carousel>
            {shortData.map((text, idx) => (
              <div key={idx} className="px-12 py-16 text-md quote-mark">
                <a href="https://linkedin.com/in/stevenjchang">{text}</a>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

const HeadingH2 = ({ children }) => {
  return <h2 className="text-center text-2xl font-bold">{children}</h2>;
};

export { TestimonialSection };
