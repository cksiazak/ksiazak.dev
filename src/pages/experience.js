import React from 'react';

// import components
import Head from '../components/Head';
import Navigation from '../components/Navigation';

const metadata = {
  title: 'Christopher Ksiazak - Experiences',
  desc: 'A few of my professional roles and accomplishments'
};

const Experience = () => {
  return (
    <div>
      <Head pageTitle={metadata.title} pageDesc={metadata.desc} />
      <Navigation />

    </div>
  );
};

export default Experience;
