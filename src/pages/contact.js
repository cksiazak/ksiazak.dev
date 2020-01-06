import React from 'react';

// import components
import Head from '../components/Head';
import Navigation from '../components/Navigation';

const metadata = {
  title: 'Christopher Ksiazak - Contact',
  desc: 'My contact information and ways to reach me'
};

const Contact = () => {
  return (
    <div>
      <Head pageTitle={metadata.title} pageDesc={metadata.desc} />
      <Navigation />
    </div>
  );
};

export default Contact;
