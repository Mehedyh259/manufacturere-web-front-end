import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutFrom from '../../components/CheckoutFrom';
import Loading from '../../components/Loading';
import fetchApi from '../../interceptor';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading, refetch } = useQuery(['order', id], async () => await fetchApi.get(`/order/${id}`))

    if (isLoading) {
        return <Loading />
    }

    console.log(order);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:-grid-cols-2 my-10 gap-6'>
            <div class="card card-compact max-w-lg bg-base-100 shadow-xl">
                <figure className='h-[200px]'><img src={order.data?.image} className='h-full' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 className="text-2xl font-bold text-secondary mb-3">Hello, {order.data?.name}</h2>
                    <h2 class="card-title">Pay for: <span className="text-primary">{order.data.productName}</span> </h2>
                    <p className='font-bold'>Quantity: {order.data?.quantity}</p>
                    <p className='font-bold'>Total Price: ${order.data?.totalPrice}</p>
                </div>
            </div>

            <div class="card card-compact p-5 max-w-md bg-base-100 shadow-xl">

                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;