import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import Helmet from 'react-helmet';

// import components
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Header from '../components/Experience/ExperienceHeader';
import Experiences from '../components/Experience/Experiences';
// Conact Sections here
import Footer from '../components/Global/Footer';

const Experience = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Christopher Ksiazak - Experiences</title>
        <meta
          name='description'
          content='A few of my professional roles and accomplishments'
        />
      </Helmet>
      <TransitionPortal>
        <Navigation />
      </TransitionPortal>
      <PageWrapper>
        <Header />
        <Experiences />
      </PageWrapper>
      <Footer />
    </Fragment>
  );
};

export default Experience;
