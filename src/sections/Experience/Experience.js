import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import classnames from "classnames";

const pageData = [
  {
    jobTitle: "Frontend Engineer",
    company: "Skupos",
    paragraphs: [
      {
        short: "short",
        medium: "medium",
        long: "long",
      },
      {
        short: "short",
        medium: "medium",
        long: "long",
      },
      {
        short: "short",
        medium: "medium",
        long: "long",
      },
    ],
  },
];

const Card = (props) => {
  const { jobTitle, company, paragraphs } = props;
  return (
    <div className="c">
      <h3 className="c">
        {jobTitle} @ <span>{company}</span>
      </h3>
      <BulletDropDowns paragraphs={paragraphs} />
    </div>
  );
};

const BulletDropDowns = ({ paragraphs }) => {
  if (!paragraphs || !Array.isArray(paragraphs)) {
    return null;
  }
  return (
    <>
      {paragraphs.map((data, idx) => (
        <JobBullet key={idx} index={idx} {...data} />
      ))}
    </>
  );
};

const JobBullet = ({ short, medium, long, index }) => {
  const [isOpen, setIsOpen] = useState(index === 0 ? true : false);
  const cn = classnames("job-upper", { open: isOpen });
  const cn2 = classnames("job-inner", { open: isOpen });
  const cn3 = classnames("job-icon", { open: isOpen });
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <p className={cn}>
        <IoIosArrowDropright
          className={cn3}
          style={{ display: "inline-block", marginRight: "10px" }}
        />
        {short} - <span>{medium}</span>
      </p>
      <p className={cn2}>{long}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <div className="container mx-auto my-40 px-24">
        {pageData.map((data, idx) => (
          <Card key={idx} {...data} />
        ))}
      </div>
    </>
  );
};

export default Experience;
