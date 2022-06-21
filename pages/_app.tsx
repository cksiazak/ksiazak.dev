import { useEffect, FC } from "react"
import { AppProps } from 'next/app'
import { useRouter } from "next/router"
import { normalize } from "styled-normalize"
import styled, { createGlobalStyle } from "styled-components"

import * as ga from "../src/lib/ga"

// Global Components
import Navigation from "../src/components/Global/Navigation"
import Footer from "../src/components/Global/Footer"

// Themes
import ThemeProvider, { theme, useTheme } from "../src/theme"

// Hooks

const GlobalStyle = createGlobalStyle<{
  darkMode: boolean
}>`
  ${normalize};

  * {
    box-sizing: border-box;
    font-family: "Inter",-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue", sans-serif;
  }

  html {
    font-size: 62.5%;
    background: ${({ darkMode }) =>
      !darkMode ? "linear-gradient(0deg ,#f0f3f5, #fff);" : "#2D3047"};
    transition: ${theme.global.transitionTime};
    -webkit-backface-visibility: hidden;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const { darkMode } = useTheme()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <Navigation />
      <Content>
        <Component {...pageProps} />
      </Content>
      <Footer />
    </>
  )
}

const AppWrapper: FC<AppProps> = (props) => {
  return (
    <ThemeProvider>
      <MyApp {...props} />
    </ThemeProvider>
  )
}

export default AppWrapper
