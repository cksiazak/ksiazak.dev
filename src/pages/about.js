import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import Helmet from 'react-helmet';

// import components
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Header from '../components/About/AboutHeader';
import FrameOfMind from '../components/About/FrameOfMind';
import AboutMain from '../components/About/AboutMain';
import Technologies from '../components/About/Technologies';
// Contact Component Here
import Footer from '../components/Global/Footer';
import { Link } from 'gatsby';

const About = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <title>'Christopher Ksiazak - About Me'</title>
        <meta
          name='description'
          content='A history about me, my values, and what I can do'
        />
      </Helmet>
      <TransitionPortal>
        <Navigation />
      </TransitionPortal>
      <PageWrapper>
        <Header />
        <FrameOfMind />
        <AboutMain />
        <Technologies />
      </PageWrapper>
      <Footer />
    </Fragment>
  );
};

export default About;
