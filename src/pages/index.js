import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Head from '../components/Global/Head';

// Reset CSS
import '../styles/global.css';
// import new css
import { useStyles } from '../styles/indexStyles';
// component data
import { navData } from '../data/navData';

const metadata = {
  title: 'Christopher Ksiazak',
  desc: 'A personal developer portfolio and art piece by Christopher Ksiazak'
};

const Index = () => {
  const {
    navContainer,
    navigationList,
    navItem,
    pageHeading,
    pageBreak,
    linkDesc
  } = useStyles();

  return (
    <Fragment>
      <Head metadata={metadata} />
      <nav className={navContainer}>
        <div className={navigationList}>
          {navData.map((page, i) => (
            <Link to={page.url} key={i} className={navItem} title={page.title}>
              <h2 className={pageHeading}>{page.title}</h2>
              <hr className={pageBreak} />
              <p className={linkDesc}>{page.desc}</p>
            </Link>
          ))}
        </div>
      </nav>
    </Fragment>
  );
};

export default Index;
