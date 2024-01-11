'use client'

import styled from 'styled-components'

import { Section } from '../_shared/styles'

export const Outer = styled(Section)`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  box-shadow: inset 1px 1px 4px -1px rgba(42, 42, 42, 0.8);
`

export const AboutWrapper = styled.div`
  width: 60%;

  @media (max-width: 1300px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 90%;
    padding-left: 0px;
  }

  h2 {
    font-size: 1.8rem;

    @media (max-width: 1700px) {
      font-size: 1.6rem;
    }

    @media (max-width: 1200px) {
      margin: 10px 0px;
    }

    @media (max-width: 1100px) {
      text-align: center;
    }
  }

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.main.softBlack};
    font-size: 1.6rem;

    @media (max-width: 1700px) {
      font-size: 1.4rem;
    }

    @media (max-width: 1200px) {
      margin: 10px 0px;
    }
  }

  p {
    color: ${({ theme }) => theme.main.softBlack};
    font-size: 1.25rem;

    @media (max-width: 1700px) {
      font-size: 1.1rem;
    }

    @media (max-width: 1200px) {
      font-size: 1rem;
    }
  }
`

export const Skills = styled.div`
  margin-top: 50px;

  @media (max-width: 1100px) {
    > div {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
    }
  }
  
  ul {
    list-style-type: none;
    padding: 0px;
    margin-top: 30px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    
    li {
      padding: 5px;
      margin: 0px 15px 15px 0px;
      border-radius: 5px;
      background: ${({ theme }) => theme.main.softRed};
      color: ${({ theme }) => theme.main.deepPurple};
      box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
      font-weight: bold;
      font-size: 1.1rem;

      @media (max-width: 1700px) {
        font-size: 1rem;
      }

      @media (max-width: 1200px) {
        font-size: 0.9rem;
        margin: 0px 10px 10px 0px;
      }
    }
  }
`

export const SelfieWrapper = styled.div`
  padding-left: 100px;

  @media (max-width: 1700px) {
    padding-left: 100px;
  }

  @media (max-width: 1400px) {
    padding-left: 75px;
  }

  @media (max-width: 1100px) {
    padding-left: 0px;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }

  @media (max-width: 1000px) {
    padding-left: 0px;
  }

  > div {
    @media (max-width: 1700px) {
      width: 90%;
    }

    @media (max-width: 1400px) {
      width: 80%;
    }

    @media (max-width: 1100px) {
      width: 60%;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5% 0px;
  }
`
