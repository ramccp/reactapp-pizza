async function getPastOrders(page) {
  const res = await fetch(`/api/past-orders?page=${page}`)
  if (!res.ok) {
    throw new Error('Failed to fetch past orders')
  }
  const data = await res.json()
  return data;
}

export { getPastOrders };