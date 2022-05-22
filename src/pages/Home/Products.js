import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import fetchApi from '../../interceptor';
import Product from './Product';

const Products = () => {

    const { data: products, isLoading, refetch } = useQuery('available', async () => await fetchApi.get('/product?limit=6'));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='my-16'>

            <h1 className="text-4xl font-bold text-center mb-5 uppercase">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    products?.data?.map((product, index) => <Product key={index} product={product} />)
                }

            </div>

            <div className="flex justify-center my-4">
                <button className="btn btn-outline btn-secondary w-3/4 md:w-1/2 lg:w-1/3">
                    See All Products
                </button>
            </div>



        </div>

    );
};

export default Products;