import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteUserModal from '../../components/DeleteUserModal';
import Loading from '../../components/Loading';
import MakeAdminModal from '../../components/MakeAdminModal';


const ManageUsers = () => {

    const [deleteUser, setDeleteUser] = useState(null);
    const [makeAdmin, setMakeAdmin] = useState(null);

    const { data: users, isLoading, refetch } = useQuery('users', async () => await axios.get('https://manufacture-web-1542.herokuapp.com/user', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2 className="text-3xl font-bold mb-5">Manage All Users</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full p-3 bg-base-100">

                    <thead >
                        <tr>
                            <th className='text-center'>Name</th>
                            <th className='text-center'>Email</th>
                            <th className='text-center'>Role</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.data?.map((user, index) => <tr key={index}>

                                <td className='text-center'>{user.name}</td>
                                <td className='text-center'>{user.email}</td>
                                <td className='text-center'>{user?.role || 'user'}</td>
                                <th className='text-center font-bold'>
                                    {
                                        user?.role !== 'admin' ? <>
                                            <label htmlFor='make-admin-modal' onClick={() => setMakeAdmin(user)} className='btn btn-success btn-sm mr-2'>make admin</label>
                                            <label onClick={() => setDeleteUser(user)} htmlFor='delete-user-modal' className='btn btn-error btn-sm '>delete user</label>
                                        </>
                                            : <span>Can not take action</span>
                                    }
                                </th>
                            </tr>)
                        }


                    </tbody>

                </table>
                {
                    deleteUser && <DeleteUserModal
                        deleteUser={deleteUser}
                        setDeleteUser={setDeleteUser}
                        refetch={refetch}
                    />
                }
                {
                    makeAdmin && <MakeAdminModal
                        makeAdmin={makeAdmin}
                        setMakeAdmin={setMakeAdmin}
                        refetch={refetch}
                    />
                }
            </div>

        </div >
    );
};

export default ManageUsers;