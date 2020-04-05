import { Fragment } from 'react';
import Head from 'next/head';

import Heading from '../components/Heading';
import Projects from '../components/Projects';

const Home = () => {
  return (
    <Fragment>
      <Head>
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
      <Projects />
    </Fragment>
  );
};

export default Home;
