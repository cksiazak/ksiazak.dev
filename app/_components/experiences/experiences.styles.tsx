'use client'

import styled from 'styled-components'

import { Section as SharedSection, Inner as SharedInner } from '../_shared/styles'

export const Section = styled(SharedSection)`
  height: 100%;
  width: 100%;
  margin: 100px 0px;
  min-height: fit-content;
`

export const Inner = styled(SharedInner)`
  flex-direction: column;
`

