import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

import ThemeContext from '../lib/ThemeContext';
import { GlobalStyle } from '../styles/GlobalStyles';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeContext.Provider value={null}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeContext.Provider>
    );
  }
}

export default withGA('UA-154417992-1', Router)(MyApp);
