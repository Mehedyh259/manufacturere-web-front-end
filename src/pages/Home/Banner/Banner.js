import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-section h-[60vh] lg:h-[80vh] flex justify-center items-center">
            <div className=" text-white text-center">

                <h1 className="mb-5 text-5xl font-bold uppercase">We Manufacture Your Needs</h1>
                <p className="mb-5 text-xl">we are here 24/7 to give you service</p>
                <button className="btn btn-primary">Get Started</button>

            </div>
        </div>
    );
};

export default Banner;