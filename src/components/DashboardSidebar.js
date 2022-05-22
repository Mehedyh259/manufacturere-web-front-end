import React from 'react';
import { NavLink } from 'react-router-dom';
import auth from '../firebase.init';
import useAdmin from '../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';

const DashboardSidebar = ({ children }) => {

    const [user, isloading] = useAuthState(auth)
    const [role] = useAdmin(user);

    if (isloading) {
        return <Loading />
    }

    return (
        <div>
            <div class="drawer bg-base-200 drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content p-2">
                    {/* <!-- Page content here --> */}
                    {children}

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='mb-2'><NavLink to="/dashboard/my-profile">My Profile</NavLink></li>
                        {
                            role === 'user' && <>
                                <li className='mb-2'><NavLink to="/dashboard/my-orders">My Orders</NavLink></li>
                                <li className='mb-2'><NavLink to="/dashboard/my-reviews">Add A Review</NavLink></li>

                            </>
                        }
                        {
                            role === 'admin' && <>
                                <li className='mb-2'><NavLink to="/dashboard/manage-orders">Manage Orders</NavLink></li>
                                <li className='mb-2'><NavLink to="/dashboard/manage-users">Manage Users</NavLink></li>
                                <li className='mb-2'><NavLink to="/dashboard/add-product">Add Product</NavLink></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;