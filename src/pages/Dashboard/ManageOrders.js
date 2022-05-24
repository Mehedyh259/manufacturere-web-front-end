import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import OrderCancelModal from '../../components/OrderCancelModal';
import fetchApi from '../../interceptor';

const ManageOrders = () => {
    const [orderCancel, setOrderCancel] = useState(null);


    const { data: orders, isLoading, refetch } = useQuery('orders', async () => await fetchApi.get('/order'))

    if (isLoading) {
        return <Loading />
    }

    const handleCancel = async (order) => {
        setOrderCancel(order);
    }
    const handleConfirm = async (id) => {
        const accept = {
            status: 'paid'
        }

        const { data } = await fetchApi.put(`/order/accept/${id}`, accept);
        if (data.acknowledged) {
            toast.success("Order Payment Accepted")
            refetch()
        }

    }


    return (
        <div>
            <h2 className="text-3xl font-bold mb-5">All Orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full p-3 bg-base-100">

                    <thead >
                        <tr>
                            <th>Product</th>
                            <th className='text-center'>Customer</th>
                            <th className='text-center'>Address</th>
                            <th className='text-center'>Phone</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Payment Status</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.data?.map((order, index) => <tr key={index}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-8 h-8">
                                                <img src={order.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <p className="font-bold">{order.productName}</p>
                                    </div>
                                </td>
                                <td className='text-center'>{order.name}</td>
                                <td className='text-center'>{order.address}</td>
                                <td className='text-center'>{order.phone}</td>
                                <td className='text-center'>{order.quantity}</td>
                                <td className='text-center'>${order.totalPrice}</td>
                                <td className='text-center capitalize font-bold'>
                                    {
                                        order.status === 'due' ? "unpaid" : order.status
                                    }

                                </td>
                                <th className='text-center font-bold'>
                                    {
                                        order.status === 'due' && <>
                                            <label onClick={() => handleCancel(order)} htmlFor="order-cancel-modal" className="btn btn-error btn-xs text-white">cancel</label>
                                        </>
                                    }
                                    {
                                        order.status === 'pending' && <label onClick={() => handleConfirm(order._id)} htmlFor="order-cancel-modal" className="btn btn-success btn-xs text-white">accept payment</label>
                                    }
                                    {
                                        order.status === 'paid' && "Shipped"
                                    }
                                </th>
                            </tr>)
                        }

                    </tbody>



                </table>
                {
                    orderCancel && <OrderCancelModal
                        orderCancel={orderCancel}
                        setOrderCancel={setOrderCancel}
                        refetch={refetch}
                    />
                }
            </div>

        </div >
    );
};

export default ManageOrders;