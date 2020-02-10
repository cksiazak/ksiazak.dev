import React from 'react';
import styled from 'styled-components';

const AboutMain = () => {
  return (
    <section>
      <div>
        <h2>About Me</h2>
        <div>
          <div>
            <p>
              Welcome! I'm Chris, a developer born and raised in El Paso, TX. I
              enjoy learning new technologies and applying that knowledge in
              designing and creating web applications.
            </p>
            <p>
              Currently, I serve as a Project Coordinator at C3i Solutions and I
              collaborate with our client remotely across various time zones.
              Before this, I attended the University of Texas at El Paso (UTEP).
              I realized that Electrical Engineering wasn't a topic that I quite
              enjoyed, so I joined the Full Stack Web Development program at
              Lambda School, which has provided me valuable experience in
              application development with distributed teams.
            </p>
          </div>
          {/* IMAGE GOES HERE */}
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
