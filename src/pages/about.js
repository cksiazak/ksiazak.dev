import React from 'react';

// import components
import Head from '../components/Head';
import Navigation from '../components/Navigation';

const metadata = {
  title: 'Christopher Ksiazak - About Me',
  desc: 'A history about me, my values, and what I can do'
};

const About = () => {
  return (
    <div>
      <Head pageTitle={metadata.title} pageDesc={metadata.desc} />
      <Navigation />

    </div>
  );
};

export default About;
