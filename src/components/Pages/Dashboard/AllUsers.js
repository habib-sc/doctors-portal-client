import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner/Spinner';

const AllUsers = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    const makeAdmin = email => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => {
            if (res.status === 403) {
                toast.error('Not Allowed To Make Admin!');
            }
            return res.json();
        })
        .then(data => {
            if (data.modifiedCount > 0) {
                toast.success('Successfully Assigned as Admin');
                refetch();
            }
        });
    };

    if (isLoading) {
        return <Spinner></Spinner>
    };

    return (
        <div>
            <div className="overflow-x-auto px-4">
                <h2 className='my-3 text-xl font-semibold'>Total Users: {users?.length}</h2>
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead >
                        <tr>
                            <th className='bg-gray-200'>sl</th>
                            <th className='bg-gray-200'>Email</th>
                            <th className='bg-gray-200'>Date</th>
                            <th className='bg-gray-200'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <th>{user.email}</th>
                                <td>{user.role !== 'admin' && <button onClick={ () => makeAdmin(user.email)} className='btn btn-xs'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs'>Remove User</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;