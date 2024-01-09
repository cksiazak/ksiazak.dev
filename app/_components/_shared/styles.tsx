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
  width: ${({ theme }) => theme.size.max.innerWidth };
  display: flex;
  align-items: center;
  justify-content: space-between;
`
