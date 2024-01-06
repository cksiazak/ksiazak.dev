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
  font-size: 1.75rem;
  padding: 10px 0px;
  color: white;
  transition: 0.2s;

  &:hover {
    color: blue;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.35rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;

  li {
    a {
      display: flex;
      text-decoration: none;
      font-size: 3.25rem;
      padding: 10px 15px;
      transition: 0.2s;
      color: white;

      @media (max-width: 500px) {
        font-size: 2.5rem;
      }

      &:hover {
        color: blue;
      }
    }
  }
`
