import React from 'react';
import Helmet from 'react-helmet';

const HeadData = ({ pageTitle, pageDesc }) => {
  return (
    <Helmet>
      <meta charSet='utf-8' />
      <title>{pageTitle}</title>
      <meta name='description' content={pageDesc} />
    </Helmet>
  );
};

export default HeadData;
