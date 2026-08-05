import "./portfolio.css";
import IMG1 from "../../assets/project1.png";
import IMG2 from "../../assets/student.jpg";
import IMG3 from "../../assets/ticketAI.jpeg";
import IMG4 from "../../assets/project2.png";
import IMG5 from "../../assets/project3.png";
import IMG6 from "../../assets/project4.jpeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_items">
          <div className="portfolio_item-image">
            <img src={IMG4} alt="Gen-Axis" />
          </div>
          <h3>Gen-Axis</h3>
          <div className="portfolio_items-cta">
            <a href="https://github.com/maharshi027/Gen-Axis" className="btn">
              Github
            </a>
            <a
              href="https://gen-axiss.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_items">
          <div className="portfolio_item-image">
            <img src={IMG5} alt="AI Kitchen Recipe" />
          </div>
          <h3>AI Kitchen Recipe</h3>
          <div className="portfolio_items-cta">
            <a
              href="https://github.com/maharshi027/AI-Recipe-Generator"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://ai-recipe-kitchen.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_items">
          <div className="portfolio_item-image">
            <img src={IMG6} alt="Institute Management System" />
          </div>
          <h3>Institute Management System</h3>
          <div className="portfolio_items-cta">
            <a
              href="https://github.com/maharshi027/institute-management"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://dinesh-classes.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
