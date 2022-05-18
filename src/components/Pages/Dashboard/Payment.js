import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(`${process.env.REACT_APP_STRIPE_PK}`);

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

    return (
        <div className='px-4'>
            <div className="card bg-base-100 shadow-xl border mt-10">   
                <div className="card-body">

                    <h2 className='text-2xl text-secondary font-semibold'>Hello, {appointment.patientName}</h2>
                    <h2 className='text-2xl text-primary font-semibold'>Make payment for {appointment.treatment}</h2>

                    <h2 className="card-title">Confirm your appointment on {appointment.date} at {appointment.slot}</h2>
                    <p className='font-semibold bg-cyan-100 w-48 pl-1 pb-1 rounded-lg text-secondary'>Your payment is ${appointment.price}</p>
                </div>
            </div>

            <div className="card lg:w-[500px] bg-base-100 shadow-xl border mt-5">   
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
            
        </div>
    );
};

export default Payment;