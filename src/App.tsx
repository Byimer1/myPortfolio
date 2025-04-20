import { Navbar } from './components/Navbar';
import { ParticlesBackground } from './components/ParticlesBackground';
import { BackgroundImage } from './components/BackgroundImage';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white relative">
      <ParticlesBackground />
      <BackgroundImage>
        <Navbar />
        <main className="relative z-10">
          <section id="home">
            <Home />
          </section>
          
          <section id="about">
            <About />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section id="projects">
            <Projects />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
        </main>
      </BackgroundImage>
    </div>
  );
}

export default App;