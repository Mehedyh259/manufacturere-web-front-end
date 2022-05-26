import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutFrom from '../../components/CheckoutFrom';
import Loading from '../../components/Loading';


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

const Payment = () => {
    const { id } = useParams();
    const { data: order, isLoading, refetch } = useQuery(['order', id], async () => await axios.get(`https://manufacture-web-1542.herokuapp.com/order/${id}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:-grid-cols-2 my-10 gap-6'>
            <div className="card card-compact max-w-lg bg-base-100 shadow-xl">
                <figure className='h-[200px]'><img src={order?.data?.image} className='h-full' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-secondary mb-3">Hello, {order?.data?.name}</h2>
                    <h2 className="card-title">Pay for: <span className="text-primary">{order?.data?.productName}</span> </h2>
                    <p className='font-bold'>Quantity: {order?.data?.quantity}</p>
                    <p className='font-bold'>Total Price: ${order?.data?.totalPrice}</p>
                </div>
            </div>

            <div className="card card-compact p-5 max-w-md bg-base-100 shadow-xl">

                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutFrom order={order?.data} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;