import { CoffeContext } from '../../../contexts/CoffeContexts'
import { useContext } from 'react'

import IconPlus from '../../../assets/OrdersIcons/plus.svg'
import IconMinus from '../../../assets/OrdersIcons/minus.svg'

import TrashIcon from '../../../assets/OrdersIcons/trash_Icon.svg'

import {
  CoffeNameContainer,
  ImageCoffeContainer,
  ItemContainer,
  OrderButtonContainer,
  PriceContainer,
  RemoveButtonContainer,
  WraperButtonContainer,
} from './styles'

export function ListOfUserOrderItens() {
  const {
    handleAddNewItemFromAmount,
    handleRemoveOneItemFromAmount,
    handleRemoveCoffeFromOrder,
    userOrder,
  } = useContext(CoffeContext)

  return (
    <>
      {userOrder.map((coffe) => {
        return (
          <ItemContainer key={coffe.id}>
            <div className="mainContainer">
              <ImageCoffeContainer>
                <img src={coffe.imageUrl} alt="" />
              </ImageCoffeContainer>

              <div>
                <CoffeNameContainer>
                  <span>{coffe.name}</span>
                </CoffeNameContainer>

                <WraperButtonContainer>
                  <OrderButtonContainer>
                    <img
                      src={IconMinus}
                      alt=""
                      onClick={() => handleRemoveOneItemFromAmount(coffe.id)}
                    />
                    <span>{coffe.amount}</span>
                    <img
                      src={IconPlus}
                      alt=""
                      onClick={() => handleAddNewItemFromAmount(coffe.id)}
                    />
                  </OrderButtonContainer>

                  <RemoveButtonContainer
                    onClick={() => handleRemoveCoffeFromOrder(coffe.id)}
                  >
                    <img src={TrashIcon} alt="" />
                    <span>Remover</span>
                  </RemoveButtonContainer>
                </WraperButtonContainer>
              </div>
            </div>

            <PriceContainer>
              <span>R$ {(coffe.price * coffe.amount).toFixed(2)}</span>
            </PriceContainer>
          </ItemContainer>
        )
      })}
    </>
  )
}
