import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "components/Footer.scss";

const {
  REACT_APP_LINKEDIN_URL,
  REACT_APP_GITHUB_URL,
  REACT_APP_TWITTER_URL,
} = process.env;

const iconConfig = {
  size: 30,
  color: "#A9A9A9",
};

export const Footer = () => {
  return (
    <>
      <div className="section-background py-24">
        <div id="footer" className="container mx-auto flex justify-around w-40">
          <a href={REACT_APP_LINKEDIN_URL}>
            <FaLinkedin {...iconConfig} />
          </a>
          <a href={REACT_APP_GITHUB_URL}>
            <FaGithub {...iconConfig} />
          </a>
          <a href={REACT_APP_TWITTER_URL}>
            <FaTwitter {...iconConfig} />
          </a>
        </div>
      </div>
    </>
  );
};
