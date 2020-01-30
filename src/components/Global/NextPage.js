import React from 'react';
import { createUseStyles } from 'react-jss';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const useStyles = createUseStyles({
  sectionStyle: ({ sectBg }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px',
    background: sectBg,
    width: '100%'
  }),
  sectionHeading: ({ titleCol }) => ({
    fontSize: '3.5rem',
    padding: '25px 0px',
    fontFamily: "'Courgette', cursive",
    color: titleCol,
    textAlign: 'center',
    '@media (max-width: 950px)': {
      fontSize: '3rem'
    },
    '@media (max-width: 650px)': {
      fontSize: '2.75rem',
      width: '90%'
    }
  }),
  buttonStyle: ({ sectBg }) => ({
    textDecoration: 'none',
    fontSize: '2rem',
    padding: '15px 25px',
    margin: '25px 0px',
    border: '2px solid',
    borderRadius: '10px',
    color: 'rgba(233, 230, 255, 1.0)',
    transition: '0.3s',
    fontFamily: "'Rubik', sans-serif",
    '&:hover': {
      background: 'rgba(233, 230, 255, 0.4)',
      color: sectBg,
      border: '2px solid rgba(233, 230, 255, 1.0)'
    },
    '@media (max-width: 950px)': {
      fontSize: '1.75rem'
    },
    '@media (max-width: 650px)': {
      fontSize: '1.5rem'
    }
  })
});

const NextPage = ({ heading, link, seeNext, sectBg, titleCol }) => {
  const { sectionStyle, sectionHeading, buttonStyle } = useStyles({
    sectBg,
    titleCol
  });
  return (
    <section className={sectionStyle}>
      <h4 className={sectionHeading}>{heading}</h4>
      <AniLink
        cover
        to={link.url}
        duration={0.75}
        direction='right'
        title={link.title}
        className={buttonStyle}
      >
        {seeNext}
      </AniLink>
    </section>
  );
};

export default NextPage;
