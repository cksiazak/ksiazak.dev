'use client'

import styled from 'styled-components'

import { Section as SharedSection, Inner as SharedInner } from '../_shared/styles'

export const Section = styled(SharedSection)`
  height: 100%;
  width: 100%;
  margin: 100px 0px;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 0px;
`

export const Inner = styled(SharedInner)`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.main.offWhite};
    text-align: center;
  }
`
