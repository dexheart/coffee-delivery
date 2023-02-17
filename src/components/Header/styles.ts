import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`
export const LogoImage = styled.img`
  width: 5.309375rem;
  height: 2.5rem;

  -webkit-filter: brightness(80%);
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;

  &:hover {
    -webkit-filter: brightness(100%);
  }
`
export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['purple-light']};
  border-radius: 6px;

  width: 8.9375rem;
  height: 2.375rem;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['purple-dark']};
  }
`
export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 2.375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['yellow-light']};
  border-radius: 6px;

  img {
    transition: 0.2s ease;

    &:hover {
      -webkit-transform: scale(0.9);
      -ms-transform: scale(0.9);
      transform: scale(0.9);
      transition: 0.2s ease;
    }
  }
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;

  width: 12.0625rem;
  height: 2.375rem;

  a {
    text-decoration: none;
  }
`
export const OrderCounter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 1000px;

  width: 1.25rem;
  height: 1.25rem;

  margin: -0.5rem 0 0 -0.75rem;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.75rem;
    /* identical to box height, or 16px */

    text-align: center;
    letter-spacing: -0.06em;

    /* Base/White */

    color: ${(props) => props.theme.white};
  }
`

export const CartWithCounterContainer = styled.div`
  display: flex;
`
