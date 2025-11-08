import { createLazyFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query';
import { getPastOrders } from '../api/getPastOrders';
import { useState } from 'react';
export const Route = createLazyFileRoute('/pastorders')({
  component: PastOrder,
})

function PastOrder() {
    const [page, setPage] = useState(1);
    const {isLoading, data} = useQuery({
        queryKey: ['past-orders', page],
        queryFn: () => getPastOrders(page),
        staleTime: 30000
    })
    if(isLoading) return <div>Loading...</div>
  return (
    <>
    <div>
        <h1 className='text-2xl font-bold text-center'>Past Orders</h1>
        <table className='w-full text-center border-collapse border border-gray-300'>
            <thead className='text-center border border-gray-300'>
                <tr>
                    <th className='border border-gray-300'>Order ID</th>
                    <th className='border border-gray-300'>Order Date</th>
                    <th className='border border-gray-300'>Order Time</th>
                </tr>
            </thead>
            <tbody className='border border-gray-300'>
                {data.map((order) => (
                    <tr key={order._id}>
                        <td className='border border-gray-300'>{order.order_id}</td>
                        <td className='border border-gray-300'>{order.date}</td>
                        <td className='border border-gray-300'>{order.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    <div className='flex justify-center gap-4'>
        <button disabled={page <=1 } onClick={() => setPage(page - 1)} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Previous</button>
        <button disabled={data.length < 10} onClick={() => setPage(page + 1)} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Next</button>
    </div>
    </>
  )
}
