import React from 'react';
import { toast } from 'react-toastify';
import fetchApi from '../interceptor';


const DeleteUserModal = ({ deleteUser, setDeleteUser, refetch }) => {

    const handleDeleteUser = async () => {
        const { data } = await fetchApi.delete(`/user/${deleteUser.email}`);
        if (data.deletedCount) {
            toast.success("User Removed successfully..!");
            refetch();
            setDeleteUser(null);
        }
    }


    return (
        <>
            <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-5">
                    <label htmlFor="delete-user-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-10">Do you really want to remove <span className='text-primary'> user</span></h3>
                    <button onClick={handleDeleteUser} className="btn btn-error">Remove User</button>
                </div>
            </div>
        </>
    );
};

export default DeleteUserModal;