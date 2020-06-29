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
          <FaLinkedin {...iconConfig} />
          <FaGithub {...iconConfig} />
          <FaTwitter {...iconConfig} />
        </div>
      </div>
    </>
  );
};

export default Footer;
