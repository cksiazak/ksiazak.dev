import React from 'react';
import PageTransition from 'gatsby-plugin-page-transitions';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Header from '../components/Experience/ExperienceHeader';
import Experiences from '../components/Experience/Experiences';
// Conact Sections here
import Footer from '../components/Global/Footer';

const metadata = {
  title: 'Christopher Ksiazak - Experiences',
  desc: 'A few of my professional roles and accomplishments'
};

const Experience = () => {
  return (
    <PageTransition>
      <Head metadata={metadata} />
      <Navigation />
      <PageWrapper>
        <Header />
        <Experiences />
      </PageWrapper>
      <Footer />
    </PageTransition>
  );
};

export default Experience;
