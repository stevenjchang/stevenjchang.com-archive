import { Link } from "react-scroll";
import "components/Navbar.scss";

export function Navbar({ sticky }) {
  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        <img src="/portfolio_pic.jpeg" alt="logo" className="navbar--logo" />
        <h5 className="navbar--title">stevenjchang.com</h5>
      </div>
      <ul className="navbar--link">
        {/* <li className="navbar--link-item">
          <Link
            className=""
            to="service-section"
            spy={true}
            smooth={true}
            duration={1500}
          >
            Services
          </Link>
        </li> */}
        <li className="navbar--link-item">
          <Link
            className=""
            to="experience-section"
            spy={true}
            smooth={true}
            duration={1500}
            offset={-100}
          >
            Resume
          </Link>
        </li>
        <li className="navbar--link-item">
          <Link
            className=""
            to="portfolio-section"
            spy={true}
            smooth={true}
            duration={1500}
          >
            Projects
          </Link>
        </li>
        <li className="navbar--link-item">
          <Link
            className=""
            to="testimonial-section"
            spy={true}
            smooth={true}
            duration={1500}
          >
            Testimonies
          </Link>
        </li>
        {/* <li className="navbar--link-item">
          <Link
            className=""
            to="about-section"
            spy={true}
            smooth={true}
            duration={1500}
          >
            About
          </Link>
        </li> */}
        {/* <li className="navbar--link-item">
          <a href="">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
}
