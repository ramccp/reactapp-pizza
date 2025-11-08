import { createLazyFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getPastOrders } from '../api/getPastOrders';
import { getPastOrder } from '../api/getPastOrder';
import Modal from '../Modal';
export const Route = createLazyFileRoute('/past')({
    component: PastOrder,
})

const intl = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
});
function PastOrder() {
    const [page, setPage] = useState(1);
    const [currentOrder, setCurrentOrder] = useState(null);
    const { isLoading, data } = useQuery({
        queryKey: ['past-orders', page],
        queryFn: () => getPastOrders(page),
        staleTime: 30000
    });

    const { isLoading: isOrderLoading, data: orderData } = useQuery({
        queryKey: ['past-order', currentOrder],
        queryFn: () => getPastOrder(currentOrder),
        enabled: !!currentOrder
    });

    if (isLoading) return <div>Loading...</div>
    return (
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
                            <td className='px-4 py-2 text-center'>
                                <button onClick={() => setCurrentOrder(order.order_id)} className='px-4 py-2 bg-blue-500 text-white rounded-md'>{order.order_id}</button>
                            </td>
                            <td className='px-4 py-2 text-center'>{order.date}</td>
                            <td className='px-4 py-2 text-center'>{order.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button disabled={page <= 1} onClick={() => setPage(page - 1)} className='px-4 py-2 bg-blue-500 text-white rounded-md'>Prev</button>
            <button disabled={data.length < 10} onClick={() => setPage(page + 1)} className='px-4 py-2 bg-blue-500 text-white rounded-md'>Next</button>
            {currentOrder ? (
                <Modal>
                    {isOrderLoading ? (
                        <div>Loading...</div>
                    ) : (
                        <>
                            <h2 className='text-2xl font-bold'>Order Details</h2>
                            <table className='w-full'>
                                <thead>
                                    <tr>
                                        <th className='px-4 py-2'>Name</th>
                                        <th className='px-4 py-2'>Pizza</th>
                                        <th className='px-4 py-2'>Size</th>
                                        <th className='px-4 py-2'>Quantity</th>
                                        <th className='px-4 py-2'>Price</th>
                                        <th className='px-4 py-2'>Total</th>
                                        <th className='px-4 py-2'>Image</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orderData.orderItems.map((item) => (

                                        <tr key={item.pizzaTypeId+item.size} className='border-b border-gray-200 align-middle'>
                                            <td className='px-4 py-2'>{item.name}</td>
                                            <td className='px-4 py-2'>{item.category}</td>
                                            <td className='px-4 py-2'>{item.quantity}</td>
                                            <td className='px-4 py-2'>{intl.format(item.price)}</td>
                                            <td className='px-4 py-2'>{intl.format(item.total)}</td>
                                            <td className='px-4 py-2'><img src={item.image} alt={item.name} className='w-10 h-10 object-cover rounded-md' /></td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                            <button onClick={() => setCurrentOrder(null)} className='px-4 py-2 bg-red-500 text-white rounded-md'>Close</button>
                        </>
                    )}
                </Modal>
            ) : null
            }
        </div >
    );
}

