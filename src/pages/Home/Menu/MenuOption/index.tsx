import {
  BuyButtonContainer,
  BuyContainer,
  FeaturesContainer,
  MenuOptionContainer,
  QuantityContainer,
} from './styles'

import { useContext, useState } from 'react'

import IconButton from '../../../../assets/MenuOptionIcons/Icon_Button.svg'
import IconPlus from '../../../../assets/MenuOptionIcons/plus.svg'
import IconMinus from '../../../../assets/MenuOptionIcons/minus.svg'
import { CoffeContext } from '../../../../contexts/CoffeContexts'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface OptionProps {
  id: number
  name: string
  features: string[]
  price: number
  amount: number
  description: string
  selectToCart: boolean
  imageUrl: string
}

export function MenuOption({
  id,
  name,
  features,
  price,
  amount,
  description,
  selectToCart,
  imageUrl,
}: OptionProps) {
  const [amountCoffeSelected, setAmountCoffeSelected] = useState<number>(1)

  const { handleAddNewCoffeToOrder } = useContext(CoffeContext)

  const singleItemOfOrder = {
    id,
    name,
    features,
    price,
    amount: amountCoffeSelected,
    description,
    selectToCart,
    imageUrl,
  }

  function handleAddNewCoffe() {
    if (amountCoffeSelected < 9) {
      setAmountCoffeSelected((state) => state + 1)
    }
  }

  function handleRemoveCoffe() {
    if (amountCoffeSelected > 1) {
      setAmountCoffeSelected((state) => state - 1)
    }
  }

  return (
    <MenuOptionContainer>
      <img src={imageUrl} alt="" />

      <FeaturesContainer>
        {features.map((feature) => {
          return <span key={feature}>{feature}</span>
        })}
      </FeaturesContainer>

      <h2>{name}</h2>
      <p>{description}</p>

      <BuyContainer>
        <span>
          R$ <span>{price.toFixed(2)}</span>
        </span>

        <QuantityContainer>
          <img src={IconMinus} onClick={handleRemoveCoffe} alt="" />
          <span>{amountCoffeSelected}</span>
          <img src={IconPlus} onClick={handleAddNewCoffe} alt="" />
        </QuantityContainer>
        <BuyButtonContainer>
          <img
            src={IconButton}
            alt=""
            onClick={() => handleAddNewCoffeToOrder(singleItemOfOrder)}
          />
          <ToastContainer />
        </BuyButtonContainer>
      </BuyContainer>
    </MenuOptionContainer>
  )
}
