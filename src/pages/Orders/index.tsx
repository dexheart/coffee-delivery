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
  PaymentMethodButton,
} from './styles'

import { CoffeContext, UserDataDelivery } from '../../contexts/CoffeContexts'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import cashIcon from '../../assets/OrdersIcons/cash_Icon.svg'
import pinIcon from '../../assets/OrdersIcons/pin_Icon.svg'

import creditIcon from '../../assets/OrdersIcons/creditcard_Icon.svg'
import debitcardIcon from '../../assets/OrdersIcons/debitcard_Icon.svg'
import moneyIcon from '../../assets/OrdersIcons/money_Icon.svg'
import { useContext, useState } from 'react'
import { ListOfUserOrderItens } from './ListOfUserOrderItens'
import { NavLink } from 'react-router-dom'

const userDeliveryDataSchema = zod.object({
  cep: zod.string().min(1).max(14),
  rua: zod.string().min(1).max(26),
  numero: zod.number().min(1).max(5),
  complemento: zod.string().min(0).max(14),
  bairro: zod.string().min(1).max(14),
  cidade: zod.string().min(1).max(14),
  uf: zod.string().min(2).max(2),
})

// type NewCycleFormData = zod.infer<typeof userDeliveryDataSchema>

export function Orders() {
  const { userOrder, handleSetUserDataDelivery } = useContext(CoffeContext)

  const [paymentMethod, setPaymentMethod] = useState('')

  const {
    register,
    watch,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(userDeliveryDataSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  const sumOfPriceItens = userOrder.reduce(function (accumulator, curValue) {
    // eslint-disable-next-line prettier/prettier
    return (accumulator + (curValue.price * curValue.amount))
  }, 0)

  const totalValue = sumOfPriceItens + 3.5

  const isValidForm = isValid && paymentMethod

  const dataDelivery: UserDataDelivery = {
    cep: watch('cep'),
    rua: watch('rua'),
    numero: Number(watch('numero')),
    complemento: watch('complemento'),
    bairro: watch('bairro'),
    cidade: watch('cidade'),
    uf: watch('uf'),
    payment: paymentMethod,
  }

  console.log(dataDelivery)

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
                  id="cep"
                  type="text"
                  placeholder="CEP"
                  className="cep"
                  {...register('cep')}
                />
              </div>

              <div>
                <BaseInputElements
                  id="rua"
                  type="text"
                  placeholder="Rua"
                  className="rua"
                  {...register('rua')}
                />
              </div>

              <div>
                <BaseInputElements
                  id="numero"
                  type="number"
                  placeholder="Número"
                  className="numero"
                  {...register('numero', { valueAsNumber: true })}
                />

                <BaseInputElements
                  id="complemento"
                  type="text"
                  placeholder="Complemento"
                  className="complemento"
                  {...register('complemento')}
                />
              </div>

              <div>
                <BaseInputElements
                  id="bairro"
                  type="text"
                  placeholder="Bairro"
                  className="bairro"
                  {...register('bairro')}
                />

                <BaseInputElements
                  id="cidade"
                  type="text"
                  placeholder="Cidade"
                  className="cidade"
                  {...register('cidade')}
                />

                <BaseInputElements
                  id="uf"
                  type="text"
                  placeholder="UF"
                  className="uf"
                  {...register('uf')}
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
              <PaymentMethodButton
                onClick={() => setPaymentMethod('Cartão de Crédito')}
                paymentMethod={paymentMethod === 'Cartão de Crédito'}
              >
                <img src={creditIcon} alt="" />
                <span>Cartão de Crédito</span>
              </PaymentMethodButton>
              <PaymentMethodButton
                onClick={() => setPaymentMethod('Cartão de Débito')}
                paymentMethod={paymentMethod === 'Cartão de Débito'}
              >
                <img src={debitcardIcon} alt="" />
                <span>Cartão de Débito</span>
              </PaymentMethodButton>
              <PaymentMethodButton
                onClick={() => setPaymentMethod('Dinheiro')}
                paymentMethod={paymentMethod === 'Dinheiro'}
              >
                <img src={moneyIcon} alt="" />
                <span>Dinheiro</span>
              </PaymentMethodButton>
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
          <NavLink to="/orders/finished" title="Finalizar Pedido">
            <button
              disabled={!isValidForm}
              type="submit"
              onClick={handleSubmit(() =>
                handleSetUserDataDelivery(dataDelivery),
              )}
            >
              <span>Confirmar Perdido</span>
            </button>
          </NavLink>
        </ItensOfOrderContainer>
      </div>
    </Wrapper>
  )
}
