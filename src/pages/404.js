import React from 'react';
import { Link } from 'gatsby';

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h2>
        404! This page doesn't exist
        <span role='img' aria-label='sad-emoji'>
          😟
        </span>
      </h2>
      <p>
        <Link to='/'>Click here</Link> to return home.
      </p>
    </div>
  );
};

export default ErrorPage;
