import React from 'react';
import appointmentImg from '../../../assets/images/appointment.png';
import doctorImg from '../../../assets/images/doctor.png';
import PrimaryButton from '../../Shared/Buttons/PrimaryButton';

const AppointmentHome = () => {
    return (
        <div style={{background: `url(${appointmentImg})`}}>
            <div className='container px-4 mb-20 mt-36'>
                <div className="flex justify-between items-center">
                    <div className='flex-1 hidden lg:block p-0 m-0'>
                        <img src={doctorImg} className="object-cover h-[600px]  mt-[-150px]" />
                    </div>
                    <div className='flex-1'>
                        <div className='w-full text-white py-20 lg:py-0'>
                            <h3 className='text-xl font-bold text-secondary mb-5'>Appoinment</h3>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, On Your Terms</h1>
                            <p className="py-6 w-full">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHome;