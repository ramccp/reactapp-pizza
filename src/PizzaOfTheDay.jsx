import {usePizzaOfTheDay} from "./hooks/usePizzaOfTheDay";
import Pizza from "./Pizza";

const intl = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
});

function PizzaOfTheDay() {
    const { pizzaOfTheDay, loading } = usePizzaOfTheDay();
    
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-200 border-t-orange-600"></div>
                    <p className="text-gray-600 font-medium">Loading today's special...</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-2xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
            
            <div className="relative z-10">
                <div className="text-center mb-8">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                        <span className="text-sm font-semibold uppercase tracking-wide">⭐ Special</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">Pizza of the Day</h2>
                    <p className="text-orange-100">Today's featured delight</p>
                </div>
                
                <div className="flex justify-center">
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-md w-full">
                        <Pizza
                            name={pizzaOfTheDay.name}
                            image={pizzaOfTheDay.image}
                            description={pizzaOfTheDay.description}
                        />
                        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                            <p className="text-sm text-gray-600 mb-1">Starting from</p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                {intl.format(pizzaOfTheDay?.sizes["S"] * 50)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PizzaOfTheDay;