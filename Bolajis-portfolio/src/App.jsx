import './App.css';
import NavBar from '../components/Navbar';
import HeroSection from './Hero/HeroSection';
import AboutBolaji from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {

  return (
    <>
      <div className="conatianer bg-(--background-color)">
        <NavBar />
        <HeroSection />
        <AboutBolaji />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
