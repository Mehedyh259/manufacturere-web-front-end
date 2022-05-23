import React from 'react';
import { toast } from 'react-toastify';
import fetchApi from '../../interceptor';

const OrderCancelModal = ({ orderCancel, setOrderCancel, refetch }) => {

    const handleCancelOrder = async () => {
        const { data } = await fetchApi.delete(`/order/${orderCancel._id}`);
        if (data.deletedCount) {
            toast.success("Order Cancel successfully..!");
            refetch();
            setOrderCancel(null);
        }
    }

    return (
        <>
            <input type="checkbox" id="order-cancel-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-5">
                    <label htmlFor="order-cancel-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-10">Do you really want to cancel order for <span className='text-primary'>{orderCancel.productName}</span></h3>
                    <button onClick={handleCancelOrder} className="btn btn-error">Cancel Order</button>
                </div>
            </div>
        </>
    );
};

export default OrderCancelModal;