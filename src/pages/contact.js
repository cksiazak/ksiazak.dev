import React, { Fragment } from 'react';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';
import Footer from '../components/Global/Footer';

const metadata = {
  title: 'Christopher Ksiazak - Contact',
  desc: 'My contact information and ways to reach me'
};

const Contact = () => {
  return (
    <Fragment>
      <Head metadata={metadata} />
      <Navigation />
      <PageWrapper>
        Contact
        {/* Placeholder */}
      </PageWrapper>
      <Footer />
    </Fragment>
  );
};

export default Contact;
