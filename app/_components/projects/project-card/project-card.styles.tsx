import { styled } from 'styled-components'

export const Outer = styled.div`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;
  margin: 30px 0px;

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
  font-size: 1.25rem;

  @media (max-width: 1800px) {
    width: 80%;
  }

  @media (max-width: 1700px) {
    font-size: 1.1rem;
    width: 90%;
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: auto;
  }
`

export const Meta = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(42, 42, 42, 0.6);

  h3 {
    margin: 0px;
    margin-bottom: 5px;
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
      font-size: 1rem;
    }

    @media (max-width: 1000px) {
      font-size: 0.9rem;
    }

    @media (max-width: 700px) {
      font-size: 0.8rem;
    }

    @media (max-width: 500px) {
      font-size: 0.7rem;
    }

    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
  }

  > div:nth-of-type(2) {
    align-items: flex-end;
  }
`

export const ImageWrapper = styled.div`
  min-width: 50%;
  object-position: center;
  object-fit: cover;

  img {
    height: 100%;
    width: 100%;
  }
`

export const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  a {
    transition: 0.2s;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.main.bottomBlue};

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.main.lightBlue};
    }
  }
`
