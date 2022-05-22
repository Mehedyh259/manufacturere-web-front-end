import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSidebar from '../../components/DashboardSidebar';

const Dashboard = () => {
    return (
        <>

            <DashboardSidebar>
                <h2 className="text-2xl font-bold mb-3">Dashboard</h2>
                <Outlet />
            </DashboardSidebar>
        </>
    );
};

export default Dashboard;