import './App.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './container/Home';
import About from './container/About'
import Contact from './container/Contact';
import Navbar from './components/Navbar';
import Project from './container/Project';
import Experience from './container/Experience';
import { Element } from 'react-scroll';
import Skills from './container/Skills';
import CustomCursor from './Helper/CustomCursor';

function App() {

  return (
    <div className="App overflow-x-hidden ">
      <CustomCursor />
      <Navbar />
      <SectionWatcher />
      <Element name="home" id="home" className="section">
        <Home />
      </Element>
      <Element name="about" id="about" className="section">
        <About />
      </Element>
      <Element name="skills" id="skill" className="section">
        <Skills />
      </Element>
      <Element name="experience" id="experience" className="section">
        <Experience />
      </Element>
      <Element name="projects" id="projects" className="section">
        <Project />
      </Element>
      <Element name="contact" id="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
}

const SectionWatcher = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const sections = document.querySelectorAll('.section')
    const options = {
      root: null,
      threshold: 0.5, // 50% visibility triggers the observer
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          navigate(`/${sectionId}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };

  }, [navigate])

  return null;
}

export default App;