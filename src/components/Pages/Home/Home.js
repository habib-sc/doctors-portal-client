import React from 'react';
import AppointmentHome from './AppointmentHome';
import Banner from './Banner';
import BannerBody from './BannerBody';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <BannerBody></BannerBody>
            <AppointmentHome></AppointmentHome>
        </div>
    );
};

export default Home;