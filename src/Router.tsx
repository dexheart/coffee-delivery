import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { FinishedOrders } from './pages/FinishedOrders'
import { Home } from './pages/Home'
import { Orders } from './pages/Orders'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/finished" element={<FinishedOrders />} />
      </Route>
    </Routes>
  )
}
