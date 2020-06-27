import React from "react";

const pageData = [
  {
    jobTitle: "Frontend Engineer",
    company: "Skupos",
    paragraph: [
      {
        short: "short",
        medium: "medium",
        long: "long",
      },
    ],
  },
];

const Card = (props) => {
  const { jobTitle, company, paragraph } = props;
  return (
    <div className="c">
      <h3 className="c">
        {jobTitle} - <span>{company}</span>
      </h3>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      {pageData.map((data, idx) => (
        <Card key={idx} {...data} />
      ))}
    </>
  );
};

export default Experience;
