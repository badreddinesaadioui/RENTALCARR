import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleCallButton = () => {
    window.location.href = "tel:0687301564";
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Acceuil
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                À propos
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
                Nos voitures
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/TestimonialsPage">
                Témoinages
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/team">
                Équipe 
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Acceuil
              </Link>
            </li>
            <li>
              <Link className="about-link" to="/about">
                À propos
              </Link>
            </li>
            <li>
              <Link className="models-link" to="/models">
                Nos voitures 
              </Link>
            </li>
            <li>
              <Link className="testi-link" to="/TestimonialsPage">
                Témoinages
              </Link>
            </li>
            <li>
              <Link className="team-link" to="/team">
                Équipe 
              </Link>
            </li>
            <li>
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <a
              className="navbar__buttons__sign-in"
              href="https://www.google.com/maps/place/Garage+M%C3%A9canique+Tolerie+Sa%C3%A2dioui+(MTS)/@33.5527909,-7.6745403,15z/data=!4m6!3m5!1s0xda62cc9888e6c9f:0x815c93684698187b!8m2!3d33.5527909!4d-7.6745403!16s%2Fg%2F11bbrmhv83?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Local
            </a>
            <button className="navbar__buttons__register" onClick={handleCallButton}>
              Appelez nous
            </button>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

