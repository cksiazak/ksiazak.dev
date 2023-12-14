import { useState, useEffect } from 'react'
import styled from 'styled-components'

// styling
import { theme, useTheme } from '../../theme'

// components
import ThemeSwitcher from './Navigation/ThemeSwitcher'
import NavLink from './Navigation/NavLink'

import * as ga from '../../../lib/ga'

const NavSection = styled.section<{
  scrolled: boolean
  isDarkMode: boolean
}>`
  width: 100%;
  position: fixed;
  top: 0;
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0px 2px 10px -2px rgba(42, 42, 42, 0.6)' : 'none'};
  background: ${({ scrolled, isDarkMode }) => {
    if (!scrolled) {
      return 'transparent'
    } else if (scrolled) {
      return isDarkMode ? '#403F4C' : theme.lightMode.background
    }
  }};
  transition: ${theme.global.transitionTime};
  z-index: 10;
`

const InnerNav = styled.div<{
  isDarkMode: boolean
}>`
  width: ${theme.global.pageWidth};
  max-width: ${theme.global.maxPageWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3rem;
  padding: 15px 0px;

  a {
    text-decoration: none;
    color: ${({ isDarkMode }) => (isDarkMode ? 'white' : 'black')};
    transition: ${theme.global.transitionTime};
    &:hover {
      color: ${theme.lightMode.linkHover};
    }
  }

  @media (max-width: 1650px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1350px) {
    width: 80%;
  }

  @media (max-width: 1250px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    width: 95%;
  }
`

const Nav = styled.nav`
  width: 10%;

  ul {
    list-style: none;
    display: flex;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;

    li {
      cursor: pointer;
    }
  }
`

const Navigation = () => {
  const { isDarkMode, themeController } = useTheme()
  const [isAwayFromTop, setIsAwayFromTop] = useState(false)

  const scrollListener = () => {
    const position = window.pageYOffset
    setIsAwayFromTop(position > 20)

    if (position > 20) {
      ga.event({
        action: 'scrolled down page',
        params: { distance: 'More than 20' },
      })
    }

    if (position > 200) {
      ga.event({
        action: 'scrolled down page',
        params: { distance: 'More than 200' },
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  const handleisDarkModePress = () =>
    ga.event({
      action: 'Clicked dark mode',
      params: { isDarkMode_preference: isDarkMode ? 'on' : 'off' },
    })

  const handleThemePress = () => {
    themeController()

    handleisDarkModePress()
  }

  return (
    <NavSection scrolled={isAwayFromTop} isDarkMode={isDarkMode}>
      <InnerNav isDarkMode={isDarkMode}>
        <NavLink title='<CK/>' href='/' />
        <Nav>
          <ul>
            <ThemeSwitcher
              icon={isDarkMode ? '🌙' : '☀️'}
              themeController={handleThemePress}
            />
          </ul>
        </Nav>
      </InnerNav>
    </NavSection>
  )
}

export default Navigation
