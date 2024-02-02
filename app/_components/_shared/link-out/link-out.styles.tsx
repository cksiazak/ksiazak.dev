'use client'

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px 0px 0px;

  h2 {
    color: ${({ theme }) => theme.main.offWhite};
    font-size: 1.8rem;
    text-align: center;

    @media (max-width: 1700px) {
      font-size: 1.6rem;
    }

    @media (max-width: 1200px) {
      margin: 10px 0px;
    }
  }

  > div {
    width: 80%;

    @media (max-width: 500px) {
      width: 100%;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const DetailWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;


  @media (max-width: 1200px) {
    width: 100%;
  }
`

export const Sentence = styled.p`
  text-align: center;
  margin: 50px 0px 75px;
  color: ${({ theme }) => theme.main.offWhite};
  font-size: 1.35rem;

  @media (max-width: 1700px) {
    font-size: 1.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.main.offWhite};
  text-decoration: none;
  padding: 20px;
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  text-align: center;
  border-radius: 15px;
  transition: 0.3s;
  font-size: 1.35rem;

  @media (max-width: 1400px) {
    font-size: 1.25rem;
    padding: 15px;
    border-radius: 10px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    font-weight: bold;
    color: ${({ theme }) => theme.main.bottomBlue};
  }
`

