import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
import auth from '../firebase.init';
import fetchApi from '../interceptor';

const Purchase = () => {
    const { id } = useParams();

    const [quantity, setQuantity] = useState(0);


    const [user, loading] = useAuthState(auth);

    const { data: product, isLoading, refetch } = useQuery(['product', id], async () => await fetchApi.get(`/product/${id}`));

    useEffect(() => {
        if (product) {
            setQuantity(Number(product.data.minimumOrder))
        }
    }, [product])

    if (isLoading || loading) {
        return <Loading />
    }



    const handlePurchase = async (event) => {
        event.preventDefault();
        const purchaseQuantity = Number(event.target.quantity.value);

        const order = {
            email: user.email,
            name: user.displayName,
            address: event.target.address.value,
            phone: event.target.phone.value,
            productId: product.data._id,
            productName: product.data.name,
            quantity: purchaseQuantity,
            totalPrice: purchaseQuantity * Number(product.data.price),
            status: 'due',
            image: product.data.image
        }
        const { data } = await fetchApi.post('/order', order);
        if (data.insertedId) {

            const updateField = {
                quantity: Number(product.data.quantity) - purchaseQuantity,
            }
            const { data: response } = await fetchApi.put(`/product/${id}`, updateField)
            if (response) {
                refetch();
                toast.success('Order placed successfully')
                event.target.reset();
            }
        }
    }

    const handleIncrease = () => {
        const input = document.getElementById('quantity');
        const newValue = Number(input.value) + 1;
        input.value = newValue;
        setQuantity(newValue);
    }

    const handleDecrease = () => {
        const input = document.getElementById('quantity');
        const newValue = Number(input.value) - 1;
        input.value = newValue;
        setQuantity(newValue);
    }

    return (
        <div className='my-16 px-5 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div className="card flex-shrink-0 bg-base-100 shadow-xl">
                <div>
                    <figure><img src={product?.data?.image} style={{ maxWidth: "300px" }} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-primary">{product?.data?.name}</h2>
                        <p>{product?.data?.description}</p>
                        <p className='font-bold'>Price Per Unit: ${product?.data?.price}</p>
                        <p className='font-bold'>Quantity: {product?.data?.quantity}</p>
                        <p className='font-bold'>Minimum Order Quantity: {product?.data?.minimumOrder}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="card flex-shrink-0 w-full lg:max-w-md shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handlePurchase}>


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue={user?.displayName} readOnly disabled name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} readOnly disabled name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Address</span>
                                </label>
                                <textarea name='address' placeholder='Your Address..' className="textarea textarea-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">phone</span>
                                </label>
                                <input type='number' name='phone' placeholder='Your phone..' className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Purchase Quantity</span>
                                </label>
                                <div className="btn-group my-2">
                                    <span onClick={handleDecrease} className="btn btn- font-bold">-</span>

                                    <input type="number" readOnly disabled defaultValue={Number(product?.data?.minimumOrder)} name='quantity' id='quantity' className="input input-bordered w-[150px]" required />

                                    <span onClick={handleIncrease} className="btn btn-active font-bold">+</span>
                                </div>
                            </div>










                            {
                                (quantity < Number(product?.data?.minimumOrder)) && <span className='text-error'>Please order minimum {product?.data?.minimumOrder} </span>
                            }
                            {
                                (quantity > Number(product?.data?.quantity)) && <span className='text-error'>maximum order range {product?.data?.quantity} </span>
                            }
                            <div className="form-control mt-6">
                                <input type='submit' value={'Purchase'} className="btn btn-primary"
                                    disabled={quantity < Number(product?.data?.minimumOrder) || quantity > Number(product?.data?.quantity)}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Purchase;