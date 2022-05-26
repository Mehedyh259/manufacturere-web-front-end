import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';
import Product from './Product';

const Products = () => {

    const { data: products, isLoading } = useQuery('available', async () => await axios.get('https://manufacture-web-1542.herokuapp.com/product?limit=3'));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-16'>

            <h1 className="text-4xl font-bold text-center mb-5 uppercase">Parts</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    products?.data?.map((product, index) => <Product key={index} product={product} />)
                }

            </div>

            <div className="flex justify-center my-4">
                <Link to='/all-products' className="btn btn-outline btn-primary w-3/4 md:w-1/2 lg:w-1/4">
                    See All Parts
                </Link>
            </div>



        </div>

    );
};

export default Products;