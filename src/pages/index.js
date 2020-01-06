import React from 'react';
import { Link } from 'gatsby';
import HeadData from '../components/HeadData';

// Reset CSS
import '../styles/global.css';
// import new css
import { useStyles } from '../styles/indexStyles';
// component data
import { indexData } from '../data/indexData';

const metadata = {
  title: 'Christopher Ksiazak',
  desc: 'A personal developer portfolio and art piece by Christopher Ksiazak'
}

const Index = () => {
  const {
    navContainer,
    navigationList,
    navItem,
    pageHeading,
    pageBreak
  } = useStyles();

  return (
    <div>
      <HeadData pageTitle={metadata.title} pageDesc={metadata.desc} />
      <nav className={navContainer}>
        <div className={navigationList}>
          {indexData.map((page, i) => (
            <Link to={page.url} key={i} className={navItem}>
              <h2 className={pageHeading}>{page.title}</h2>
              <hr className={pageBreak} />
              <p>Test</p>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Index;
