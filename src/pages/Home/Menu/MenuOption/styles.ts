import styled from 'styled-components'

export const MenuOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  margin-bottom: 0.5rem;

  > img {
    margin-top: -1.25rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  > h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};

    margin-bottom: 0.5rem;
  }

  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin: 0 1.25rem;
    margin-bottom: 2rem;
  }
`
export const FeaturesContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  margin: 0.75rem 0 1rem 0;

  span {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 0.5rem;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;

    text-transform: uppercase;

    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const BuyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 13rem;

  > span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};

    > span {
      font-family: 'Baloo 2';

      font-weight: 800;
      font-size: 1.5rem;
    }
  }
`
export const QuantityContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.5rem;

  width: 4.5rem;
  height: 2.375rem;

  margin-left: 1.4375rem;

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
export const BuyButtonContainer = styled.div`
  margin-left: 0.5rem;
  img {
    display: flex;
    align-items: center;
    width: 2.375rem;
    height: 2.375rem;
    cursor: pointer;

    transition: ease 0.2s;

    &:hover {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
      transition: 0.2s ease;
    }
  }
`
