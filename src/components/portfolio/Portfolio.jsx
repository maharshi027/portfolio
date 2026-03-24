import './portfolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG4 from '../../assets/poster.jpeg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG1} alt="" />
            </div>  
              <h3>Institute Management</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/institute-management" className='btn'>Github</a>
                <a href="https://institute-management-027.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src={IMG2} alt="" />
            </div>
              <h3>AI Ticket System</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/AI-Ticket-System" className='btn'>Github</a>
                <a href="https://ai-ticket-system-delta.vercel.app" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
        
        <article className='portfolio_items'>
            <div className="portfolio_item-image">
              <img src= {IMG4} alt="" />
            </div>  
              <h3>Coaching class</h3>
              <div className="portfolio_items-cta">
                <a href="https://github.com/maharshi027/coaching-class" className='btn'>Github</a>
                <a href="https://dinesh-classes.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
              </div>
        </article>
       
      </div>
    </section>
  )
}

export default Portfolio
