import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/badr.png";
import Person2 from "../images/team/mounim.jpeg";
import Person3 from "../images/team/serena.jpeg";


function Team() {
  const teamPpl = [
    { img: Person2, name: "Mounim Saadioui", job: "Directeur et Web Analyst" },
    { img: Person1, name: "Badreddine Saadioui", job: "Développeur et Graphiste" },
    { img: Person3, name: "Abdelmouhaimen Serhane", job: "Développeur et Spécialiste SEO" },

  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Réservez une voiture en prenant contact avec nous</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+212) 687-301-564</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
