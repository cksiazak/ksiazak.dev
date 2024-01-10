import styled from 'styled-components'

export const IconList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0px;
  margin: 0px;

  li {
    a {
      display: flex;
      text-decoration: none;
      font-size: 2.25rem;
      padding: 10px 15px;
      transition: 0.2s;
      color: white;

      &:hover {
        color: ${({ theme }) => theme.main.softRed};
        transform: scale(1.2);
      }
    }
  }
`
