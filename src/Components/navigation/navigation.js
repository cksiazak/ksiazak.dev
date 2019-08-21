import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import './navigation.scss';

const Navigation = () => {
  const navLinks = [
    { name: 'About', fadeDown: 400, linkTo: 'about' },
    { name: 'Experience', fadeDown: 600, linkTo: 'experience' },
    { name: 'Projects', fadeDown: 800, linkTo: 'projects' },
    { name: 'Contact', fadeDown: 1000, linkTo: 'contact' }
  ];

  return (
    <section className="navigation">
      <nav className="navbar-container">
        <Fade top delay={200}>
          <a href="https://ksiazak.dev" className="top-left-logo">
            CK
          </a>
        </Fade>
        <div className="navigation-links">
          {navLinks.map((link, id) => (
            <Fade top delay={link.fadeDown} key={id}>
              <Link
                activeClass="active"
                to={link.linkTo}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {link.name}
              </Link>
            </Fade>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
