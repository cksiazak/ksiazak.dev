import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainTechnology: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  techHeader: {
    fontSize: '3.5rem',
    borderBottom: '2px solid red',
    paddingBottom: '5px'
  },
  listStyle: {
    display: 'flex',
    flexDirection: 'column',
    padding: '25px 0px',
    width: '45%'
  },
  rowStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '25px 0px',
    alignItems: 'center'
  },
  listItemStyle: {
    padding: '10px'
  }
});

const Technologies = () => {
  const {
    mainTechnology,
    techHeader,
    listStyle,
    rowStyle,
    listItemStyle
  } = useStyles();
  return (
    <section className={mainTechnology}>
      <h2 className={techHeader}>
        Here are a few technologies I'm working with
      </h2>
      <ul className={listStyle}>
        <div className={rowStyle}>
          <li className={listItemStyle}>HTML5</li>
          <li className={listItemStyle}>CSS (LESS/SCSS)</li>
          <li className={listItemStyle}>Javascript</li>
        </div>
        <div className={rowStyle}>
          <li className={listItemStyle}>React</li>
          <li className={listItemStyle}>Redux</li>
          <li className={listItemStyle}>Router</li>
        </div>
        <div className={rowStyle}>
          <li className={listItemStyle}>NodeJs</li>
          <li className={listItemStyle}>SQL</li>
          <li className={listItemStyle}>
            Relational
            <br />
            Databases
          </li>
        </div>
      </ul>
    </section>
  );
};

export default Technologies;
