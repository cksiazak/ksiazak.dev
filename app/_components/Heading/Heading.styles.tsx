import styled from 'styled-components'

export const Heading = styled.section`
  height: 100dvh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fade-in 3s;

  img {
    position: absolute;
    z-index: 0;
    border-radius: 50%;
    margin-top: -225px;
  }
`

export const HeadingText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.main.offWhite};
  text-shadow: 1px 3px 3px #000;
  margin-top: 150px;

  & > span {
    font-size: 1.6rem;
    z-index: 1;
  }

  & > h1 {
    margin: 10px;
    font-size: 5.5rem;
    z-index: 1;
  }
`

export const Typing = styled.a`
  position: absolute;
  bottom: 50px;
  scroll-behavior: smooth;
  text-decoration: none;
  cursor: url('/assets/imdoingmypart.jpg'), pointer;
`
