import React, { useContext } from 'react';
import styled from 'styled-components';

// components
import {
  IoMdGitBranch,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosMail,
  IoMdDocument,
} from 'react-icons/io';
import { theme } from '../../constants/themes';
import ThemeContext from '../../lib/ThemeContext';

const FooterMain = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 25px;
`;

const FooterInner = styled.div`
  width: ${theme.global.pageWidth};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BranchLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 10px 0px;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  transition: ${theme.global.transitionTime};

  &:hover {
    color: ${theme.lightMode.linkHover};
  }
`;

const IconList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;

  li {
    a {
      display: flex;
      text-decoration: none;
      font-size: 3rem;
      padding: 10px 15px;
      transition: ${theme.global.transitionTime};
      color: ${(props) => (props.darkMode ? 'white' : 'black')};

      &:hover {
        color: ${theme.lightMode.linkHover};
      }
    }
  }
`;

const LinkIcon = ({ component: Component, href, title }) => {
  return (
    <li>
      <a href={href} title={title}>
        <Component />
      </a>
    </li>
  );
};

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <FooterMain>
      <FooterInner>
        <IconList darkMode={darkMode}>
          <LinkIcon
            component={IoLogoLinkedin}
            href='https://linkedin.com/in/cksiazak'
            title='LinkedIn'
          />
          <LinkIcon
            component={IoLogoGithub}
            href='https://github.com/cksiazak'
            title='Github'
          />
          <LinkIcon
            component={IoLogoTwitter}
            href='https://twitter.com/cksiazak_dev'
            title='Twitter'
          />
          <LinkIcon
            component={IoIosMail}
            href='mailto:cksiazak@gmail.com'
            title='Mail'
          />
          <LinkIcon
            component={IoMdDocument}
            href='/assets/Cksiazak_Resume.pdf'
            title='Resume'
          />
        </IconList>
        <BranchLink
          title='Ksiazak.dev Repo'
          href='https://github.com/cksiazak/ksiazak.dev'
          darkMode={darkMode}
        >
          This website was created and designed by Christopher Ksiazak
          <span>
            <IoMdGitBranch />
          </span>
        </BranchLink>
      </FooterInner>
    </FooterMain>
  );
};

export default Footer;
