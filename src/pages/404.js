import React from 'react';
import { Link } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';

const ErrorPage = () => {
  return (
    <PageTransition className='error-page'>
      <h2>
        404! This page doesn't exist
        <span role='img' aria-label='sad-emoji'>
          😟
        </span>
      </h2>
      <p>
        <Link to='/'>Click here</Link> to return home.
      </p>
    </PageTransition>
  );
};

export default ErrorPage;
