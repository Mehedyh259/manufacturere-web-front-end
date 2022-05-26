import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';


const MakeAdminModal = ({ makeAdmin, setMakeAdmin, refetch }) => {

    const handleMakeAdmin = async () => {
        const { data } = await axios.put(`https://manufacture-web-1542.herokuapp.com/user/admin/${makeAdmin.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });

        if (data.result?.acknowledged) {
            toast.success("Made Admin successfully..!");
            refetch();
            setMakeAdmin(null);
        }
    }

    return (
        <>
            <input type="checkbox" id="make-admin-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-5">
                    <label htmlFor="make-admin-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold my-10">Do you really want make <span className='text-primary'>{makeAdmin.name}</span> an admin?</h3>
                    <button onClick={handleMakeAdmin} className="btn btn-success">Make Admin</button>
                </div>
            </div>
        </>
    );
};

export default MakeAdminModal;