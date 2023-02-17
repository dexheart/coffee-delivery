import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div`
  margin: 4rem 0 2.5rem 0;

  > h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};

    margin-bottom: 0.25rem;
  }

  > h3 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    font-stretch: 100;
  }
`
export const OrderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px 36px;
  border: 1px solid black;

  width: 32.875rem;
  height: 16.875rem;

  margin-right: 6.375rem;

  /*border-image-source: linear-gradient(
    102.89deg,
    #dbac2c 2.61%,
    #8047f8 98.76%
  );*/

  > p {
    display: flex;
    align-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-text']};

    > span {
      margin-left: 0.75rem;
    }
  }
`

export const OrderInformation = styled.span`
  font-weight: 700;
`
export const OrderConfirmationContainerWithIllustration = styled.div`
  display: flex;
  align-items: center;
`
