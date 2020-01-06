import React from 'react';
import { Link } from 'gatsby';
import PageTransition from 'gatsby-plugin-page-transitions';
import Head from '../components/Head';

// Reset CSS
import '../styles/global.css';
// import new css
import { useStyles } from '../styles/indexStyles';
// component data
import { indexData } from '../data/indexData';

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
    <PageTransition>
      <Head pageTitle={metadata.title} pageDesc={metadata.desc} />
      <nav className={navContainer}>
        <div className={navigationList}>
          {indexData.map((page, i) => (
            <Link to={page.url} key={i} className={navItem}>
              <h2 className={pageHeading}>{page.title}</h2>
              <hr className={pageBreak} />
              <p className={linkDesc}>{page.desc}</p>
            </Link>
          ))}
        </div>
      </nav>
    </PageTransition>
  );
};

export default Index;
