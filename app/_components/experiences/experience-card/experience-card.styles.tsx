'use client'

import styled from 'styled-components'

export const Card = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  margin: 75px 0px 0px;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
  color: #0e1111;
  border-radius: 15px;

  @media (max-width: 700px) {
    width: 90%;
    margin: 50px 0px 0px;
  }

  ul {
    padding: 0px;
  }

  p {
    margin: 10px 0px;
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

export const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
  margin-bottom: 5px;
  border-bottom: 2px solid rgba(42, 42, 42, 0.6);

  h3 {
    margin: 0px;
    color: ${({ theme }) => theme.main.softBlack};
    font-size: 1.6rem;

    @media (max-width: 1700px) {
      font-size: 1.4rem;
    }
  }

  span {
    color: ${({ theme }) => theme.main.softBlack};
    font-size: 1.25rem;

    @media (max-width: 1600px) {
      font-size: 1.1rem;
    }

    @media (max-width: 1000px) {
      font-size: 1rem;
    }

    @media (max-width: 700px) {
      font-size: 0.9rem;
    }

    @media (max-width: 500px) {
      font-size: 0.8rem;
    }

    @media (max-width: 400px) {
      font-size: 0.7rem;
    }
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  margin-top: 15px;
  border-top: 2px solid rgba(42, 42, 42, 0.6);

  > a {
    color: #0e1111;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    align-items: center;
    font-weight: bold;

    &: hover {
      color: ${({ theme }) => theme.main.softRed};
    }
  }
`
