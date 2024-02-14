import styled from 'styled-components'

type RevealWrapperProps = {
  width?: 'fit-content' | '100%'
}

export const RevealDiv = styled.div<RevealWrapperProps>`
  position: relative;
  width: ${({ width = 'fit-content' }) => width};
`

export const RevealLi = styled.li<RevealWrapperProps>`
  position: relative;
  width: ${({ width = 'fit-content' }) => width};
`
