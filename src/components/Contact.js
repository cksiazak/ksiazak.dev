import React from 'react';
import { Element } from 'react-scroll';
import { IoLogoGithub, IoMdMail, IoLogoTwitter } from 'react-icons/io';

import '../styles/contact.scss';

const Contact = () => {
  return (
    <Element name="Contact" className="section-container contact-section">
      <h2 className="section-header">Contact</h2>
      <div className="contact-container">
        <p className="contact-text">
          I'm currently available and am actively looking for positions. Feel
          free to reach out to me, even if you just want to talk. I'll get back
          to you as soon as possible.
        </p>
        <div className="contact-links">
          <a href="https://github.com/cksiazak">
            <IoLogoGithub />
          </a>
          <a href="mailto:cksiazak@gmail.com">
            <IoMdMail />
          </a>
          <a href="https://twitter.com/cksiazak_dev">
            <IoLogoTwitter />
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
