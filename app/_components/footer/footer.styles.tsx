import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`

export const Inner = styled.div`
  width: ${({ theme }) => theme.size.innerWidth};
  max-width: 1536px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BranchLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  padding: 10px 0px;
  color: white;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.main.softRed};
  }
`
