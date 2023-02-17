import coffe from '../../assets/cafe_image.svg'
import { CoffeImg, HomeContainer, InfoContainer, TextContainer } from './styles'
import cartIcon from '../../assets/cart.svg'
import clockIcon from '../../assets/clock.svg'
import boxIcon from '../../assets/box.svg'
import coffeIcon from '../../assets/coffe.svg'
import { Menu } from './Menu'

export function Home() {
  return (
    <>
      <HomeContainer>
        <TextContainer>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <InfoContainer>
            <div>
              <p>
                <img src={cartIcon} alt="" />
                <span>Compra simples e segura</span>
              </p>
              <p>
                <img src={clockIcon} alt="" />
                <span>Entrega rápida e rastreada</span>
              </p>
            </div>
            <div>
              <p>
                <img src={boxIcon} alt="" />
                <span>Embalagem mantém o café intacto</span>
              </p>
              <p>
                <img src={coffeIcon} alt="" />
                <span>O café chega fresquinho até você</span>
              </p>
            </div>
          </InfoContainer>
        </TextContainer>

        <div>
          <CoffeImg src={coffe} alt="" />
        </div>
      </HomeContainer>
      <Menu />
    </>
  )
}
