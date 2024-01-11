'use client'

import styled from 'styled-components'

export const Section = styled.section`
  min-height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Inner = styled.div`
  width: ${({ theme }) => theme.size.innerWidth };
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1536px;
  margin: 100px 0px;

  @media (max-width: 1400px) {
    width: 90%;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 1100px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 700px) {
    width: 90%;
  }
`
