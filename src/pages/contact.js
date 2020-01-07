import React, { Fragment } from 'react';
import { TransitionPortal } from 'gatsby-plugin-transition-link';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Footer from '../components/Global/Footer';

const metadata = {
  pageTitle: 'Christopher Ksiazak - Contact',
  pageDesc: 'My contact information and ways to reach me'
};

const Contact = () => {
  return (
    <Fragment>
      <Head metadata={metadata} />
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
