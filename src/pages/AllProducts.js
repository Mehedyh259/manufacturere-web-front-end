import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../components/Loading';
import Product from './Home/Product';


const AllProducts = () => {
    const { data: products, isLoading } = useQuery('available', async () => await axios.get('https://manufacture-web-1542.herokuapp.com/product', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }));

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='my-16 px-5 lg:px-12'>
            <h2 className="text-center font-bold text-3xl mb-5">All Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    products?.data?.map((product, index) => <Product key={index} product={product} />)
                }

            </div>
        </div>
    );
};

export default AllProducts;