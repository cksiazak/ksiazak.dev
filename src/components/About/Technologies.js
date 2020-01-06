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
    background: '#EF5B5B',
    boxShadow: 'inset 0px 2px 10px 1px rgba(42,42,42,0.4)'
  },
  techHeader: {
    fontSize: '3.5rem',
    borderBottom: '2px solid red',
    padding: '25px 0px 10px'
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
    fontSize: '2.2rem'
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
