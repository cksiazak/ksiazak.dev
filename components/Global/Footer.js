import React from 'react';
import styled from 'styled-components';

// components
import { IoMdGitBranch } from 'react-icons/io';
import { theme } from '../../constants/themes';

const FooterMain = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FooterInner = styled.div`
  width: ${theme.global.pageWidth};
  display: flex;
  justify-content: center;
`;

const BranchLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 10px 0px;
  color: black;
  transition: 0.2s;

  &:hover {
    color: red;
  }
`;

const Footer = () => {
  return (
    <FooterMain>
      <FooterInner>
        <BranchLink
          title='Ksiazak.dev Repo'
          href='https://github.com/cksiazak/ksiazak.dev'
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
