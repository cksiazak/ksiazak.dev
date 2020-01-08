import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';
import Helmet from 'react-helmet';

// import components
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Footer from '../components/Global/Footer';

const Contact = () => {
  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Christopher Ksiazak - Contact</title>
        <meta
          name='description'
          content='My contact information and ways to reach me'
        />
      </Helmet>
      <TransitionPortal>
        <Navigation />
      </TransitionPortal>
      <PageWrapper>
        Contact
        {/* Placeholder */}
      </PageWrapper>
      <Footer />
    </Fragment>
  );
};

export default Contact;
