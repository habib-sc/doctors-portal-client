import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='container px-4'>
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <label for="dashboard-sidebar" className="btn btn-secondary rounded-lg lg:hidden drawer-button w-[50px]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <h2 className='text-3xl text-secondary font-semibold'>Welcome to Dashboard</h2>
                    <Outlet></Outlet>
                
                </div> 
                <div className="drawer-side shadow-lg">
                    <label for="dashboard-sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Dashboard</Link></li>
                    <li><Link to='/dashboard/review'>My Review</Link></li>
                    <li><Link to='/dashboard/my-history'>My History</Link></li>
                   {admin && <li><Link to='/dashboard/all-users'>All Users</Link></li>}
                    </ul>
                
                </div>
            </div>
        </div>
    );
};

export default Dashboard;