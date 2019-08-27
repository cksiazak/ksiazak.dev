import React from 'react';
import Fade from 'react-reveal/Fade';
import { Element } from 'react-scroll';
import './contact.scss';

const contact = () => {
  return (
    <Element name="contact" className="contact-box section-padding">
      <Fade bottom>
        <div className="contact-container">
          <h4 className="want-to-chat">Want to chat?</h4>
          <p className="reach-out">
            Feel free to reach out! I enjoy meeting new people and I'll do my absolute best to get back to you in a timely manner. :)
          </p>
          <a href="mailto:cksiazak@gmail.com" className="contact-button">
            Contact Me
          </a>
        </div>
      </Fade>
    </Element>
  );
};

export default contact;
