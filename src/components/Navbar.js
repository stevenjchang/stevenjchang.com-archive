import "components/Navbar.scss";

export function Navbar({ sticky }) {
  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        <img src="/portfolio_pic.jpeg" alt="logo" className="navbar--logo" />
        <h5 className="navbar--title">stevenjchang</h5>
      </div>
      <ul className="navbar--link">
        <li className="navbar--link-item">
          <a href="">Services</a>
        </li>
        <li className="navbar--link-item">
          <a href="">Portfolio</a>
        </li>
        <li className="navbar--link-item">
          <a href="#experience-section">Resume</a>
        </li>
        <li className="navbar--link-item">
          <a href="#testimonial-section">Testimonies</a>
        </li>
        <li className="navbar--link-item">
          <a href="">About</a>
        </li>
        {/* <li className="navbar--link-item">
          <a href="">Contact</a>
        </li> */}
      </ul>
    </nav>
  );
}
