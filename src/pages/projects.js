import React from 'react';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';

const metadata = {
  title: 'Christopher Ksiazak - Projects',
  desc: 'Building new projects using new technologies'
};

const Projects = () => {
  return (
    <div>
      <Head metadata={metadata} />
      <Navigation />
      <PageWrapper>
        Projects
        {/* Placeholder */}
      </PageWrapper>
    </div>
  );
};

export default Projects;
