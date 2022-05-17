import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner/Spinner';

const ManageDoctors = () => {

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then( res => res.json()));

    if(isLoading) {
        return <Spinner></Spinner>
    }

    // Handle doctor delete 
    const handleDoctorDelete = email => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if (data.deletedCount) {
                toast.success('Deleted A Doctor Successfully');
                refetch();
            }
            else{
                toast.error('Failed To Delete');
            }
        });
    };

    return (
        <div className='px-4'>
            <h2>Total Doctors: {doctors.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead >
                        <tr>
                            <th className='bg-gray-200'>sl</th>
                            <th className='bg-gray-200'>Avatar</th>
                            <th className='bg-gray-200'>Name</th>
                            <th className='bg-gray-200'>Specialty</th>
                            <th className='bg-gray-200'>Email</th>
                            <th className='bg-gray-200'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <tr key={doctor._id}>
                                <th>{index + 1}</th>
                                <th>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                            <img src={doctor.img} alt='avatar' />
                                        </div>
                                    </div>
                                </th>
                                <th>{doctor.name}</th>
                                <th>{doctor.specialty}</th>
                                <th>{doctor.email}</th>
                                <td><button onClick={ () => handleDoctorDelete(doctor.email) } className='btn btn-xs btn-error text-white'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;