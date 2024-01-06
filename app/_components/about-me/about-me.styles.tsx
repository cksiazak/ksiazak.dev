'use client'

import styled from 'styled-components'

export const Inner = styled.div`
  width: ${({ theme }) => theme.size.max.innerWidth };
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const AboutWrapper = styled.div`
  width: 40%;
`

export const SelfieWrapper = styled.div`
  box-shadow: '3px 3px 8px 0px rgba(42, 42, 42, 0.6)'
  width: 40%;
`
