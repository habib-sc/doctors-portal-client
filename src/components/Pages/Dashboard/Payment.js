import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['appointment', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then( res => res.json()));

    if(isLoading) {
        return <Spinner></Spinner>
    }

    console.log(appointment);

    return (
        <div className='px-4'>
            <div class="card bg-base-100 shadow-xl border mt-10">   
                <div class="card-body">

                    <h2 className='text-2xl text-secondary font-semibold'>Hello, {appointment.patientName}</h2>
                    <h2 className='text-2xl text-primary font-semibold'>Make payment for {appointment.treatment}</h2>

                    <h2 class="card-title">Confirm your appointment on {appointment.date} at {appointment.slot}</h2>
                    <p className='font-semibold bg-cyan-100 w-48 pl-1 pb-1 rounded-lg text-secondary'>Your payment is ${appointment.price}</p>
                    <div class="card-actions">
                    <button class="btn btn-primary text-white">Pay Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;