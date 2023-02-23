import Logo from '../../assets/Logo.svg'
import iconLocation from '../../assets/Icon_location.svg'
import iconCart from '../../assets/Icon_cart.svg'
import { NavLink } from 'react-router-dom'
import { CoffeContext } from '../../contexts/CoffeContexts'
import { useContext } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

  const notifyError = () =>
    toast.error('Carrinho Vazio, favor adicionar algum item no carrinho.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

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

        {userOrder.length === 0 ? (
          <NavLink to="/" title="Meus Pedidos" onClick={notifyError}>
            <ToastContainer />
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
        ) : (
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
        )}
      </Wrapper>
    </HeaderContainer>
  )
}
