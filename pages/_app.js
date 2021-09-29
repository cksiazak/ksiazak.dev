import React, { useEffect, Fragment, useState } from 'react';
import { useRouter } from 'next/router'

import * as ga from '../lib/ga'

// Global Components
import Navigation from '../components/Global/Navigation';
import Footer from '../components/Global/Footer';

// Themes
import ThemeContext from '../lib/ThemeContext';
import { normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../constants/themes';

// Hooks
import { usePrevious } from '../hooks/usePrevious'

const GlobalStyle = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue", sans-serif;
  }

  html {
    font-size: 62.5%;
    background: ${(props) => (!props.darkMode ? 'linear-gradient(0deg ,#f0f3f5, #fff);' : '#2D3047')};
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

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const [darkMode, setDarkMode] = useState(false)
  const prevDarkMode = usePrevious(darkMode)

  const themeController = () => setDarkMode(prevState => !prevState)

  useEffect(() => {
    const data = window.localStorage.getItem('dark-mode');
    const isDark = JSON.parse(data);

    if (isDark) {
      setDarkMode(isDark)
    }
  }, []);

  useEffect(() => {
    if (darkMode !== prevDarkMode) {
      window.localStorage.setItem(
        'dark-mode',
        JSON.stringify(darkMode)
      );
    }
  }, [darkMode, prevDarkMode])

  const themeValue = {
    darkMode,
    themeController,
  };

  return (
    <ThemeContext.Provider value={themeValue}>
      <GlobalStyle darkMode={darkMode} />
      <Navigation />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
      <Footer />
    </ThemeContext.Provider>
  )
}

export default MyApp
