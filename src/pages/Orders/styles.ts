import styled from 'styled-components'

interface PaymentMethodButtonProps {
  paymentMethod: boolean
}

export const Wrapper = styled.div`
  display: flex;

  margin-top: 2.5rem;

  h2 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.9375rem;
  }
`
export const OrderDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`

export const BaseContainerElements = styled.div`
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
`

export const TextBox = styled.div`
  .title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-text']};
  }
`

export const UserInformation = styled(BaseContainerElements)`
  width: 40rem;
  height: 23.25rem;
  gap: 2rem;

  .TextBoxWithIcon {
    display: flex;
    img {
      margin-right: 0.5rem;
    }
  }
`

export const PaymentInformation = styled(BaseContainerElements)`
  width: 40rem;
  height: 12.9375rem; // 12.9375rem
  margin-top: 0.75rem;

  display: flex;
  flex-direction: column;

  .wrapper {
    display: flex;
    flex-direction: column;

    .imgTextBox {
      display: flex;
    }
  }

  .imgBox {
    width: 1.375rem;
    height: 1.375rem;
    margin-right: 0.5rem;
  }

  .infoBox {
    width: 35rem;
  }

  .title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .subtitle {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 130%;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme['base-text']};
  }
`

export const PaymentChoiceContainer = styled.div`
  width: 35rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 0.75rem;
`

export const PaymentMethodButton = styled.button<PaymentMethodButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;

  width: 11.17rem;
  height: 3.1875rem;

  /* Base/Button */

  background: ${(props) =>
    props.paymentMethod
      ? props.theme['purple-light']
      : props.theme['base-button']};

  border-radius: 6px;

  cursor: pointer;

  border: ${(props) =>
    props.paymentMethod ? `1px solid ${props.theme.purple}` : 0};

  /* Brand/Purple Light */

  //background: ${(props) => props.theme['purple-light']};
  /* Brand/Purple */

  //border: 1px solid ${(props) => props.theme.purple};

  span {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 160%;

    text-transform: uppercase;

    /* Base/Text */

    color: ${(props) => props.theme['base-text']};
  }
`

export const BaseInputElements = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-input']};

  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  height: 2.625rem;
`

export const InputDataContainer = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 1rem;

    height: 13.5rem;

    .cep {
      width: 12.5rem;
    }

    .rua {
      width: 35rem;
    }

    .numero {
      width: 12.5rem;
    }

    .complemento {
      width: 21.75rem;
    }

    .bairro {
      width: 12.5rem;
    }
    .cidade {
      width: 16rem;
    }

    .uf {
      width: 5rem;
    }

    div {
      display: flex;
      gap: 0.75rem;
    }
  }
`

export const ItensOfOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2.5rem;
  gap: 1.5rem;

  width: 28rem;
  height: auto;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;

  hr {
    width: 23rem;
    height: 0px;

    border: 1px solid ${(props) => props.theme['base-button']};
  }

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;
    gap: 0.25rem;

    width: 23rem;
    height: 2.875rem;

    /* Brand / Yellow */

    background: ${(props) => props.theme.yellow};
    border-radius: 6px;

    border: 0px;

    cursor: pointer;

    transition: 0.2s ease;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }

    &:disabled {
      background: ${(props) => props.theme['yellow-light']};
    }

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 160%;

      text-transform: uppercase;

      color: ${(props) => props.theme.white};
      font-stretch: 100;
    }
  }
`

export const PriceInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 0.75rem;

  width: 23rem;
  height: 5.75rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 0.5rem;

    width: 23rem;

    span {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 130%;

      display: flex;
      align-items: center;
      text-align: right;

      color: ${(props) => props.theme['base-text']};
    }
    .price {
      font-size: 1rem;
    }
    .total {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 700;
    }
  }
`
