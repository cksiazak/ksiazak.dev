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
`

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  > div:nth-of-type(2) {
    > div {
      > div {
        flex-direction: row-reverse;

        @media (max-width: 900px) {
          flex-direction: column;
        }
      }
    }
  }
`
