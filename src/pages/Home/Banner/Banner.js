import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div class="banner-section h-[60vh] lg:h-[80vh] flex justify-center items-center">
            <div class=" text-white text-center">

                <h1 class="mb-5 text-5xl font-bold uppercase">We Manufacture Your Needs</h1>
                <p class="mb-5 text-xl">we are here 24/7 to give you service</p>
                <button class="btn btn-primary">Get Started</button>

            </div>
        </div>
    );
};

export default Banner;