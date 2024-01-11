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
      font-size: 2.4rem;
      padding: 10px 15px;
      transition: 0.2s;
      color: ${({ theme }) => theme.main.offWhite};

      &:hover {
        color: ${({ theme }) => theme.main.softRed};
        transform: scale(1.2);
      }

      @media (max-width: 1600px) {
        font-size: 2.2rem;
      }

      @media (max-width: 1000px) {
        font-size: 1.8rem;
      }

      @media (max-width: 700px) {
        font-size: 1.6rem;
      }

      @media (max-width: 500px) {
        font-size: 1.5rem;
      }

      @media (max-width: 400px) {
        font-size: 1.4rem;
      }
    }
  }
`
