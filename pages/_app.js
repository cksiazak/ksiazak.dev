import React, { Fragment } from 'react';
import App from 'next/app';
import Router from 'next/router';
import withGA from 'next-ga';

// Global Components
import Navigation from '../components/Global/Navigation';
import Footer from '../components/Global/Footer';

// Themes
import ThemeContext from '../lib/ThemeContext';
import { normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../constants/themes';

const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;

    @media (max-width: 450px) {
      letter-spacing: 0px;
    }
  }

  html {
    font-size: 62.5%;
    background: ${(props) => (!props.darkMode ? 'white' : '#2D3047')};
    transition: ${theme.global.transitionTime};
    -webkit-backface-visibility: hidden;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

class MyApp extends App {
  constructor() {
    super();
    this.state = {
      darkMode: false,
    };

    this.themeController = this.themeController.bind(this);
  }

  componentDidMount() {
    const data = window.localStorage.getItem('dark-mode');
    const isDark = JSON.parse(data);

    if (isDark) {
      this.setState({
        darkMode: isDark,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.darkMode !== prevState.darkMode) {
      window.localStorage.setItem(
        'dark-mode',
        JSON.stringify(this.state.darkMode)
      );
    }
  }

  themeController() {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  }

  render() {
    const { Component, pageProps } = this.props;

    const themeValue = {
      darkMode: this.state.darkMode,
      themeController: this.themeController,
    };

    return (
      <ThemeContext.Provider value={themeValue}>
        <GlobalStyle darkMode={this.state.darkMode} />
        <Navigation />
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
        <Footer />
      </ThemeContext.Provider>
    );
  }
}

export default withGA('UA-154417992-1', Router)(MyApp);
