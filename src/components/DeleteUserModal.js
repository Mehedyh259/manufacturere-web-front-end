import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';



const DeleteUserModal = ({ deleteUser, setDeleteUser, refetch }) => {

    const handleDeleteUser = async () => {
        const { data } = await axios.delete(`https://manufacture-web-1542.herokuapp.com/user/${deleteUser.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });
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