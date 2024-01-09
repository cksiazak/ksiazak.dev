import styled from 'styled-components'

type RevealWrapperProps = {
  width?: 'fit-content' | '100%'
}

export const RevealWrapper = styled.div<RevealWrapperProps>`
  position: relative;
  width: ${({ width = 'fit-content' }) => width};
`
