function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>CASA</span> Location
              </li>
              <li>
Nous proposons une vaste gamme de véhicules pour tous vos besoins en conduite. Nous avons la voiture parfaite pour répondre à vos besoins.
              </li>
              <li>
                <a href="tel:0687301564">
                  <i className="fa-solid fa-phone"></i> &nbsp; (+212) 687-301-564
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                growstudio.ma@gmail.ma"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp; growstudio.ma@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://grows.studio"
                >
                  Visitez notre site grows.studio
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Entreprise</li>
              <li>
                <a href="/about">À-propos</a>
              </li>
              <li>
                <a href="/models">Modèles de voitures</a>
              </li>
              <li>
                <a href="/testimonialspage">témoignages</a>
              </li>
              <li>
                <a href="/contact">Contactez Nous</a>
              </li>
              <li>
                <a href="/team">Notre équipe</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Heures de Travail</li>
              <li>Lun - Ven : 9h00 - 21h00</li>
              <li>Sam : 9h00 - 19h00</li>
              <li>Dim : Fermé</li>
            </ul>

            <ul className="footer-content__2">
              <li>Abonnement</li>
              <li>
                <p>Abonnez-vous avec votre adresse e-mail pour les dernières actualités et mises à jour.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Envoyer</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
