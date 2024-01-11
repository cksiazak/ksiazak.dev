'use client'

import styled from 'styled-components'

import { Section as SharedSection, Inner as SharedInner } from '../_shared/styles'

export const Section = styled(SharedSection)`
  height: 100%;
  width: 100%;
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
  }

  > div {
    width: 80%;
  }
`

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`
