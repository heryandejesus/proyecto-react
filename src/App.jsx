import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Proyectos/Projects";
import Fondo from "./assets/Fondo.png"
import SobreMi from "./components/SobreMi/SobreMi";

function App() {

  const bgImage = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    position: 'relative',
  }
  

  return (
    <div style={bgImage} className="overflow-hidden min-h-screen">
      <Navbar />
      <Hero />
      <Projects/>
      <SobreMi/>
    </div>
  )
}

export default App
