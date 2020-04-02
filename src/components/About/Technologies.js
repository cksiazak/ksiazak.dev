import React from 'react';
import { createUseStyles } from 'react-jss';

const tech = [
  'HTML5',
  'CSS',
  'Javascript',
  'LESS/SCSS/JSS',
  'React',
  'Redux',
  'Gatsby',
  'Nextjs',
  'Nodejs',
  'SQL',
  'Postgres',
  'Ruby on Rails',
  'Elasticsearch'
];

const useStyles = createUseStyles({
  mainTechnology: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#C5D1EB',
    boxShadow: 'inset 0px 2px 8px -2px rgba(42,42,42,0.4)',
    padding: '50px 0px'
  },
  techHeader: {
    fontSize: '3rem',
    borderBottom: '2px solid',
    padding: '25px 0px 10px',
    color: '#153b50',
    fontFamily: "'Permanent Marker', cursive",
    '@media (max-width: 1000px)': {
      fontSize: '2.5rem'
    },
    '@media (max-width: 750px)': {
      fontSize: '2rem'
    },
    '@media (max-width: 650px)': {
      borderBottom: '0px',
      textAlign: 'center'
    },
    '@media (max-width: 550px)': {
      width: '75%'
    }
  },
  listStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '25px 0px',
    width: '35%',
    '@media (max-width: 1000px)': {
      width: '50%'
    },
    '@media (max-width: 750px)': {
      width: '70%'
    },
    '@media (max-width: 600px)': {
      width: '90%'
    }
  },
  listItem: {
    padding: '15px',
    fontSize: '2.2rem',
    color: '#011502',
    fontFamily: "'Rubik', sans-serif",
    '@media (max-width: 1000px)': {
      fontSize: '2rem'
    },
    '@media (max-width: 750px)': {
      fontSize: '1.75rem'
    },
    '@media (max-width: 650px)': {
      fontSize: '1.50rem'
    }
  }
});

const Technologies = () => {
  const { mainTechnology, techHeader, listStyle, listItem } = useStyles();
  return (
    <section className={mainTechnology}>
      <h2 className={techHeader}>
        Here are a few technologies I'm working with
      </h2>
      <ul className={listStyle}>
        {tech.map((item, i) => (
          <li key={i} className={listItem}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Technologies;
