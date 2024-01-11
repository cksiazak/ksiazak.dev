import { styled } from 'styled-components'

export const Outer = styled.div`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Details = styled.div`
  padding: 20px;
  width: auto;
  font-size: 1.35rem;

  @media (max-width: 1800px) {
    width: 80%;
  }

  @media (max-width: 1700px) {
    font-size: 1.2rem;
    width: 90%;
  }

  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: auto;
  }
`

export const Meta = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(42, 42, 42, 0.6);

  h3 {
    margin: 0px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.main.softBlack};
    font-size: 1.8rem;

    @media (max-width: 1700px) {
      font-size: 1.6rem;
    }
  }

  span {
    color: ${({ theme }) => theme.main.softBlack};
    font-size: 1.35rem;

    @media (max-width: 1600px) {
      font-size: 1.2rem;
    }

    @media (max-width: 1000px) {
      font-size: 1.1rem;
    }

    @media (max-width: 700px) {
      font-size: 1rem;
    }

    @media (max-width: 500px) {
      font-size: 0.9rem;
    }

    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
`

export const ImageWrapper = styled.div`
  min-width: 40%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
`
