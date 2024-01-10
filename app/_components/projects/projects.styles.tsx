'use client'

import styled from 'styled-components'

import { Section as SharedSection, Inner as SharedInner } from '../_shared/styles'

export const Section = styled(SharedSection)`
  height: 100%;
  width: 100%;
  margin: 50px 0px;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Inner = styled(SharedInner)`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 50px 0px;

  h2 {
    color: ${({ theme }) => theme.main.offWhite};
    text-align: center;
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
