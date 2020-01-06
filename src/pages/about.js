import React, { Fragment } from 'react';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Header from '../components/About/AboutHeader';
import FrameOfMind from '../components/About/FrameOfMind';
import AboutMain from '../components/About/AboutMain';
import Technologies from '../components/About/Technologies';
import Goals from '../components/About/Goals';
// Contact Component Here
import Footer from '../components/Global/Footer';

const metadata = {
  title: 'Christopher Ksiazak - About Me',
  desc: 'A history about me, my values, and what I can do'
};

const About = () => {
  return (
    <Fragment>
      <Head metadata={metadata} />
      <Navigation />
      <PageWrapper>
        <Header />
        <FrameOfMind />
        <AboutMain />
        <Technologies />
        <Goals />
      </PageWrapper>
      <Footer />
    </Fragment>
  );
};

export default About;
