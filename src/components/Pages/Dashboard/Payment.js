import React from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const { id } = useParams();
    return (
        <div className='px-4'>
            <h2 className='text-2xl text-sky-400 font-semibold'>Make payment for {id}</h2>
        </div>
    );
};

export default Payment;