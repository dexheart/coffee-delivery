import styled from 'styled-components'

export const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 4px;
  width: 23rem;
  height: 6.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  .mainContainer {
    display: flex;
  }
`
export const ImageCoffeContainer = styled.div`
  margin-right: 1.25rem;
  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeNameContainer = styled.div`
  span {
    /* Text/Regular M */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    /* identical to box height, or 21px */

    display: flex;
    align-items: center;

    /* Base/Subtitle */

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const OrderButtonContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
  padding: 0.5rem;

  width: 4.5rem;
  height: 2rem;

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    text-align: center;

    color: ${(props) => props.theme['base-title']};
  }

  img {
    cursor: pointer;

    transition: ease 0.2s;

    &:hover {
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.3);
      transition: 0.2s ease;
    }
  }
`
export const RemoveButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0.5rem;
  gap: 0.25rem;

  width: 5.6875rem;
  height: 2rem;

  /* Base/Button */

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  img {
    height: 1rem;
    width: 1rem;
  }

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;
    /* or 19px */

    text-transform: uppercase;

    /* Base/Text */

    color: ${(props) => props.theme['base-text']};
  }
`
export const WraperButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`
export const PriceContainer = styled.div`
  span {
    /* Text/Bold M */

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 130%;
    /* identical to box height, or 21px */

    display: flex;
    align-items: center;
    text-align: right;

    /* Base/Text */

    color: ${(props) => props.theme['base-text']};
  }
`
