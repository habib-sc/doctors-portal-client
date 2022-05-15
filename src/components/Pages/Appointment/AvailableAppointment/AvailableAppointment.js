import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../../Shared/Spinner/Spinner';
import BookingModal from '../BookingModal/BookingModal';
import ServiceCard from '../ServiceCard/ServiceCard';

const AvailableAppointment = ({selectedDate}) => {
    const [treatment, setTreatment] = useState({});

    const formatedDate = format(selectedDate, 'PP');

    const {data: services, isLoading, refetch} = useQuery(['availableServices', formatedDate], () => fetch(`http://localhost:5000/available-services?date=${formatedDate}`)
        .then(res => res.json()));

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className='text-center mt-20 mb-10'>
                <h2 className='text-2xl text-secondary'>Available Appointments On {format(selectedDate, 'PP')}</h2>
            </div>
            <div className='container px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {
                        services?.map(service => <ServiceCard key={service._id} service={service} setTreatment={setTreatment}></ServiceCard>)
                    }
                </div>
            </div>
            {treatment &&
                <BookingModal
                    key={treatment._id}
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointment;