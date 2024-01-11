'use client'

import styled from 'styled-components'

import { Section as SharedSection, Inner as SharedInner } from '../_shared/styles'

export const Section = styled(SharedSection)`
  height: 100%;
  min-height: fit-content;
  width: 100%;
  margin: 100px 0px 300px;
  flex-direction: column;
  align-items: center;
`

export const Inner = styled(SharedInner)`
  flex-direction: column;
`

export const ContactHead = styled.h2`
  color: white;
`

export const Sentence = styled.p`
  width: 75%;
  text-align: center;
  margin: 50px 0px 75px;
  font-size: 1.65rem;
  color: white;
`

export const Email = styled.a`
  font-size: 1.7rem;
  color: white;
  text-decoration: none;
  padding: 20px;
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  text-align: center;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    font-weight: bold;
    color: ${({ theme }) => theme.main.bottomBlue};
  }
`
