import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import PlanTrip from "../components/PlanTrip";
import AboutMain from "../images/about/about-main.jpg";
import Box1 from "../images/about/icon1.png";
import Box2 from "../images/about/icon2.png";
import Box3 from "../images/about/icon3.png";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>À Propos de l'Entreprise</h3>
              <h2>Vous démarrez le moteur et votre aventure commence</h2>
              <p>
                Certaine mais elle, pourquoi la timidité du cottage. L'homme a mis l'instrument monsieur implorant des affronts. Prétendument exquis vous voyez cordialement. Semaines tranquilles à faire vexé ou à qui. Immobilisé s'il n'y a pas d'imprudence affrontante, aucune précaution. Mon indulgence à disposition assistée avec force.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>20</h4>
                    <p>Types de Voitures</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                     <h4>85</h4>
                    <p>Points de Location</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>75</h4>
                    <p>Ateliers de Réparation</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Réservez une voiture en nous contactant</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(+212) 687-301-564</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
