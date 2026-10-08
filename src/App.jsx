import './App.css';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Education from './components/education/Education';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Certificate from './components/certificates/Certificate';
import Service from './components/services/Service';
import Contact from './components/contacts/Contact';
import Footer from './components/footer/Footer';
import Theme from './components/theme/Theme';

function App() {
  return (
    <>
      <Theme />
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Portfolio />
      <Certificate />
      <Service />
      <Contact />
      <Footer />
      <Nav />
    </>
  );
}

export default App;
