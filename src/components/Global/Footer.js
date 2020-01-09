import React from 'react';
import { IoMdGitBranch } from 'react-icons/io';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  footerMain: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgb(21, 23, 37)',
    width: '100%'
  },
  githubLink: {
    textDecoration: 'none',
    color: '#8C4843',
    transition: '0.3s',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    transition: '0.2s',
    fontFamily: "'Rubik', sans-serif",
    '&:hover': {
      color: '#E9E6FF'
    }
  }
});

const Footer = () => {
  const { footerMain, githubLink } = useStyles();
  return (
    <footer className={footerMain}>
      <a
        href='https://github.com/cksiazak/ksiazak.dev'
        className={githubLink}
        title='Ksiazak.dev Github'
      >
        This website was created and designed by Christopher Ksiazak{' '}
        <IoMdGitBranch />
      </a>
    </footer>
  );
};

export default Footer;
