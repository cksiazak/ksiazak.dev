import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

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
    <Fragment>
      <Head metadata={metadata} />
      <TransitionPortal>
        <Navigation />
      </TransitionPortal>
      <PageWrapper>
        <Header />
        <Applications />
      </PageWrapper>
      <Footer />
    </Fragment>
  );
};

export default Projects;
