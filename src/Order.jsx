import Pizza from "./Pizza";

function Order() {
    const pizzaType = "Pepperoni";
    const pizzaSize = "L";

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-center">Your Order</h1>
            <form className="flex flex-col items-center">
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center my-4">
                        <label htmlFor="pizza-type" className="text-lg font-bold">Pizza Type</label>
                        <select id="pizza-type" value={pizzaType} className="w-full p-2 rounded-md cursor-pointer ring-1 ring-gray-300 px-10 mt-4">
                            <option value="Pepperoni">Pepperoni Pizza</option>
                            <option value="Hawaiian">Hawaiian Pizza</option>
                            <option value="Big Meat">Big Meat Pizza</option>
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
                                />
                                <label htmlFor="pizza-s" className="text-lg">Small</label>
                            </span>
                            <span className="flex flex-row items-center justify-center gap-3">
                                <input type="radio"
                                    checked={pizzaSize === "M"}
                                    name="pizza-size"
                                    id="pizza-m"
                                    value="M"
                                />
                                <label htmlFor="pizza-s" className="text-lg">Medium</label>
                            </span>
                            <span className="flex flex-row items-center justify-center gap-3">
                                <input type="radio"
                                    checked={pizzaSize === "L"}
                                    name="pizza-size"
                                    id="pizza-l"
                                    value="L"
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
                            name="Pepperoni Pizza"
                            image={`/public/pizzas/pepperoni.webp`}
                            description="Mozzarella Cheese, Pepperoni"
                        />
                        <p className="text-lg font-bold text-center">Total: $10</p>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Order;