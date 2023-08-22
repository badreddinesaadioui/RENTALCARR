import { Link } from "react-router-dom";
import Logo from "../images/logo/logo.png";
import { useState } from "react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
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
                Accueil
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/À Propos">
                À Propos
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/modèles">
                Nos Véhicules
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/témoinage">
                Témoignages
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/équipe">
                Notre Équipe
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
                Accueil
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                À Propos
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Modèles de Véhicules
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
                Témoignages
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team">
                Notre Équipe
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Connexion
            </Link>
            <Link className="navbar__buttons__register" to="/">
              S'inscrire
            </Link>
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
