import React, { Fragment } from 'react';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Header from '../components/About/Header';

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
      </PageWrapper>
    </Fragment>
  );
};

export default About;
