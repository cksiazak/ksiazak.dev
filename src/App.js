import React from 'react';
import { Element } from 'react-scroll';
import Navigation from './Components/navigation/navigation';
import Heading from './Components/heading/heading';
import About from './Components/about/about';
import Experience from './Components/experience/experience';
import Projects from './Components/projects/projects';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Heading />
        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
      <Footer />
    </div>
  );
}

export default App;
