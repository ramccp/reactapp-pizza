import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPastOrders } from '../api/getPastOrders';
export const Route = createLazyFileRoute('/past')({
  component: PastOrder,
})

function PastOrder() {
    const [page, setPage] = useState(1);
    const { isLoading,data } = useQuery({
        queryKey: ['past-orders', page],
        queryFn: () => getPastOrders(page),
        staleTime: 30000
    });
  if (isLoading) return <div>Loading...</div>
  return(
    <div>
        <h1>Past Orders</h1>
        <table className='w-full'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='px-4 py-2'>Order ID</th>
                    <th className='px-4 py-2'>Date</th>
                    <th className='px-4 py-2'>Total</th>
                </tr>
            </thead>
            <tbody>
                {data.map((order) => (
                    <tr key={order._id} className='border-b border-gray-200 align-middle'>
                        <td className='px-4 py-2 text-center'>{order.order_id}</td>
                        <td className='px-4 py-2 text-center'>{order.date}</td>
                        <td className='px-4 py-2 text-center'>{order.time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <button disabled={page<=1} onClick={() => setPage(page - 1)} className='px-4 py-2 bg-blue-500 text-white rounded-md'>Prev</button>
        <button disabled={data.length<10} onClick={() => setPage(page +1)} className='px-4 py-2 bg-blue-500 text-white rounded-md'>Next</button>
    </div>
  )
}
