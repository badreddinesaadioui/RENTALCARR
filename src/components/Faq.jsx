import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Questions Fréquemment Posées</h2>
              <p>
                Questions Fréquemment Posées sur le Processus de Réservation de Location de Voiture
                sur Notre Site Web : Réponses aux Questions et Préoccupations Courantes.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. Qu'est-ce qui est spécial dans la comparaison des offres de location de voiture ?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Comparer les offres de location de voiture est important car cela aide à trouver la
                  meilleure offre qui correspond à votre budget et à vos besoins, vous assurant d'obtenir
                  le meilleur rapport qualité-prix. En comparant différentes options, vous pouvez trouver
                  des offres proposant des prix plus bas, des services supplémentaires ou de meilleurs modèles
                  de voiture. Vous pouvez trouver des offres de location de voiture en recherchant en ligne et
                  en comparant les prix de différentes sociétés de location.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. Comment puis-je trouver les offres de location de voiture ?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Vous pouvez trouver des offres de location de voiture en recherchant en ligne et en
                  comparant les prix de différentes sociétés de location. Des sites web tels que Expedia,
                  Kayak et Travelocity vous permettent de comparer les prix et de voir les options de location
                  disponibles. Il est également recommandé de vous inscrire aux bulletins d'information par e-mail
                  et de suivre les sociétés de location de voiture sur les médias sociaux pour être informé de toute
                  offre spéciale ou promotion.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. Comment puis-je trouver des prix de location de voiture aussi bas ?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Réservez à l'avance : Réserver votre voiture de location à l'avance peut souvent entraîner des prix plus bas.
                  Comparez les prix de plusieurs sociétés : Utilisez des sites web comme Kayak, Expedia ou Travelocity pour
                  comparer les prix de plusieurs sociétés de location de voiture. Recherchez des codes de réduction et des coupons :
                  Recherchez des codes de réduction et des coupons que vous pouvez utiliser pour réduire le prix de la location.
                  Louer dans un endroit en dehors de l'aéroport peut parfois entraîner des prix plus bas.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
