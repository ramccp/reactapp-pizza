import Pizza from "./Pizza";
import { useEffect, useState } from "react";

const intl = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
});

function Order() {
    const [pizzaType, setPizzaType] = useState("bbq_ckn");
    const [pizzaSize, setPizzaSize] = useState("L");
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);

    let price, selectedPizza;



    if (!loading) {
        selectedPizza = pizzas.find(pizza => pizza.id === pizzaType);
        console.log(selectedPizza);
        // price = selectedPizza[pizzaSize];
    }

    async function getData() {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const response = await fetch(`/api/pizzas/`);
        const data = await response.json();
        setPizzas(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        loading ? <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div> :  <div className="container mx-auto">
                    <h1 className="text-2xl font-bold text-center">Your Order</h1>
                    <form className="flex flex-col items-center">
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="flex flex-col items-center my-4">
                                <label htmlFor="pizza-type" className="text-lg font-bold">Pizza Type</label>
                                <select onChange={(e) => setPizzaType(e.target.value)} id="pizza-type" value={pizzaType} className="w-full p-2 rounded-md cursor-pointer ring-1 ring-gray-300 px-10 mt-4">
                                    {pizzas.map(obj => <option key={obj.id} value={obj.id}>{obj.name}</option>)}
                                </select>
                            </div>
                            <div className="flex flex-col items-center">
                                <label htmlFor="pizza-size" className="text-lg font-bold">Pizza Size</label>
                                <div className="flex flex-row items-center justify-center gap-4">
                                    <span className="flex flex-row items-center justify-center gap-3">
                                        <input type="radio"
                                            checked={pizzaSize === "S"}
                                            name="pizza-size"
                                            id="pizza-s"
                                            value="S"
                                            onChange={(e) => setPizzaSize(e.target.value)}
                                        />
                                        <label htmlFor="pizza-s" className="text-lg">Small</label>
                                    </span>
                                    <span className="flex flex-row items-center justify-center gap-3">
                                        <input type="radio"
                                            checked={pizzaSize === "M"}
                                            name="pizza-size"
                                            id="pizza-m"
                                            value="M"
                                            onChange={(e) => setPizzaSize(e.target.value)}
                                        />
                                        <label htmlFor="pizza-s" className="text-lg">Medium</label>
                                    </span>
                                    <span className="flex flex-row items-center justify-center gap-3">
                                        <input type="radio"
                                            checked={pizzaSize === "L"}
                                            name="pizza-size"
                                            id="pizza-l"
                                            value="L"
                                            onChange={(e) => setPizzaSize(e.target.value)}
                                        />
                                        <label htmlFor="pizza-s" className="text-lg">Large</label>
                                    </span>
                                </div>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md cursor-pointer ">Order Pizza</button>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-4 my-4">
                            <div className="flex flex-col items-center justify-center gap-4 bg-gray-100 p-4 rounded-md">
                                <Pizza
                                    name={selectedPizza?.name}
                                    image={selectedPizza?.image}
                                    description={selectedPizza?.description}
                                    price={selectedPizza?.sizes[pizzaSize] * 50}
                                />
                                <p className="text-lg font-bold text-center">Pizza Size: {pizzaSize === "S" ? "Small" : pizzaSize === "M" ? "Medium" : "Large"}</p>
                            </div>
                        </div>
                    </form>
                </div>
        )
}

export default Order;