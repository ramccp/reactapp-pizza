export async function getPastOrderDetails(orderId) {
    try {
        const response = await fetch(`/api/past-order/${orderId}`);
        const data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.error('Error fetching past order details:', error);
        throw error;
    }
}