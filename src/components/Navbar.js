import "components/Navbar.scss";

export function Navbar({ sticky }) {
  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <div className="navbar--logo-holder">
        {sticky ? <img src="" alt="logo" className="navbar--logo" /> : null}
        <h5 className="">steven J chang</h5>
      </div>
      <ul className="navbar--link">
        <li className="navbar--link-item">Services</li>
        <li className="navbar--link-item">Portfolio</li>
        <li className="navbar--link-item">Testimonies</li>
        <li className="navbar--link-item">About</li>
        <li className="navbar--link-item">Contact</li>
      </ul>
    </nav>
  );
}
