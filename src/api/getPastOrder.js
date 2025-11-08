export async function getPastOrder(orderId){
    const res = await fetch(`/api/past-order/${orderId}`)
    if(!res.ok){
        throw new Error('Failed to fetch past order')
    }
    const data = await res.json()
    console.log(data)
    return data;
}