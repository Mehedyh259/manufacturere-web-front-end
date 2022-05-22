import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import auth from '../firebase.init';
import fetchApi from '../interceptor';

const Purchase = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, loading] = useAuthState(auth);

    const { data: product, isLoading, refetch } = useQuery(['product', id], async () => await fetchApi.get(`/product/${id}`));

    if (isLoading || loading) {
        return <Loading />
    }

    const handlePurchase = async (event) => {
        event.preventDefault();
        const purchaseQuantity = Number(event.target.quantity.value);
        if (Number(product.data.quantity) < purchaseQuantity) {
            toast.error("Purchase quantity  is more than the stocks !!")
        } else {
            const order = {
                productId: product.data._id,
                productName: product.data.name,
                quantity: purchaseQuantity,
                totalPrice: purchaseQuantity * Number(product.data.price),
                status: 'due',
                email: user.email,
            }
            const { data } = await fetchApi.post('/order', order);
            if (data.insertedId) {

                const updateField = {
                    quantity: Number(product.data.quantity) - purchaseQuantity,
                }
                const { data: response } = await fetchApi.put(`/product/${id}`, updateField)
                if (response) {
                    refetch();
                    toast.success('Order places successfully')
                    event.target.reset();
                }
            }
        }
    }

    return (
        <div className='my-16 px-12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={product?.data?.image} alt="Album" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-primary">{product?.data?.name}!</h2>
                    <p>{product?.data?.description}</p>
                    <p className='font-bold'>Price Per Unit: ${product?.data?.price}</p>
                    <p className='font-bold'>Quantity: {product?.data?.quantity}</p>
                    <p className='font-bold'>Minimum Order Quantity: {product?.data?.minimumOrder}</p>
                </div>
            </div>

            <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <form onSubmit={handlePurchase}>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Purchase Quantity</span>
                            </label>
                            <input type="number" name='quantity' min={Number(product?.data?.minimumOrder)} placeholder={`Enter Quantity Minimum ${product?.data?.minimumOrder}`} class="input input-bordered" required />
                        </div>
                        <div class="form-control mt-6">
                            <button type='submit' class="btn btn-primary">Make Purchase</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>

    );
};

export default Purchase;