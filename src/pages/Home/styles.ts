import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  margin: 3rem 0;

  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 130%;
  }
`
export const CoffeImg = styled.img`
  width: 29.75rem;
  height: 22.5rem;
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InfoContainer = styled.div`
  width: 35.4375rem;
  height: 5.25rem;

  margin-top: 2.125rem;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    /* identical to box height, or 21px */

    /* Base/Text */

    color: ${(props) => props.theme['base-text']};
  }
`
