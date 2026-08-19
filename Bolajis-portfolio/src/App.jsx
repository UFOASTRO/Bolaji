import './App.css';
import NavBar from '../components/Navbar';
import HeroSection from './Hero/HeroSection';
import MicrobiologySkills from './Skills/MicrobiologySkills';
import AboutBolaji from './About/About';
import Newsletters from './Newsletters/Newsletters';
import Projects from './Projects/Projects';
// import Journey from './Journey/Journey';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {

  return (
    <>
      <div className="conatianer bg-(--background-color)">
        <NavBar />
        <HeroSection />
        <MicrobiologySkills />
        <AboutBolaji />
        <Newsletters />
        <Projects />
        {/* <Journey /> */}
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
