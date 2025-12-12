import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.webp'
import IMG4 from '../../assets/project4.jpeg'
import IMG5 from '../../assets/project5.jpg'
import IMG6 from '../../assets/project6.jpeg'
const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>  
              <h3>Institute Management App</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/institute-management" className='btn'>Github</a>
                <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG2} alt="" />
            </div>
              <h3>AI Ticket System</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/AI-Ticket-System" className='btn'>Github</a>
                <a href="#" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG4} alt="" />
            </div>  
              <h3>Youtube Backend</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/youtube-backend-027" className='btn'>Github</a>
                <a href="/" target='_blank' className='btn btn-primary'>Live Demo</a>  
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src= {IMG3} alt="" />
            </div>  
              <h3>MBBS Abroad Study</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/mbbs-abroad-landing-page" className='btn'>Github</a>
                <a href="https://mbbs-abroad-landing-page.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG5} alt="" />
            </div>  
              <h3>Assignment Demo Front-end</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/IRed-assignment" className='btn'>Github</a>
                <a href="https://ired-assignment.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG6} alt="" />
              </div>  
              <h3>Event Management</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/Event-management-college-project" className='btn'>Github</a>
                <a href="https://event-management-ten-sooty.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
