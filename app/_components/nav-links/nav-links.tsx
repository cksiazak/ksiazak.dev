'use client'

import { useEffect, useState } from 'react'

import Externals from '../_shared/externals'
import * as Styled from './nav-links.styles'

const NavLinks = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollListener = () => {
    const position = window.scrollY
    setIsScrolled(position > 500)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <Styled.Nav $isScrolled={isScrolled}>
      <Externals />
      <Styled.Blur />
    </Styled.Nav>
  )
}

export default NavLinks
