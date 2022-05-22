import React from 'react';

const Banner = () => {
    return (
        <div class="hero h-[60vh] lg:h-[calc(100vh-100px)]">
            <div class="hero-overlay bg-opacity-60 bg-[url(https://api.lorem.space/image/fashion?w=1000&h=800)]" style={{
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}
            ></div>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md text-white">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;