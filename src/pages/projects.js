import React from 'react';

// import components
import Head from '../components/Head';
import Navigation from '../components/Navigation';

const metadata = {
  title: 'Christopher Ksiazak - Projects',
  desc: 'Building new projects using new technologies'
};

const Projects = () => {
  return (
    <div>
      <Head pageTitle={metadata.title} pageDesc={metadata.desc} />
      <Navigation />
    </div>
  );
};

export default Projects;
