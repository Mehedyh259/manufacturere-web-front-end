import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
    return (
        <div>
            <div class="drawer bg-accent drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content p-2">
                    {/* <!-- Page content here --> */}
                    {children}

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li className='mb-2'><NavLink to="/dashboard/my-orders">My Orders</NavLink></li>
                        <li className='mb-2'><NavLink to="/dashboard/my-reviews">My Reviews</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardSidebar;