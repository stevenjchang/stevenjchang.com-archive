import React from "react";

const Links = [
  {
    name: "About Me",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Testimonies",
    url: "/testimonies",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const Logo = () => {
  return (
    <div className="hidden lg:inline-block">
      <p className="text-black">stevenjchang</p>
    </div>
  );
};

const NavItems = () => {
  return (
    <>
      <div className="hidden lg:inline-block text-white text-sm">
        {Links.map(({ name, url }, idx) => (
          <a
            href={url}
            key={idx}
            className="css-text-off-black font-inter border-2 border-transparent rounded-lg py-2 px-3 text-gray-800 text-base"
          >
            {name}
          </a>
        ))}
      </div>
    </>
  );
};

const NavBar = () => {
  return (
    <nav className="css-navbar lg:block">
      <div className="container mx-auto px-4 py-8 flex text-white text-lg justify-between items-center">
        <Logo />
        <NavItems />
      </div>
    </nav>
  );
};

export default NavBar;
