import {createRootRoute,Outlet} from '@tanstack/react-router'
import { CartProvider } from '../cart-context'
import Navbar from '../Navbar'
import PizzaOfTheDay from '../PizzaOfTheDay'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
        <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Outlet />
          <div className="mt-16">
            <PizzaOfTheDay />
          </div>
        </main>
      </div>
    </CartProvider>
    <ReactQueryDevtools />
    </>
    )
}