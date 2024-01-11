'use client'

import styled from 'styled-components'

import { Section as SharedSection, Inner as SharedInner } from '../_shared/styles'

export const Section = styled(SharedSection)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0px;
`

export const Inner = styled(SharedInner)`
  display: flex;
  align-items: center;
  flex-direction: column;

  h2 {
    color: ${({ theme }) => theme.main.offWhite};
  }
`

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`

export const DetailWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`

export const Sentence = styled.p`
  width: 75%;
  text-align: center;
  margin: 50px 0px 75px;
  font-size: 1.65rem;
  color: white;
`

export const GithubLink = styled.a`
  font-size: 1.7rem;
  color: white;
  text-decoration: none;
  padding: 20px;
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  text-align: center;
  border-radius: 15px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    font-weight: bold;
    color: ${({ theme }) => theme.main.bottomBlue};
  }
`

