import React from 'react';
import { Element } from 'react-scroll';
import Heading from './Components/heading/heading';
import Navigation from './Components/navigation/navigation';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Heading />
        <Element name="about" ></Element>
        <Element name="experience" ></Element>
        <Element name="projects" ></Element>
        <Element name="contact" ></Element>
        {/* 
        About
        Experience
        Projects
        Contact
        Footer
        */}
      </div>
    </div>
  );
}

export default App;
