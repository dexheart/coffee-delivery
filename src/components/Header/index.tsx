import Logo from '../../assets/Logo.svg'
import iconLocation from '../../assets/Icon_location.svg'
import iconCart from '../../assets/Icon_cart.svg'
import { NavLink } from 'react-router-dom'
import { CoffeContext } from '../../contexts/CoffeContexts'
import { useContext } from 'react'

import {
  CartContainer,
  CartWithCounterContainer,
  HeaderContainer,
  LocationContainer,
  LogoImage,
  OrderCounter,
  Wrapper,
} from './styles'

export function Header() {
  const { userOrder } = useContext(CoffeContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <LogoImage src={Logo} alt="" />
      </NavLink>

      <Wrapper>
        <LocationContainer>
          <img src={iconLocation} alt="" />
          <span>Fortaleza, CE</span>
        </LocationContainer>
        <NavLink to="/orders" title="Meus Pedidos">
          <CartWithCounterContainer>
            <CartContainer>
              <img src={iconCart} alt="" />
            </CartContainer>
            {userOrder.length > 0 ? (
              <OrderCounter>
                <span>
                  {userOrder.reduce(function (accumulator, curValue) {
                    return accumulator + curValue.amount
                  }, 0)}
                </span>{' '}
              </OrderCounter>
            ) : null}
          </CartWithCounterContainer>
        </NavLink>
      </Wrapper>
    </HeaderContainer>
  )
}
