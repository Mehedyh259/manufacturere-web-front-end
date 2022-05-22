import React from 'react';
import { FaStar } from 'react-icons/fa'

const Review = ({ review }) => {
    const { name, description, rating } = review;
    return (
        <div class="card w-full bg-base-200 shadow-xl">
            <div class="card-body">
                <p>{description}</p>
                <div class="card-actions flex justify-start items-center mt-2">
                    <div class="w-16 mask mask-squircle">
                        <img alt='...' src="https://api.lorem.space/image/face?hash=55350" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{name}</h2>
                        <p className="text lg flex justify-center items-center">Rating: {rating} <FaStar /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;