import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import OrderCancelModal from '../../components/OrderCancelModal';
import auth from '../../firebase.init';
import fetchApi from '../../interceptor';



const MyOrders = () => {

    const [orderCancel, setOrderCancel] = useState(null);

    const [user, loading] = useAuthState(auth);

    const { data: orders, isLoading, refetch } = useQuery(['orders', user], async () => await fetchApi.get(`/order?email=${user?.email}`))

    if (loading || isLoading) {
        return <Loading />
    }


    const handleCancel = async (order) => {
        setOrderCancel(order);
    }


    return (
        <div>
            <h2 className="text-3xl font-bold mb-5">My Orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full p-3 bg-base-100">

                    <thead >
                        <tr>
                            <th>Product</th>
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
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={order.image} alt="image" />
                                            </div>
                                        </div>
                                        <p className="font-bold">{order.productName}</p>
                                    </div>
                                </td>
                                <td className='text-center'>{order.quantity}</td>
                                <td className='text-center'>${order.totalPrice}</td>
                                <td className='text-center font-bold'>
                                    {
                                        order.status === 'due' && <small className='bg-red-400 text-white p-1 rounded'>unpaid</small>
                                    }
                                    {
                                        order.status === 'pending' && <small className='bg-orange-400 text-white p-1 rounded'>pending</small>
                                    }
                                    {
                                        order.status === 'paid' && <small className='bg-green-600 text-white p-1 rounded'>paid</small>
                                    }

                                </td>
                                <th className='text-center font-bold'>
                                    {
                                        order.status === 'due' && <>
                                            <Link to={`/dashboard/payment/${order._id}`} className="btn btn-success btn-sm mr-2">Pay</Link>

                                            <label onClick={() => handleCancel(order)} htmlFor="order-cancel-modal" className="btn btn-error btn-sm">cancel</label>
                                        </>
                                    }
                                    {
                                        order.status === 'pending' && "pending confirm"
                                    }
                                    {
                                        order.status === 'paid' && <p>TxId: <small className="text-orange-600">{order?.transactionId}</small></p>
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

export default MyOrders;