import { Link } from '@tanstack/react-router'
function Navbar(){
    return (
        <header className="sticky top-0 z-100 bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="flex justify-center">
          <h1 className="pizzeria-logo">
            CAT Pizzeria
          </h1>
        </div>
        <div className="flex space-x-4">
          <Link to="/cart">Cart</Link>
          <Link to="/order">Order</Link>
        </div>
      </header>
    )
}

export default Navbar;