import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Header from '../components/Projects/ProjectHeader';
import Applications from '../components/Projects/Applications';
// Contact section here
import Footer from '../components/Global/Footer';

const metadata = {
  title: 'Christopher Ksiazak - Projects',
  desc: 'Building new projects using new technologies'
};

const Projects = () => {
  return (
    <PageTransition>
      <Head metadata={metadata} />
      <Navigation />
      <PageWrapper>
        <Header />
        <Applications />
      </PageWrapper>
      <Footer />
    </PageTransition>
  );
};

export default Projects;
