import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import Helmet from 'react-helmet';

// import components
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Header from '../components/Experience/ExperienceHeader';
import Experiences from '../components/Experience/Experiences';
import NextPage from '../components/Global/NextPage';
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
        <meta
          name='keywords'
          content='Christopher Ksiazak, Chris Ksiazak, Ksiazak, developer, web developer, frontend, backend, react, engineer, nodejs, experiences, work history, javascript'
        />
      </Helmet>
      <TransitionPortal>
        <Navigation />
      </TransitionPortal>
      <PageWrapper>
        <Header />
        <Experiences />
        <NextPage
          heading="See what I'm working on"
          link={{ url: '/projects', linkTitle: 'Projects' }}
          sectBg='#D36582'
          titleCol="#20063b"
          seeNext='View projects'
        />
      </PageWrapper>
      <Footer />
    </Fragment>
  );
};

export default Experience;
