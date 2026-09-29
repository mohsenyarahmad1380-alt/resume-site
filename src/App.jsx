import AboutSection from './components/AboutSection.jsx'
import HeroSection from './components/HeroSection.jsx'
import Navbar from './components/Navbar.jsx'
import SkillsBar from './components/SkillsBar.jsx'

function App() {


  return (
    <>
      <Navbar />
     <HeroSection />
     <AboutSection id="about" />
     <SkillsBar />
    </>
  )
}

export default App
