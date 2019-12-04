import React from 'react';
import { Element } from 'react-scroll';
import {
  IoLogoGithub,
  IoMdMail,
  IoLogoTwitter,
  IoMdDocument,
  IoLogoLinkedin
} from 'react-icons/io';

import '../styles/contact.scss';

const Contact = () => {
  return (
    <Element name="Contact" className="section-container contact-section">
      <h2 className="section-header">Contact</h2>
      <div className="contact-container">
        <p className="contact-text">
          I'm currently available and actively looking for positions. Feel free
          to reach out to me, even if you just want to talk. I'll get back to
          you as soon as possible.
        </p>
        <div className="contact-links">
          <a href="mailto:cksiazak@gmail.com" title="Email">
            <IoMdMail />
          </a>
          <a
            href="./Cksiazak_Resume.pdf"
            title="Resume"
            download="cksiazak_resume.pdf"
          >
            <IoMdDocument />
          </a>
          <a href="https://github.com/cksiazak" title="Github">
            <IoLogoGithub />
          </a>
          <a href="https://www.linkedin.com/in/cksiazak/" title="LinkedIn">
            <IoLogoLinkedin />
          </a>
          <a href="https://twitter.com/cksiazak_dev" title="Twitter">
            <IoLogoTwitter />
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
