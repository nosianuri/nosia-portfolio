import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles";
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Skills } from './components/Skills';
import { Projects } from './components/Project';
import Contact from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Particles
    className='particles-canvas'
    params={{
      particles: {
        number: {
          value: 30,
          density: {
            enable: true,
            value_area: 900,
          }
        },
        shape: {
          type: "square",
          stroke: {
            width: 6,
            color: "#f9ab00"
          }
        }
      },
    }}
     />
    <Navbar />
    <Header />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
