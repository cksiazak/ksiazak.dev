'use client'

import styled from 'styled-components'

import { Section as SharedSection, Inner as SharedInner } from '../_shared/styles'

export const Section = styled(SharedSection)`
  height: 100%;
  width: 100%;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Inner = styled(SharedInner)`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.main.offWhite};
    text-align: center;
    font-size: 2.1rem;

    @media (max-width: 1700px) {
      font-size: 1.8rem;
    }

    @media (max-width: 1200px) {
      margin: 10px 0px;
    }

    @media (max-width: 1100px) {
      text-align: center;
    }
  }
`
