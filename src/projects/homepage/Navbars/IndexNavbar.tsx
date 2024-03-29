import React from 'react';

import Link from 'next/link';
// components

// import IndexDropdown from '@/components/Dropdowns/IndexDropdown';

const NAVBAR = {
  logoText: 'stevenjchang.com',
  cta: 'Contact',
};

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex px-2 py-3 navbar-expand-lg bg-white shadow">
        {/* <nav className="top-0 fixed z-50 shadow w-full bg-white"> */}
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-slate-700 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              href="#pablo"
            >
              {NAVBAR.logoText}
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none${
              navbarOpen ? ' block' : ' hidden'
            }`}
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <Link
                  href="/about"
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                  <i className="text-slate-400 far fa-file-alt text-lg leading-lg mr-2" />{' '}
                  About
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">{/* <IndexDropdown /> */}</li>
              {/* <li className="flex items-center">
                <a
                  href="/"
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-slate-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li> */}

              <li className="flex items-center">
                <Link
                  href="https://www.linkedin.com/in/stevenjchang/"
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-slate-400 fab fa-linkedin text-lg leading-lg" />
                  <span className="lg:hidden inline-block ml-2">LinkedIn</span>
                </Link>
              </li>

              <li className="flex items-center">
                <Link
                  href="https://github.com/stevenjchang/"
                  className="hover:text-slate-500 text-slate-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="text-slate-400 fab fa-github text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Star</span>
                </Link>
              </li>

              {/* <li className="flex items-center">
                <button
                  className="bg-slate-700 text-white active:bg-slate-600 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Download
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
