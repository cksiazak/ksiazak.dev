import React from 'react';
import {
  IoMdMail,
  IoMdDocument,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sectionWrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    padding: '50px 0px',
    '& h3': {
      fontSize: '3.5rem',
      margin: '25px 0px',
      borderBottom: '2px solid',
      color: '#E9E6FF'
    }
  },
  linkWrapper: {
    display: 'flex',
    flexDirection: 'column',
    '& a': {
      display: 'flex',
      fontSize: '3rem',
      padding: '25px 0px',
      textDecoration: 'none',
      color: '#993955',
      transition: '0.3s',
      '&:hover': {
        color: '#A3C3D9'
      }
    }
  }
});

const AdditionalLinks = () => {
  const { sectionWrap, linkWrapper } = useStyles();
  return (
    <section className={sectionWrap}>
      <h3>Points of Contact</h3>
      <div className={linkWrapper}>
        <a href='mailto:cksiazak@gmail.com' title='Email'>
          <IoMdMail /> Cksiazak@gmail.com
        </a>
        <a href='https://github.com/cksiazak' title='Github'>
          <IoLogoGithub />
          @cksiazak
        </a>
        <a href='https://www.linkedin.com/in/cksiazak/' title='LinkedIn'>
          <IoLogoLinkedin />
          cksiazak
        </a>
        <a href='https://twitter.com/cksiazak_dev' title='Twitter'>
          <IoLogoTwitter />
          @cksiazak_dev
        </a>
      </div>
    </section>
  );
};

export default AdditionalLinks;
