import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Header from '../components/About/AboutHeader';
import FrameOfMind from '../components/About/FrameOfMind';
import AboutMain from '../components/About/AboutMain';
import Technologies from '../components/About/Technologies';
// Contact Component Here
import Footer from '../components/Global/Footer';
import { Link } from 'gatsby';

const metadata = {
  title: 'Christopher Ksiazak - About Me',
  desc: 'A history about me, my values, and what I can do'
};

const About = () => {
  return (
    <Fragment>
      <Head metadata={metadata} />
      <TransitionPortal>
        <Navigation />
      </TransitionPortal>
      <PageWrapper>
        <Header />
        <FrameOfMind />
        <AboutMain />
        <Technologies />
        <div>
          <h3>Would you like to know more?</h3>
          <Link to='/experience' title='experience'>
            Click here to go to the next page
          </Link>
        </div>
      </PageWrapper>
      <Footer />
    </Fragment>
  );
};

export default About;
