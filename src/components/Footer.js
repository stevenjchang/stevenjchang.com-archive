import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

import "components/Footer.scss";

const iconConfig = {
  size: 30,
  color: "#A9A9A9",
};

export const Footer = () => {
  return (
    <>
      <div className="section-background py-24">
        <div id="footer" className="container mx-auto flex justify-around w-40">
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
