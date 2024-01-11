'use client'

import styled from 'styled-components'

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  width: 100%;

  @media (max-width: 1600px) {
    > * {
      h1 {
        font-size: 5.5rem;
      }
      
      h2 {
        font-size: 2.25rem;
      }
      
      p, a, span, li {
        font-size: 1.25rem;
      }
    }
  }

  @media (max-width: 1366px) {
    > * {
      h1 {
        font-size: 5rem;
      }
      
      h2 {
        font-size: 2.15rem;
      }
      
      p, a, span, li {
        font-size: 1.10rem;
      }
    }
  }
`
