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

  ul {
    padding: 0px;
  }

  p {
    margin: 10px 0px;
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
