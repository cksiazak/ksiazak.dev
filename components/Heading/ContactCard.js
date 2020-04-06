import React from 'react';
import { IoLogoTwitter, IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

import styled from 'styled-components';
import { theme } from '../../constants/themes';

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
`;

const CardTitle = styled.span`
  font-size: 2.75rem;
  color: white;
  font-weight: bold;
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  padding: 10px 0px;
  margin: 0px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  font-size: 3.5rem;

  li {
    a {
      display: flex;
      color: white;
      transition: ${theme.global.transitionTime};
      filter: drop-shadow( 0px 0px 0px rgba(0, 0, 0, .7));

      &:hover {
        transform: scale(1.05);
        filter: drop-shadow( 2px 2px 1px rgba(0, 0, 0, .7));
      }
    }
  }
`;

const LinkButton = styled.a`
  color: white;
  text-decoration: none;
  font-size: 2rem;
  padding: 10px 5px;
  border: 2px solid white;
  width: 100%;
  text-align: center;
  margin: 5px 0px;
  border-radius: 5px;
  transition: ${theme.global.transitionTime};

  &:hover {
    background: white;
    color: #5183f5;
  }
`;

const ContactCard = () => {
  return (
    <CardWrapper>
      <CardTitle>Let's Connect</CardTitle>
      <SocialList>
        <li>
          <a href='https://www.linkedin.com/in/cksiazak/' title='LinkedIn'>
            <IoLogoLinkedin />
          </a>
        </li>
        <li>
          <a href='https://github.com/cksiazak' title='Github'>
            <IoLogoGithub />
          </a>
        </li>
        <li>
          <a href='https://twitter.com/cksiazak_dev' title='Twitter'>
            <IoLogoTwitter />
          </a>
        </li>
      </SocialList>
      <LinkButton
        href='/assets/Cksiazak_Resume.pdf'
        title='Resume'
        download='cksiazak_resume.pdf'
      >
        Resume
      </LinkButton>
      <LinkButton href='mailto:cksiazak@gmail.com' title='Email'>
        Email Me
      </LinkButton>
    </CardWrapper>
  );
};

export default ContactCard;
