import React from 'react';

import '../styles/contact.scss';

const Contact = () => {
  return (
    <section className="contact-me">
      <h3 className="contact-header">Contact</h3>
      <p className="contact-text">
        I'm currently available and am actively looking for positions. Feel free
        to reach out to me, even if you just want to talk. I'll get back to you
        as soon as possible.
      </p>
      <a href="mailto:cksiazak@gmail.com" className="contact-link">
        Talk to me
      </a>
    </section>
  );
};

export default Contact;
