import {
  OrderConfirmationContainer,
  OrderConfirmationContainerWithIllustration,
  OrderInformation,
  OrderInformationContainer,
} from './styles'

import moneyIcon from '../../assets/FinishedOrderIcons/money_Icon.svg'
import pinIcon from '../../assets/FinishedOrderIcons/pin_Icon.svg'
import clockIcon from '../../assets/FinishedOrderIcons/clock_Icon.svg'

import illustration from '../../assets/FinishedOrderIcons/Illustration.svg'

export function FinishedOrders() {
  return (
    <>
      <OrderConfirmationContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </OrderConfirmationContainer>

      <OrderConfirmationContainerWithIllustration>
        <OrderInformationContainer>
          <p>
            <img src={pinIcon} alt="" />
            <span>
              Entrega em{' '}
              <OrderInformation>
                Rua João Daniel Martinelli, 102
              </OrderInformation>
              <br />
              Farrapos - Porto Alegre, RS
            </span>
          </p>

          <p>
            <img src={clockIcon} alt="" />
            <span>
              Previsão de entrega
              <br />
              <OrderInformation>20 min - 30 min</OrderInformation>
            </span>
          </p>

          <p>
            <img src={moneyIcon} alt="" />

            <span>
              Pagamento na entrega
              <br />
              <OrderInformation>Cartão de Crédito</OrderInformation>
            </span>
          </p>
        </OrderInformationContainer>

        <div>
          <img src={illustration} alt="" />
        </div>
      </OrderConfirmationContainerWithIllustration>
    </>
  )
}
