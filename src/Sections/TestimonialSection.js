import React from "react";
import classnames from "classnames";

import Carousel from "Components/Carousel.js";

import HeadingH2 from "Components/HeadingH2.js";

const data = [
  `Steve is a problem solver. He is the type of developer that you can rely on to fix the unknown issue. In our small front-end team, he takes more responsibilities than usual developer. He is mainly in charge of our company website and martech related projects. `,
  `You won’t find a more detail oriented full-stack software engineer than Steve. Steve and I worked together at Nima, where he lead multiple back and front-end implementations. His ability to meticulously document and think through software challenges was remarkable.`,
  ` I was also very impressed by Steve’s ability to take a project from inception to research to implementation to production. We could always count on Steve to bring his thoughtful perspective to conversations.`,
  `And he is not afraid to take on any challenges when we asked him to explore the new territory. In a short period of time, he earns our trust and we basically let him handle those tasks on his own. He is self-motivated and has never let the team down.`,
  `Steve is easy to work with and a very talented front-end developer. Working in marketing, we rely on developers to bring our campaigns to fruition. Steve's attention to detail and quick delivery made it easy for us to get up and running quickly; he was willing to jump in when needed and produced quality work consistently.`,
  `Steve is very focused, hard-working and passionate about implementation of that pixel perfect design. He is dedicated to find the best solution to the problem he encounters and creative in his approach.`,
  `He always played a significant role in developing and implementing overall front-end strategies, and dealt with the details along with the bigger picture. He is highly skilled in working with React and Redux stack. Steve is a true team player. He is always eager to get his hands dirty with new technologies and help his fellow co-workers to troubleshoot the issue. He will bring great value to any company!`,
  `Working with Steve at Zymergen has been a great privilege. On top of being quick learner and effective engineer. Steve is able to smile and maintain a cheerful demeanor even when working under stress; he brings palpable positive energy to the team's he works with.`,
];

const TestimonialSection = () => {
  const cn = classnames("px-12 py-16 text-md quote-mark");

  return (
    <>
      <div id="testimonial-section" className="section-background">
        <HeadingH2>Recommendations</HeadingH2>
        <div className="container mx-auto px-4">
          <Carousel>
            {data.map((text, idx) => (
              <div key={idx} className={cn}>
                <a href="https://linkedin.com/in/stevenjchang">{text}</a>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection;
