import {
  InputDataContainer,
  OrderDataContainer,
  PaymentInformation,
  PaymentChoiceContainer,
  TextBox,
  UserInformation,
  Wrapper,
  BaseInputElements,
  ItensOfOrderContainer,
  PriceInformationContainer,
} from './styles'

import { CoffeContext } from '../../contexts/CoffeContexts'

import cashIcon from '../../assets/OrdersIcons/cash_Icon.svg'
import pinIcon from '../../assets/OrdersIcons/pin_Icon.svg'

import creditIcon from '../../assets/OrdersIcons/creditcard_Icon.svg'
import debitcardIcon from '../../assets/OrdersIcons/debitcard_Icon.svg'
import moneyIcon from '../../assets/OrdersIcons/money_Icon.svg'
import { useContext } from 'react'
import { ListOfUserOrderItens } from './ListOfUserOrderItens'

export function Orders() {
  const { userOrder } = useContext(CoffeContext)

  const sumOfPriceItens = userOrder.reduce(function (accumulator, curValue) {
    // eslint-disable-next-line prettier/prettier
    return (accumulator + (curValue.price * curValue.amount))
  }, 0)

  const totalValue = sumOfPriceItens + 3.5

  return (
    <Wrapper>
      <OrderDataContainer>
        <h2>Complete seu pedido</h2>

        <UserInformation>
          <TextBox>
            <div className="TextBoxWithIcon">
              <div>
                <img src={pinIcon} alt="" />
              </div>
              <div>
                <span className="title">Endereço de Entrega</span>
                <span className="subtitle">
                  Informe o endereço onde deseja receber seu pedido
                </span>
              </div>
            </div>
          </TextBox>

          <InputDataContainer>
            <form>
              <div>
                <BaseInputElements
                  type="text"
                  placeholder="CEP"
                  className="cep"
                />
              </div>

              <div>
                <BaseInputElements
                  type="text"
                  placeholder="Rua"
                  className="rua"
                />
              </div>

              <div>
                <BaseInputElements
                  type="text"
                  placeholder="Número"
                  className="numero"
                />

                <BaseInputElements
                  type="text"
                  placeholder="Complemento"
                  className="complemento"
                />
              </div>

              <div>
                <BaseInputElements
                  type="text"
                  placeholder="Bairro"
                  className="bairro"
                />

                <BaseInputElements
                  type="text"
                  placeholder="Cidade"
                  className="cidade"
                />

                <BaseInputElements
                  type="text"
                  placeholder="UF"
                  className="uf"
                />
              </div>
            </form>
          </InputDataContainer>
        </UserInformation>
        <PaymentInformation>
          <div className="wrapper">
            <div className="imgTextBox">
              <div className="imgBox">
                <img src={cashIcon} alt="" />
              </div>
              <div className="infoBox">
                <span className="title">Pagamento</span>
                <span className="subtitle">
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </div>
            <PaymentChoiceContainer>
              <button>
                <img src={creditIcon} alt="" />
                <span>Cartão de Crédito</span>
              </button>
              <button>
                <img src={debitcardIcon} alt="" />
                <span>Cartão de Débito</span>
              </button>
              <button>
                <img src={moneyIcon} alt="" />
                <span>Dinheiro</span>
              </button>
            </PaymentChoiceContainer>
          </div>
        </PaymentInformation>
      </OrderDataContainer>

      <div>
        <h2>Cafés Selecionados</h2>

        <ItensOfOrderContainer>
          <ListOfUserOrderItens />
          <PriceInformationContainer>
            <div>
              <span>Total de itens</span>
              <span className="price">R$ {sumOfPriceItens.toFixed(2)}</span>
            </div>
            <div>
              <span>Entrega</span>
              <span className="price">R$ 3,50</span>
            </div>
            <div>
              <span className="total">Total</span>
              <span className="total">R$ {totalValue.toFixed(2)}</span>
            </div>
          </PriceInformationContainer>
          <button>
            <span>Confirmar Perdido</span>
          </button>
        </ItensOfOrderContainer>
      </div>
    </Wrapper>
  )
}
