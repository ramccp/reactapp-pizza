import { createLazyFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query';
import { getPastOrders } from '../api/getPastOrders';
import { getPastOrderDetails } from '../api/getPastOrderDetails';
import Modal from '../Modal';
import { useState } from 'react';
import ErrorBoundary from '../ErrorBoundary';
export const Route = createLazyFileRoute('/pastorders')({
  component: PastOrderErrorBoundary,
})

function PastOrderErrorBoundary({error,reset}) {
    return (
        <ErrorBoundary>
            <PastOrder/>
        </ErrorBoundary>
    )
}

function PastOrder() {
    throw new Error("Test Error Boundary");
    const [page, setPage] = useState(1);
    const [currentOrder,setCurrentOrder] = useState(null);
    const {isLoading, data} = useQuery({
        queryKey: ['past-orders', page],
        queryFn: () => getPastOrders(page),
        staleTime: 30000
    })

    const {isLoading: isOrderDetailsLoading, data: orderData} = useQuery({
        queryKey: ['past-order', currentOrder],
        queryFn: () => getPastOrderDetails(currentOrder),
        staleTime: 840000,
        enabled: !!currentOrder,
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
                    <th className='border border-gray-300'>Actions</th>
                </tr>
            </thead>
            <tbody className='border border-gray-300'>
                {data.map((order) => (
                    <tr key={order._id}>
                        <td className='border border-gray-300'>{order.order_id}</td>
                        <td className='border border-gray-300'>{order.date}</td>
                        <td className='border border-gray-300'>{order.time}</td>
                        <td className='border border-gray-300 p-3'>
                            <button onClick={()=>setCurrentOrder(order.order_id)} className='bg-green-500 text-white px-4 py-2 rounded-md'>View Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    <div className='flex justify-center gap-4'>
        <button disabled={page <=1 } onClick={() => setPage(page - 1)} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Previous</button>
        <button disabled={data.length < 10} onClick={() => setPage(page + 1)} className='bg-blue-500 text-white px-4 py-2 rounded-md'>Next</button>
    </div>
    {currentOrder ? (
        <Modal>
            {isOrderDetailsLoading ?(
                <div>Loading...</div>
            ):(
                <div className='bg-white p-4 rounded shadow w-full max-w-4xl mx-auto'>
                    <div className='flex justify-between items-center mb-4'>
                        <h2 className='text-xl font-bold'>Order Details</h2>
                        <button onClick={() => setCurrentOrder(null)} className='bg-gray-200 px-3 py-1 rounded'>Close</button>
                    </div>
                    <div className='overflow-auto max-h-[70vh]'>
                        <table className='w-full text-left border-collapse'>
                            <thead>
                                <tr>
                                    <th className='p-2'>Pizza Name</th>
                                    <th className='p-2'>Size</th>
                                    <th className='p-2'>Quantity</th>
                                    <th className='p-2'>Price</th>
                                    <th className='p-2'>Image</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderData.orderItems.map((pizza) => (
                                    <tr key={pizza.pizzaTypeId + pizza.size} className='border-t'>
                                        <td className='p-2'>{pizza.name}</td>
                                        <td className='p-2'>{pizza.size}</td>
                                        <td className='p-2'>{pizza.quantity}</td>
                                        <td className='p-2'>${pizza.price}</td>
                                        <td className='p-2'>
                                            <img src={pizza.image} width={80} alt={pizza.name} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </Modal>
    ):null}
    </>
  );
}
