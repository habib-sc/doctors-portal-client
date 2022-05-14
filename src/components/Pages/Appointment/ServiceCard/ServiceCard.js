import React from 'react';

const ServiceCard = ({ setTreatment, service }) => {
    const { name, slots } = service;
    return (
    <div className="card max-w-lg bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            {slots.length ?
                <p className='text-secondary bg-cyan-100 px-2 py-1 rounded-lg'>{slots[0]}</p>
                :
                <p className='text-red-500 bg-red-100 px-2 py-1 rounded-lg'>Try Antother Day</p>
            }
            <p>{slots.length > 1 ? `${slots.length} spaces available` : `${slots.length} space available`}</p>
            <div className="card-actions">
                <label htmlFor="booking-modal"
                    onClick={ () => setTreatment(service)}
                    disabled={slots.length === 0}
                className={`btn modal-button uppercase font-bold border-0 ${slots.length === 0 ? 'bg-gradient-to-r from-gray-50 to-gray-100' : 'bg-gradient-to-r from-secondary to-primary text-white'}`}>Book Appointment</label>
            </div>
        </div>
    </div>
    );
};

export default ServiceCard;