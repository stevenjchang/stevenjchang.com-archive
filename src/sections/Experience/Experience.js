import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import classnames from "classnames";

const pageData = [
  {
    jobTitle: "Frontend Engineer",
    company: "Skupos",
    cssClasses: "company-card company-1",
    companyColor: "#19bf82",
    companyUrl: "",
    paragraphs: [
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "medium",
        long: "long",
      },
    ],
  },
  {
    jobTitle: "Frontend Engineer",
    company: "nimasensor",
    cssClasses: "company-card company-2",
    companyColor: "#ffc00e",
    companyUrl: "",
    paragraphs: [
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "medium",
        long: "long",
      },
    ],
  },
  {
    jobTitle: "Software Engineer",
    company: "Zymergen",
    cssClasses: "company-card company-3",
    companyColor: "#FFCA18",
    companyUrl: "",
    paragraphs: [
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
      },
      {
        short: "short",
        medium: "Medium ipsum dolor sit amet consectetur adipisicing elit",
        long:
          "This is the long text amet consectetur adipisicing elit. Obcaecati atque architecto fugiat similique vel? Totam, optio voluptate sequi perspiciatis explicabo fugit necessitatibus natus nam!",
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
  const { jobTitle, company, cssClasses, paragraphs } = props;
  return (
    <div className="card-container my-24 flex flex-col">
      <div className="flex w-3/5">
        <div className="flex flex-col">
          <h3 className="text-2xl">
            {jobTitle} <span style={{ color: "gray" }}>@</span>{" "}
            <a href="/">
              <span className={cssClasses}>{company}</span>
            </a>
          </h3>
          <BulletDropDowns paragraphs={paragraphs} />
        </div>
      </div>
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
  const [isOpen, setIsOpen] = useState(false);
  const cn = classnames("job-upper py-3 pl-4", { open: isOpen });
  const cn2 = classnames("job-inner pl-6", { open: isOpen });
  const cn3 = classnames(
    "job-icon",
    { open: isOpen },
    { [`icon-${index + 1}`]: true }
  );
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <p className={cn}>
        {/* <IoIosArrowDropright
          className={cn3}
          style={{ display: "inline-block", marginRight: "8px" }}
        /> */}
        {short} -{" "}
        <span className="job-medium">
          {medium}{" "}
          {/* <AiOutlineCaretDown
            className={cn3}
            style={{ display: "inline-block" }}
          /> */}
        </span>
      </p>
      <p className={cn2}>{long}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <Test />
      <div className="experience-section container mx-auto">
        {pageData.map((data, idx) => (
          <Card key={idx} {...data} />
        ))}
      </div>
    </>
  );
};

export default Experience;

const Test = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-start">
        <div className="test-1 flex bg-red-500 flex w-1/2">
          <div className="flex flex-col">
            <h3>h3 1</h3>
            <p>12</p>
            <div>
              <p>p 1 fdsfdsfsdf sd sfdsf</p>
              <p>p 1</p>
              <ul>
                <li>li 1</li>
                <li>li 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center">
        <div className="test-1 flex bg-red-500 flex w-1/2">
          <div className="flex flex-col">
            <h3>h3 1</h3>
            <p>12</p>
            <div>
              <p>p 1 fdsfdsfsdf sd sfdsf</p>
              <p>p 1</p>
              <ul>
                <li>li 1</li>
                <li>li 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-end">
        <div className="test-1 flex bg-red-500 flex w-1/2">
          <div className="flex flex-col">
            <h3>h3 1</h3>
            <p>12</p>
            <div>
              <p>p 1 fdsfdsfsdf sd sfdsf</p>
              <p>p 1</p>
              <ul>
                <li>li 1</li>
                <li>li 1</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
