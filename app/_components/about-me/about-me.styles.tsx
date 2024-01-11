'use client'

import styled from 'styled-components'

import { Section } from '../_shared/styles'

export const Outer = styled(Section)`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  box-shadow: inset 1px 1px 4px -1px rgba(42, 42, 42, 0.8);
`

export const AboutWrapper = styled.div`
  width: 60%;

  h3 {
    text-align: center;
  }

  @media (max-width: 1600px) {
    width: 70%;
  }
`

export const Skills = styled.div`
  margin-top: 50px;
  
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

      @media (max-width: 1366px) {
        margin: 0px 10px 10px 0px;
      }
    }
  }
`

export const SelfieWrapper = styled.div`
  padding-left: 100px;

  img {
    width: 100%;
    height: auto;
    border-radius: 25px 0px;
  }

  @media (max-width: 1600px) {
    img {
      width: 90%;
    }
  }

  @media (max-width: 1400px) {
    padding-left: 50px;
  }
`
