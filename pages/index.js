import { Fragment } from 'react';
import Head from 'next/head';

import Heading from '../components/Heading';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto&family=Rubik&display=swap'
          rel='stylesheet'
        />
        <meta charSet='utf-8' />
        <title>Christopher Ksiazak - Full Stack Software Developer</title>
        <meta
          name='description'
          content='A personal developer portfolio and art piece by Christopher Ksiazak'
        />
        <meta
          name='keywords'
          content='Christopher Ksiazak, Chris Ksiazak, Ksiazak, developer, web development, frontend, backend, full stack, software developer, software engineer'
        />
      </Head>
      <Heading />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </Fragment>
  );
};

export default Home;
