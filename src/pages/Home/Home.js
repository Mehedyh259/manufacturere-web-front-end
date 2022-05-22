import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Products from './Products';

const Home = () => {
    return (
        <>
            <Banner />
            <div className="px-5 lg:px-12">
                <Products />
                <BusinessSummery />

            </div>
        </>
    );
};

export default Home;