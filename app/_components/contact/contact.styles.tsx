'use client'

import styled from 'styled-components'

import { Section as SharedSection, Inner as SharedInner } from '../_shared/styles'

export const Section = styled(SharedSection)`
  height: 100%;
  min-height: fit-content;
  width: 100%;
  flex-direction: column;
  align-items: center;
`

export const Inner = styled(SharedInner)`
  flex-direction: column;
`
