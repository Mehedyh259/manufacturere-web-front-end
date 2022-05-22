import React from 'react';
import Banner from './Banner/Banner';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Contact from './Contact';
import NewsLatter from './NewsLatter';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            <div className="px-5 lg:px-12">
                <Products />
                <BusinessSummery />
                <Reviews />
                <NewsLatter />
                <Contact />

            </div>
        </>
    );
};

export default Home;