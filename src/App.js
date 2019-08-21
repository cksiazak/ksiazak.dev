import React from 'react';
import { Element } from 'react-scroll';
import Heading from './Components/heading/heading';
import Navigation from './Components/navigation/navigation';
import Contact from './Components/contact/contact';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Heading />
        <Element name="about" >
          {/* About */}
        </Element>
        <Element name="experience" >
          {/* Experience */}
        </Element>
        <Element name="projects" >
          {/* Projects */}
        </Element>
        <Element name="contact" >
          <Contact />
        </Element>
        {/* Footer */}
      </div>
    </div>
  );
}

export default App;
