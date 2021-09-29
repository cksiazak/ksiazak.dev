import React from 'react';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

import styled from 'styled-components';
import { theme } from '../../constants/themes';

import * as ga from '../../lib/ga';

const CardWrapper = styled.div`
  position: absolute;
  top: 225px;
  right: 20.5%;
  background: radial-gradient(circle at 20% 20%, #5183f5 25%, #4640ff 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 25px;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
  border-radius: 5px;

  @media (max-width: 1650px) {
    right: 17.5%;
  }

  @media (max-width: 1350px) {
    right: 15%;
  }
  @media (max-width: 1250px) {
    right: 10%;
  }
  @media (max-width: 1150px) {
    right: 7.5%;
  }
  @media (max-width: 900px) {
    padding: 20px 15px;
  }
  @media (max-width: 800px) {
    top: 475px;
    left: 20%;
    right: 20%;
  }
  @media (max-width: 450px) {
    top: 400px;
  }
`;

const CardTitle = styled.span`
  font-size: 3.75rem;
  color: white;
  font-weight: bold;

  @media (max-width: 1650px) {
    font-size: 2.75rem;
  }

  @media (max-width: 900px) {
    font-size: 2.25rem;
  }
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  padding: 10px 0px;
  margin: 0px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 4.5rem;

 

  li {
    a {
      display: flex;
      color: white;
      transition: ${theme.global.transitionTime};
      filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.7));

      &:hover {
        transform: scale(1.05);
        filter: drop-shadow(2px 2px 1px rgba(0, 0, 0, 0.7));
      }
    }
  }

  @media (max-width: 1650px) {
    font-size: 3rem;
  }

  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
`;

const LinkButton = styled.a`
  color: white;
  text-decoration: none;
  font-size: 3rem;
  padding: 10px 5px;
  border: 2px solid white;
  width: 100%;
  text-align: center;
  margin: 10px 0px;
  border-radius: 5px;
  transition: ${theme.global.transitionTime};

  &:hover {
    background: white;
    color: #5183f5;
  }

  @media (max-width: 1650px) {
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    font-size: 1.75rem;
  }
`;

const ContactCardLink = ({ href, title, Component }) => {

  const handleCardLinkClick = () => ga.event({ action: 'Click link in contact card', params: { link: title } });

  return (
    <li>
      <a href={href} title={title} onClick={handleCardLinkClick}>
        <Component />
      </a>
    </li>
  )
}

const ContactCard = () => {
  const handleResumeClick = () => ga.event({ action: 'Click resume in contact card' });
  const handleEmailClick = () => ga.event({ action: 'Click email in contact card' });

  return (
    <CardWrapper>
      <CardTitle>Let's Connect</CardTitle>
      <SocialList>
        <ContactCardLink href='https://www.linkedin.com/in/cksiazak/' title='LinkedIn' Component={IoLogoLinkedin} />
        <ContactCardLink href='https://github.com/cksiazak' title='Github' Component={IoLogoGithub} />
        <ContactCardLink href='https://twitter.com/cksiazak_dev' title='Twitter' Component={IoLogoTwitter} />
      </SocialList>
      <LinkButton
        href='/assets/Cksiazak_Resume.pdf'
        title='Resume'
        download='cksiazak_resume.pdf'
        onClick={handleResumeClick}
      >
        Resume
      </LinkButton>
      <LinkButton href='mailto:cksiazak@gmail.com' title='Email' onClick={handleEmailClick}>
        Email Me
      </LinkButton>
    </CardWrapper>
  );
};

export default ContactCard;
