import { createContext, ReactNode, useState } from 'react'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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

export interface UserDataDelivery {
  cep: string
  rua: string
  numero: number
  complemento?: string
  bairro: string
  cidade: string
  uf: string
  payment: string
}

interface CoffeContextType {
  handleSetUserDataDelivery: (data: UserDataDelivery) => void
  handleAddNewItemFromAmount: (idElement: number) => void
  handleRemoveOneItemFromAmount: (idElement: number) => void
  handleRemoveCoffeFromOrder: (idElement: number) => void
  handleAddNewCoffeToOrder: (newElement: UserOrder) => void
  userOrder: UserOrder[]
  userDataDelivery: UserDataDelivery
}

interface CoffeContextProviderProps {
  children: ReactNode
}

export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
  const [userOrder, setUserOrder] = useState<UserOrder[]>([])

  const [userDataDelivery, setUserDataDelivery] = useState<UserDataDelivery>({
    cep: '',
    rua: '',
    numero: 0,
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    payment: '',
  })

  const notifySuccess = () =>
    toast.success('Item adicionado ao carrinho.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

  const notifyWarning = () =>
    toast.warning('Quantidade máxima suportada por item: 9.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    })

  function handleAddNewCoffeToOrder(newElement: UserOrder) {
    const found = userOrder.find((order) => order.id === newElement.id)

    if (!found) {
      setUserOrder((state) => {
        return (state = [...userOrder, newElement])
      })
      notifySuccess()
    } else {
      if (found.amount + newElement.amount >= 9) {
        setUserOrder((state) => {
          return state.map((item) => {
            return item.id === found.id ? { ...item, amount: 9 } : item
          })
        })
        notifyWarning()
      } else {
        setUserOrder((state) => {
          return state.map((item) => {
            return item.id === found.id
              ? { ...item, amount: found.amount + newElement.amount }
              : item
          })
        })
        notifySuccess()
      }
    }
  }

  function handleSetUserDataDelivery(data: UserDataDelivery) {
    setUserDataDelivery((state) => ({ ...state, data }))
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
        handleSetUserDataDelivery,
        handleAddNewItemFromAmount,
        handleRemoveOneItemFromAmount,
        handleRemoveCoffeFromOrder,
        handleAddNewCoffeToOrder,
        userOrder,
        userDataDelivery,
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
