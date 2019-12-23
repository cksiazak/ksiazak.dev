import React from 'react';
import { Helmet } from 'react-helmet';

const mainHead = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Chris Ksiazak</title>
      <meta
        name="description"
        content="A personal developer portfolio and art piece by Christopher Ksiazak"
      />
    </Helmet>
  );
};

export default mainHead;
