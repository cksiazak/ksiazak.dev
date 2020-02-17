import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

// Global Components
import Navigation from '../components/Navigation';

// Themes
import ThemeContext from '../utils/ThemeContext';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeContext.Provider value={null}>
        <GlobalStyle />
        <Navigation />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    );
  }
}

export default withGA('UA-154417992-1', Router)(MyApp);
