async function getPastOrders(page) {
    try{
        const response = await fetch(`/api/past-orders?page=${page}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching past orders:', error);
        return [];
    }
}   

export { getPastOrders };