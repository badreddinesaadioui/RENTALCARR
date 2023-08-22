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
    <nav>
      {/* Mobile Navigation */}
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

      {/* Desktop Navigation */}
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
          <Link className="navbar__buttons__sign-in" to="/">
            Connexion
          </Link>
          <button className="navbar__buttons__register" onClick={handleCallButton}>
            Appelez nous
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="mobile-hamb" onClick={openNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
