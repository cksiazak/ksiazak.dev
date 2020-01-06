import React, { Fragment } from 'react';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';

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
        About
        {/* Placeholder */}
      </PageWrapper>
    </Fragment>
  );
};

export default About;
