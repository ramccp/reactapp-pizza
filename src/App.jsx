import { createRoot } from "react-dom/client";
import Order from "./Order";
import "./index.css";
import PizzaOfTheDay from "./PizzaOfTheDay";

const App = () => {
  return (
    <div>
      <h1 className="logo text-center font-bold text-5xl my-5">CAT Pizzeria</h1>
      <Order />
      <PizzaOfTheDay />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
