import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import Helmet from 'react-helmet';

// import components
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Header from '../components/Projects/ProjectHeader';
import Applications from '../components/Projects/Applications';
// Contact section here
import Footer from '../components/Global/Footer';

const Projects = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Christopher Ksiazak - Projects</title>
        <meta
          name='description'
          content='Building new projects using new technologies'
        />
        <meta
          name='keywords'
          content='Christopher Ksiazak, Chris Ksiazak, Ksiazak, developer, web developer, frontend, backend, react, engineer, nodejs, experiences, projects, javascript'
        />
      </Helmet>
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
