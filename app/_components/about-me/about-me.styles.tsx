'use client'

import styled from 'styled-components'

import { Section } from '../_shared/styles'

export const Outer = styled(Section)`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  box-shadow: inset 1px 1px 4px -1px rgba(42, 42, 42, 0.8);
`

export const AboutWrapper = styled.div`
  width: 60%;

  h2 {
    font-size: 1.75rem;
  }

  p {
    font-size: 1.1rem;
  }
`

export const SelfieWrapper = styled.div`
  box-shadow: '3px 3px 8px 0px rgba(42, 42, 42, 0.6)'
  width: 40%;
`
