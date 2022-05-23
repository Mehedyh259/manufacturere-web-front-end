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
            <div className="drawer bg-base-200 drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-2">
                    {/* <!-- Page content here --> */}
                    {children}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
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
                                <li className='mb-2'><NavLink to="/dashboard/manage-orders">Manage All Orders</NavLink></li>
                                <li className='mb-2'><NavLink to="/dashboard/manage-users">Make Admin</NavLink></li>
                                <li className='mb-2'><NavLink to="/dashboard/add-product">Add Product</NavLink></li>
                                <li className='mb-2'><NavLink to="/dashboard/manage-products">Manage Products</NavLink></li>

                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;