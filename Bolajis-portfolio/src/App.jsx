import './App.css';
import NavBar from '../components/Navbar';
import HeroSection from './Hero/HeroSection';
import AboutBolaji from './About/About';
function App() {

  return (
    <>
    <div className="conatianer bg-(--background-color)">
   <NavBar/>
   <HeroSection/>
   <AboutBolaji/>
    </div>
    </>
  )
}

export default App
