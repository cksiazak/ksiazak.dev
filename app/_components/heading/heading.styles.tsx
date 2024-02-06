import styled from 'styled-components'

export const Heading = styled.header`
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

    @media (max-width: 1600px) {
      width: 300px;
      margin-top: -200px;
    }

    @media (max-width: 1000px) {
      width: 250px;
      margin-top: -175px;
    }

    @media (max-width: 700px) {
      width: 225px;
      margin-top: -150px;
    }

    @media (max-width: 500px) {
      width: 175px;
    }

    @media (max-width: 400px) {
      margin-top: -170px;
    }

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
  text-shadow: 3px 3px 3px #000;
  margin-top: 240px;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    margin-top: 200px;
  }

  @media (max-width: 600px) {
    margin-top: 175px;
  }

  @media (max-width: 500px) {
    margin-top: 100px;
    margin-bottom: 15px;
  }

  @media (max-width: 400px) {
    margin-top: 75px;
  }


  > span {
    z-index: 1;
    font-size: 1.7rem;

    @media (max-width: 1600px) {
      font-size: 1.5rem;
    }

    @media (max-width: 1000px) {
      font-size: 1.35rem;
    }

    @media (max-width: 700px) {
      font-size: 1.25rem;
    }

    @media (max-width: 500px) {
      font-size: 1.1rem;
    }

    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }

  > h1 {
    margin: 0px 0px 15px;
    z-index: 1;
    font-size: 6rem;

    @media (max-width: 1600px) {
      font-size: 5rem;
    }

    @media (max-width: 1000px) {
      font-size: 4rem;
    }

    @media (max-width: 700px) {
      font-size: 3.5rem;
    }

    @media (max-width: 600px) {
      font-size: 3rem;
    }

    @media (max-width: 500px) {
      font-size: 2.5rem;
      margin: 0px 0px 5px;
    }

    @media (max-width: 400px) {
      font-size: 2rem;
    }

    @media (max-width: 350px) {
      font-size: 1.75rem;
    }
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
  font-weight: bold;
  font-size: 1.4rem;

  @media (max-width: 1600px) {
    font-size: 1.35rem;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }

  @media (max-width: 700px) {
    font-size: 1.1rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    font-size: 0.75rem;
  }
`
