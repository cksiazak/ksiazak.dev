import React from 'react';
import './footer.scss';
import { IoMdGitBranch } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <a href="https://github.com/cksiazak/ksiazak.dev">Designed and built by Christopher Ksiazak</a>
        <IoMdGitBranch className="footer-logo" size="1rem" />
      </div>
    </footer>
  );
};

export default Footer;
