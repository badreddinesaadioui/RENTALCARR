import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Besoin d'informations supplémentaires ?</h2>
              <p>
                Un professionnel polyvalent expert dans plusieurs domaines de recherche, de développement ainsi qu'un spécialiste de l'apprentissage. Plus de 15 ans d'expérience.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; 0687301564
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                growstudio.ma@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Casablanca,
                Maroc
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Nom complet<b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Badreddine Saadioui"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Parlez-nous en <b>*</b>
                </label>
                <textarea placeholder="Écrivez ici.."></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Réservez une voiture en entrant en contact avec nous</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>+212 687-301-564</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
