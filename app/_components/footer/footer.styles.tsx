import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`

export const Inner = styled.div`
  width: ${({ theme }) => theme.size.max.innerWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BranchLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  padding: 10px 0px;
  color: white;
  transition: 0.2s;

  &:hover {
    color: blue;
  }
`
