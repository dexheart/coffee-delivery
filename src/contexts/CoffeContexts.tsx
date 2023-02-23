import { createContext, ReactNode, useState } from 'react'

interface UserOrder {
  id: number
  name: string
  features: string[]
  price: number
  amount: number
  description: string
  selectToCart: boolean
  imageUrl: string
}

interface CoffeContextType {
  handleAddNewItemFromAmount: (idElement: number) => void
  handleRemoveOneItemFromAmount: (idElement: number) => void
  handleRemoveCoffeFromOrder: (idElement: number) => void
  handleAddNewCoffeToOrder: (newElement: UserOrder) => void
  userOrder: UserOrder[]
}

interface CoffeContextProviderProps {
  children: ReactNode
}

export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
  const [userOrder, setUserOrder] = useState<UserOrder[]>([])

  function handleAddNewCoffeToOrder(newElement: UserOrder) {
    const found = userOrder.find((order) => order.id === newElement.id)

    if (!found) {
      setUserOrder((state) => {
        return (state = [...userOrder, newElement])
      })
    } else {
      if (found.amount + newElement.amount >= 9) {
        setUserOrder((state) => {
          return state.map((item) => {
            return item.id === found.id ? { ...item, amount: 9 } : item
            // colocar popup
          })
        })
      } else {
        setUserOrder((state) => {
          return state.map((item) => {
            return item.id === found.id
              ? { ...item, amount: found.amount + newElement.amount }
              : item
            // colocar popup
          })
        })
      }
    }
  }

  function handleRemoveCoffeFromOrder(idElement: number) {
    setUserOrder((state) =>
      state.filter((item) => {
        return item.id !== idElement
      }),
    )
  }

  function handleAddNewItemFromAmount(idElement: number) {
    setUserOrder((state) => {
      return state.map((item) => {
        return item.amount < 9 && item.id === idElement
          ? { ...item, amount: item.amount + 1 }
          : item
      })
    })
  }

  function handleRemoveOneItemFromAmount(idElement: number) {
    setUserOrder((state) => {
      return state.map((item) => {
        return item.amount > 1 && item.id === idElement
          ? { ...item, amount: item.amount - 1 }
          : item
      })
    })
  }

  return (
    <CoffeContext.Provider
      value={{
        handleAddNewItemFromAmount,
        handleRemoveOneItemFromAmount,
        handleRemoveCoffeFromOrder,
        handleAddNewCoffeToOrder,
        userOrder,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
