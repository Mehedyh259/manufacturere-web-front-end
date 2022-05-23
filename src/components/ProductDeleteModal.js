
import React from 'react';
import { toast } from 'react-toastify';
import fetchApi from '../interceptor';

const ProductDeleteModal = ({ deleteProduct, setDeleteProduct, refetch }) => {

    const handleProductDelete = async () => {
        const { data } = await fetchApi.delete(`/product/${deleteProduct._id}`);
        if (data.deletedCount) {
            toast.success('product deleted successfully ');
            refetch();
            setDeleteProduct(null);
        }
    }

    return (
        <>
            <input type="checkbox" id="product-delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-5">
                    <label htmlFor="product-delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-10">Do you really want to Delete <span className='text-primary'> {deleteProduct.name} </span></h3>
                    <button onClick={handleProductDelete} className="btn btn-error">Delete Product</button>
                </div>
            </div>
        </>
    );
};

export default ProductDeleteModal;