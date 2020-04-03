import React, { Fragment } from 'react';
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

// Global Components
import Navigation from '../components/Navigation';

// Themes
import ThemeContext from '../lib/ThemeContext';
import { normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    transition: 0.2s;
  }

  html {
    font-size: 62.5%;
    background: ${props => (!props.darkMode ? 'white' : '#2D3047')}
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 65px auto 0px;
`;

class MyApp extends App {
  constructor() {
    super();
    this.state = {
      darkMode: false
    };

    this.themeController = this.themeController.bind(this);
  }

  themeController() {
    this.setState(prevState => ({
      darkMode: !prevState.darkMode
    }));
  }

  render() {
    const { Component, pageProps } = this.props;

    const themeValue = {
      darkMode: this.state.darkMode,
      themeController: this.themeController
    };

    return (
      <ThemeContext.Provider value={themeValue}>
        <GlobalStyle darkMode={this.state.darkMode} />
        <Navigation />
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </ThemeContext.Provider>
    );
  }
}

export default withGA('UA-154417992-1', Router)(MyApp);
