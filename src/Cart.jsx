import { useContext } from "react";
import { CartContext } from "./cart-context";

function Cart({checkOut}) {
    const {cart, setCart} = useContext(CartContext);
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    const intl = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    });
    
    if (cart.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
                <div className="text-gray-400 mb-4">
                    <svg className="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
                <p className="text-gray-500">Add some delicious pizzas to get started!</p>
            </div>
        );
    }
    
    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
            <div className="border-b border-gray-200 pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Your Cart</h2>
                <p className="text-sm text-gray-500 mt-1">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
            </div>
            
            <div className="space-y-3">
                {cart.map((item, index) => (
                    <div 
                        key={index} 
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                        <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{item.pizza.name}</h3>
                            <p className="text-sm text-gray-600">Size: {item.size}</p>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-gray-900">{intl.format(item.price)}</p>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="pt-4 border-t border-gray-200 space-y-4">
                <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-gray-700">Total</span>
                    <span className="font-bold text-2xl text-orange-600">{intl.format(totalPrice)}</span>
                </div>
                <button onClick={checkOut} className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;