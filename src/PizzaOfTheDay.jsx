import {usePizzaOfTheDay} from "./hooks/usePizzaOfTheDay";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
});

function PizzaOfTheDay() {
    const { pizzaOfTheDay, loading } = usePizzaOfTheDay();
    console.log(pizzaOfTheDay);
    return loading ? <div>Loading...</div> : (
        <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-xl font-bold text-center">Pizza of the Day</h1>
        <Pizza
            name={pizzaOfTheDay.name}
            image={pizzaOfTheDay.image}
            description={pizzaOfTheDay.description}
            
        />
        <p className="text-lg font-bold text-center">From: {intl.format(pizzaOfTheDay?.sizes["S"] * 50)}</p>
        </div>
    )
}

export default PizzaOfTheDay;