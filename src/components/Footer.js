import React from 'react';
import { IoMdGitBranch } from 'react-icons/io';

import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="page-footer">
      <a href="https://github.com/cksiazak/ksiazak.dev">
        This website was created and designed by Christopher Ksiazak{' '}
        <IoMdGitBranch />
      </a>
    </footer>
  );
};

export default Footer;
