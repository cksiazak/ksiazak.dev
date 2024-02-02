import styled from 'styled-components'

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
  background-color: #0e1111;
`

export const Inner = styled.div`
  width: ${({ theme }) => theme.size.innerWidth};
  max-width: 1536px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`

export const BranchLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  color: ${({ theme }) => theme.main.offWhite};
  transition: 0.2s;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.main.softRed};
  }
`
