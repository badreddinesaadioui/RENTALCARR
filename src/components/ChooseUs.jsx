import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Pourquoi Nous Choisir</h4>
                <h2>Les meilleures offres que vous trouverez jamais</h2>
                <p>
                  Découvrez les meilleures offres que vous trouverez jamais avec nos offres imbattables.
                  Nous sommes dédiés à vous fournir la meilleure valeur pour votre argent, afin que vous
                  puissiez profiter de services et de produits de haute qualité sans vous ruiner.
                  Nos offres sont conçues pour vous offrir l'expérience ultime de la location, alors ne manquez
                  pas votre chance de faire des économies importantes.
                </p>
                <a href="#home">
                  Trouver les Détails &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Voyages à Travers le Pays</h4>
                    <p>
                      Emportez votre expérience de conduite au niveau supérieur avec nos véhicules haut de gamme pour
                      vos aventures à travers le pays.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Tarification Tout Compris</h4>
                    <p>
                      Obtenez tout ce dont vous avez besoin dans un prix pratique et transparent avec notre politique
                      de tarification tout compris.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Pas de Frais Cachés</h4>
                    <p>
                      Profitez de la tranquillité d'esprit avec notre politique sans frais cachés.
                      Nous croyons en une tarification transparente et honnête.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
