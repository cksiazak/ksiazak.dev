import React, { Fragment } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

// Components
import Navigation from '../components/Navigation/Navigation';
import Header from '../components/Header/Header';
import About from '../components/About/About';

const AppWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
`;

const Home = () => (
  <Fragment>
    <Head>
      <meta charSet='utf-8' />
      <title>Christopher Ksiazak</title>
      <meta
        name='description'
        content='A personal developer portfolio and art piece by Christopher Ksiazak'
      />
      <meta
        name='keywords'
        content='Christopher Ksiazak, Chris Ksiazak, Ksiazak, developer, web, frontend, backend, react, engineer, nodejs, javascript'
      />
    </Head>
    <Navigation />
    <AppWrapper>
      <Header />
      <About />
    </AppWrapper>
  </Fragment>
);

export default Home;
