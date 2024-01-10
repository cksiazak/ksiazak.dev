import { styled } from 'styled-components'

export const Nav = styled.nav<{
  isscrolled?: boolean
}>`
  position: fixed;
  right: 0px;
  z-index: 3;
  top: 0;
  transition: 0.3s;
  margin-right: ${({ isscrolled }) => isscrolled ? 0 : -100}px;
  border-radius: 0px 0px 0px 10px;
  overflow: hidden;

  ul {
    z-index: 5;
    position: relative;
    flex-direction: column;
  }
`

export const Blur = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  z-index: 4;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`
