import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import ProductDeleteModal from '../../components/ProductDeleteModal';
import fetchApi from '../../interceptor';

const ManageProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null);

    const { data: products, isLoading, refetch } = useQuery('products', async () => await fetchApi.get('/product'));

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-3xl font-bold mb-5">My Orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full p-3 bg-base-100">

                    <thead >
                        <tr>
                            <th>Product</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Minimum Order</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.data?.map((product, index) => <tr key={index}>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <p className="font-bold">{product.name}</p>
                                    </div>
                                </td>
                                <td className='text-center'>${product.price}</td>
                                <td className='text-center'>{product.quantity}</td>
                                <td className='text-center'>{product.minimumOrder}</td>

                                <th className='text-center font-bold'>
                                    <label onClick={() => setDeleteProduct(product)} htmlFor="product-delete-modal" className='btn btn-sm btn-error'>delete</label>
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
                {
                    deleteProduct && <ProductDeleteModal
                        deleteProduct={deleteProduct}
                        setDeleteProduct={setDeleteProduct}
                        refetch={refetch}
                    />
                }
            </div>

        </div >
    );
};

export default ManageProducts;