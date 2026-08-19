import './App.css';
import NavBar from '../components/Navbar';
import HeroSection from './Hero/HeroSection';
import Skills from './Skills/Skills';
import AboutBolaji from './About/About';
import Newsletters from './Newsletters/Newsletters';
import Journey from './Journey/Journey';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {

  return (
    <>
      <div className="conatianer bg-(--background-color)">
        <NavBar />
        <HeroSection />
        <Skills />
        <AboutBolaji />
        <Newsletters />
        <Journey />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
