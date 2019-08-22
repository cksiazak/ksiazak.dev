import React from 'react';
import Flip from 'react-reveal/Flip';
import { Link } from 'react-scroll';

import './navigation.scss';

const Navigation = () => {
  const navLinks = [
    { name: 'About', fadeDown: 200, linkTo: 'about' },
    { name: 'Experience', fadeDown: 300, linkTo: 'experience' },
    { name: 'Projects', fadeDown: 400, linkTo: 'projects' },
    { name: 'Contact', fadeDown: 500, linkTo: 'contact' }
  ];

  return (
    <section className="navigation">
      <nav className="navbar-container">
        <Flip top delay={100}>
          <a href="https://ksiazak.dev" className="top-left-logo">
            CK
          </a>
        </Flip>
        <div className="navigation-links">
          {navLinks.map((link, id) => (
            <Flip top delay={link.fadeDown} key={id}>
              <Link
                className="nav-link"
                activeClass="active"
                to={link.linkTo}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                isDynamic={true}
              >
                {link.name}
              </Link>
            </Flip>
          ))}
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
