import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const menuItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/appointment'>Appointment</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {user? 
            <>
                <div className='flex justify-center items-center'>
                    <p className='border rounded-lg font-bold px-2 mr-3'>{user?.displayName}</p>
                </div>
                <button onClick={ () => signOut(auth) } className='border rounded-lg px-3'>Logout</button>
            </>
            :
            <>
                <li className='border rounded-lg mr-3 bg-primary text-white'><Link to='/login'>Login</Link></li>
                <li className='border rounded-lg bg-secondary text-white'><Link to='/register'>SignUp</Link></li>
            </>

        }
    </>

    return (
        <header>
            <div className="container mx-auto navbar bg-base-100 text-accent px-4">
                <div className="navbar-start">
                    <div className="dropdown border rounded-lg mr-2">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="normal-case text-3xl">Doctors Portal</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </header>
    );
};

export default Header;