import React, { useEffect } from 'react';
import Navigation from './Components/navigation/navigation';
import Heading from './Components/heading/heading';
import About from './Components/about/about';
import Experience from './Components/experience/experience';
import Projects from './Components/projects/projects';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
import './App.scss';

function App() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Heading />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
