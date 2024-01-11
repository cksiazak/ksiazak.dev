import styled from 'styled-components'

export const Heading = styled.section`
  height: 100dvh;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div:first-of-type {
    position: absolute;
    width: 350px;
    z-index: 0;
    margin-top: -265px;

    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }
`

export const HeadingText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.main.offWhite};
  text-shadow: 1px 3px 3px #000;
  margin-top: 240px;
  margin-bottom: 30px;

  & > span {
    font-size: 1.8rem;
    z-index: 1;
  }

  & > h1 {
    margin: 0px 0px 15px;
    font-size: 6rem;
    z-index: 1;
  }
`

export const Typing = styled.a`
  position: absolute;
  bottom: 50px;
  scroll-behavior: smooth;
  text-decoration: none;
  cursor: url('/assets/imdoingmypart.jpg'), pointer;
  animation-name: fadeIn;
  animation-duration: 0.5s;
`
