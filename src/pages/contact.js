import React from 'react';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';

const metadata = {
  title: 'Christopher Ksiazak - Contact',
  desc: 'My contact information and ways to reach me'
};

const Contact = () => {
  return (
    <div>
      <Head metadata={metadata} />
      <Navigation />
      <PageWrapper>
        Contact
        {/* Placeholder */}
      </PageWrapper>
    </div>
  );
};

export default Contact;
