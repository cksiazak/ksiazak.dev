'use client'

import styled from 'styled-components'

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 25px;
  background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  margin: 50px 0px 0px;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.6);
  color: black;

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
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(42, 42, 42, 0.6);

  h3 {
    margin: 0px;
  }
`

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  border-top: 2px solid rgba(42, 42, 42, 0.6);

  > a {
    color: black;
    text-decoration: none;
    transition: 0.2s;
    display: flex;
    align-items: center;

    &: hover {
      color: ${({ theme }) => theme.main.softRed};
      font-weight: bold;
    }
  }
`
