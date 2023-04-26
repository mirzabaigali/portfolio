import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/Logo.png";
import "./Header.css";

const Header = () => {
  const headerNavbar = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (headerNavbar.current) {
        if (window.pageYOffset > 500) {
          headerNavbar.current.classList.add("header");
        } else {
          headerNavbar.current.classList.remove("header");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  


  return (
    <nav className="navbar navbar-expand-lg fixed-top" ref={headerNavbar}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src={Logo} alt="Logo" width="50px" className="img-fluid" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(true)}
        >
          <span className="navbar-toggler">
            <div className={`container ${isMenuOpen ? "open" : ""}`}>
              <input className="label-check" id="label-check" type="checkbox" />
              <label htmlFor="label-check" className="hamburger-label">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <label></label>
              </label>
            </div>
          </span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a
                className="nav-link button"
                aria-current="page"
                exact="true"
                href="#home"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link button"
                href="#about"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link button"
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link button"
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link button"
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
