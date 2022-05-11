import React from 'react';
import PrimaryButton from '../../../Shared/Buttons/PrimaryButton';

const ServiceCard = (props) => {
    const { name, slots } = props.service;
    return (
    <div class="card max-w-lg bg-base-100 shadow-xl">
        <div class="card-body items-center text-center">
            <h2 class="card-title">{name}</h2>
            {slots.length ?
                <p className='text-secondary bg-cyan-100 px-2 py-1 rounded-lg'>{slots[0]}</p>
                :
                <p className='text-red-500 bg-red-100 px-2 py-1 rounded-lg'>Try Antother Day</p>
            }
            <p>{slots.length > 1 ? `${slots.length} spaces available` : `${slots.length} space available`}</p>
            <div class="card-actions">
                <PrimaryButton>Book Appointment</PrimaryButton>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;