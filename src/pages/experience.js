import React from 'react';

// import components
import Head from '../components/Global/Head';
import Navigation from '../components/Global/Navigation';
import PageWrapper from '../components/Global/PageWrapper';

const metadata = {
  title: 'Christopher Ksiazak - Experiences',
  desc: 'A few of my professional roles and accomplishments'
};

const Experience = () => {
  return (
    <div>
      <Head metadata={metadata} />
      <Navigation />
      <PageWrapper>
        Experience
        {/* Placeholder */}
      </PageWrapper>
    </div>
  );
};

export default Experience;
