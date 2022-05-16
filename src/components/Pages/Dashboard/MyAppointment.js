import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyAppointment = () => {
    const [user] = useAuthState(auth);
    const [appointment, setAppointment] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
        if(user) {
            fetch(`http://localhost:5000/bookings?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/');
                }
                return res.json();
            })
            .then(data => setAppointment(data));
        }
    }, [user]);

    return (
        <div>
            
            <div className="overflow-x-auto px-4">
                <h2 className='my-3 text-xl font-semibold'>Total Items: {appointment.length}</h2>
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead >
                        <tr>
                            <th className='bg-gray-200'>sl</th>
                            <th className='bg-gray-200'>Name</th>
                            <th className='bg-gray-200'>Treatment</th>
                            <th className='bg-gray-200'>Date</th>
                            <th className='bg-gray-200'>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <th>{a.patientName}</th>
                                <td>{a.treatment}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;