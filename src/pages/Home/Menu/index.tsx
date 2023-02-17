import { coffes } from '../../../contexts/mocks'
import { MenuOption } from './MenuOption'
import { MenuContainer } from './styles'

export function Menu() {
  return (
    <MenuContainer>
      <h1>Nossos cafés</h1>

      <div>
        {coffes.map((coffe) => {
          return (
            <MenuOption
              key={coffe.id}
              id={coffe.id}
              name={coffe.name}
              features={coffe.features}
              price={coffe.price}
              amount={coffe.amount}
              description={coffe.description}
              selectToCart={coffe.selectToCart}
              imageUrl={coffe.imageUrl}
            />
          )
        })}
      </div>
    </MenuContainer>
  )
}
