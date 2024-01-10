import { styled } from 'styled-components'

export const Outer = styled.div`
  background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;
`

export const Meta = styled.div`
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(42, 42, 42, 0.6);

  h3 {
    margin: 0px;
    margin-bottom: 5px;
  }
`

export const Details = styled.div`
  padding: 20px;
`
