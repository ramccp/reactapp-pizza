import { createRoot } from "react-dom/client";
import Order from "./Order";
import "./index.css";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Navbar from "./Navbar";
import { CartProvider } from "./cart-context";

const App = () => {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

        <Navbar />
        <main className="container mx-auto px-4 py-8 max-w-7xl">
          <Order />
          <div className="mt-16">
            <PizzaOfTheDay />
          </div>
        </main>
      </div>
    </CartProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
