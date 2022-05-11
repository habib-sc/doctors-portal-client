import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bannerBG from '../../../assets/images/bg.png';
import chairImg from '../../../assets/images/chair.png';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    return (
    <div class="hero min-h-[60vh]" style={{background: `url(${bannerBG})`}}>
        <div class="hero-content flex-col lg:flex-row-reverse">
            <img src={chairImg} class="max-w-sm rounded-lg shadow-2xl" alt='Medical checkup chair' />
            <div className='lg:mr-20'>
                <DayPicker
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
            </div>
        </div>
    </div>
    );
};

export default AppointmentBanner;