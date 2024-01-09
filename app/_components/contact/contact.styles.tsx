'use client'

import styled from 'styled-components'

import { Section as SharedSection, Inner as SharedInner } from '../_shared/styles'

export const Section = styled(SharedSection)`
  height: 100%;
  min-height: fit-content;
  width: 100%;
  margin: 100px 0px;
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
  width: 40%;
  text-align: center;
  padding-bottom: 25px;
  color: white;
`

export const Email = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;

  &:hover {
    color: white;
  }
`