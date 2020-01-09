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
  'Sqlite3',
  'Postgres'
];

const useStyles = createUseStyles({
  mainTechnology: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#8C4843',
    boxShadow: 'inset 0px 2px 8px -2px rgba(42,42,42,0.4)',
    padding: '50px 0px'
  },
  techHeader: {
    fontSize: '3.5rem',
    borderBottom: '2px solid',
    padding: '25px 0px 20px',
    color: '#F0AE4E'
  },
  listStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '25px 0px',
    width: '30%'
  },
  listItem: {
    padding: '15px',
    fontSize: '2.2rem',
    color: '#011502'
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
