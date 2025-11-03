import { useState, useEffect } from "react";

export function usePizzaOfTheDay() {
    const [pizzaOfTheDay,setPizzaOfTheDay] = useState(null);
    console.log(pizzaOfTheDay);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("/api/pizza-of-the-day")
        .then(res => res.json())
        .then(data => setPizzaOfTheDay(data))
        .catch(err => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    return { pizzaOfTheDay, loading };
}