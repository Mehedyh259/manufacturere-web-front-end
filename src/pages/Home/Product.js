import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, image, price, description, quantity } = product;
    return (
        <>
            <div class="card card-side bg-base-200 shadow-xl">
                <figure><img src={image} style={{ width: '150px' }} alt="..." /></figure>
                <div class="card-body">
                    <h2 class="card-title text-primary">{name}!</h2>
                    <p>{description}</p>
                    <p className='font-bold'>Price: ${price}</p>
                    <p className='font-bold'>Quantity: {quantity}</p>
                    <div class="card-actions justify-end">
                        <button onClick={() => navigate(`/purchase/${_id}`)} class="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Product;