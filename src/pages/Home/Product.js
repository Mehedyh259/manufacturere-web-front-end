import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const navigate = useNavigate();
    const { _id, name, image, price, description, quantity, minimumOrder } = product;
    return (
        <>
            <div className="card lg:card-side bg-base-200 shadow-xl">
                <figure><img src={image} style={{ width: '150px' }} alt="..." /></figure>
                <div className="card-body">
                    <h2 className="card-title text-primary">{name}</h2>
                    <p>{description.slice(0, 90)}...</p>
                    <p className='font-bold'>Price: ${price}</p>
                    <p className='font-bold'>Quantity: {quantity}</p>
                    <p className='font-bold'>Minimum Order: {minimumOrder}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Product;