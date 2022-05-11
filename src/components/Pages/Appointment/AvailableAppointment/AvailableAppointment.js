import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const AvailableAppointment = ({selectedDate}) => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);

    return (
        <div>
            <div className='text-center mt-20 mb-10'>
                <h2 className='text-2xl text-secondary'>Available Appointments On {format(selectedDate, 'PP')}</h2>
            </div>
            <div className='container px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AvailableAppointment;