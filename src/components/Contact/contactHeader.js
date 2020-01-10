import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  headerWrap: {
    display: 'flex',
    justifyContent: 'center',
    padding: '150px 0px 125px',
    background: '#993955'
  },
  innerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    '@media (max-width: 1100px)': {
      width: '75%'
    },
    '@media (max-width: 650px)': {
      width: '90%'
    }
  },
  header: {
    fontSize: '3.75rem',
    paddingBottom: '50px',
    fontFamily: "'Courgette', cursive",
    '@media (max-width: 650px)': {
      fontSize: '3rem'
    }
  },
  underHeader: {
    fontSize: '2.8rem',
    textAlign: 'center',
    lineHeight: '125%',
    fontFamily: "'Rubik', sans-serif",
    '@media (max-width: 650px)': {
      fontSize: '2.25rem'
    }
  },
  resumeButton: {
    textDecoration: 'none',
    fontSize: '2.5rem',
    padding: '15px 25px',
    margin: '50px 0px 0px',
    border: '2px solid',
    borderRadius: '10px',
    color: '#22223B',
    transition: '0.3s',
    fontFamily: "'Rubik', sans-serif",
    '&:hover': {
      background: 'rgba(233, 230, 255, 0.4)'
    },
    '@media (max-width: 650px)': {
      fontSize: '2.25rem'
    }
  }
});

const ContactHeader = () => {
  const {
    headerWrap,
    innerContainer,
    header,
    underHeader,
    resumeButton
  } = useStyles();

  return (
    <section className={headerWrap}>
      <div className={innerContainer}>
        <h2 className={header}>Thank you for visiting.</h2>
        <p className={underHeader}>
          I'm currently available and actively looking for positions. Feel free
          to download my resume and reach out to me at my contact points below,
          even if you just want to talk. I'll get back to you as soon as
          possible.
        </p>
        <a
          href='./Cksiazak_Resume.pdf'
          title='Resume'
          download='cksiazak_resume.pdf'
          className={resumeButton}
        >
          Download My Resume
        </a>
      </div>
    </section>
  );
};

export default ContactHeader;
