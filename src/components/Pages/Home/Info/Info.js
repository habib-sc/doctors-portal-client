import React from 'react';
import clockIcon from '../../../../assets/icons/clock.svg';
import locationIcon from '../../../../assets/icons/marker.svg';
import phoneIcon from "../../../../assets/icons/phone.svg";
import InfoCard from './InfoCard/InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <InfoCard cardTitle="Openning Hours" icon={clockIcon} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
            <InfoCard cardTitle="Our Locations" icon={locationIcon} bgClass="bg-accent"></InfoCard>
            <InfoCard cardTitle="Contact Us" icon={phoneIcon} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCard>
        </div>
    );
};

export default Info;