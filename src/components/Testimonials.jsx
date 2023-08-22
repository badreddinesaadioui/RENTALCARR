import Img2 from "../images/testimonials/pfp1.jpg";
import Img3 from "../images/testimonials/pfp2.jpg";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Évalué par les Personnes</h4>
              <h2>Témoignages des Clients</h2>
              <p>
                Découvrez l'impact positif que nous avons eu sur nos clients en lisant leurs témoignages.
                Nos clients ont vécu notre service et nos résultats, et ils sont impatients de partager leurs
                expériences positives avec vous.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "Nous avons loué une voiture sur ce site web et avons eu une expérience incroyable !
                  La réservation a été facile et les tarifs de location étaient très abordables."
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Hamza El mekkaoui</h4>
                      <p>Casablanca</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                  "La voiture était en excellent état et a rendu notre voyage encore meilleur.
                  Je recommande vivement ce site web de location de voiture !"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Badreddine Saadoui </h4>
                      <p>Casablanca</p>
                    </span>
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

export default Testimonials;
