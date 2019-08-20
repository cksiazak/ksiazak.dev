import React from 'react';
import Heading from './Components/heading/heading';
import Navigation from './Components/navigation/navigation';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container">
        <Heading />
        {/* 
        About
        Experience
        Projects
        Contact
        */}
      </div>
    </div>
  );
}

export default App;
