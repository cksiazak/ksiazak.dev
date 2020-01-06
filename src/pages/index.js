import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

const indexData = [
  { url: '/about', title: 'About Me', desc: '' },
  { url: '/experience', title: 'Experience', desc: '' },
  { url: '/projects', title: 'Projects', desc: '' },
  { url: '/contact', title: 'Contact Me', desc: '' }
];

const Index = () => {
  return (
    <Fragment>
      <IndexMetaData />
      <div>
        {indexData.map((page, i) => (
          <div key={i}>
            <Link to={page.url}>{page.title}</Link>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

const IndexMetaData = () => (
  <Helmet>
    <title>Christopher Ksiazak</title>
  </Helmet>
);

export default Index;
