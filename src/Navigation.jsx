import { Link } from '@tanstack/react-router'
function Navigation() {

    return (
        <nav className="flex justify-center gap-4">
            <Link to="/" className="text-2xl font-bold"><button className="bg-blue-500 text-white px-4 py-2 rounded-md">Home</button></Link>
            <Link to="/order" className="text-2xl font-bold"><button className="bg-blue-500 text-white px-4 py-2 rounded-md">Order</button></Link>
            <Link to="/cart" className="text-2xl font-bold"><button className="bg-blue-500 text-white px-4 py-2 rounded-md">Cart</button></Link>
        </nav>
    )
}

export default Navigation;