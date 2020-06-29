import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const iconConfig = {
  size: 30,
  color: "#A9A9A9",
};

const Footer = () => {
  return (
    <>
      <div className="section-background pb-24">
        <div className="container mx-auto flex justify-around w-40">
          <a href="https://bit.ly/stevenjchang-linkedin">
            <FaLinkedin {...iconConfig} />
          </a>
          <a href="https://bit.ly/stevenjchang-github">
            <FaGithub {...iconConfig} />
          </a>
          <a href="https://bit.ly/stevenjchang-twitter">
            <FaTwitter {...iconConfig} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
