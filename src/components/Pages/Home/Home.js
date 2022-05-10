import React from 'react';
import AppointmentHome from './AppointmentHome';
import Banner from './Banner';
import BannerBody from './BannerBody';
import HomeContact from './HomeContact';
import Info from './Info/Info';
import Services from './Services/Services';
import Testimonials from './Testimonial/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <BannerBody></BannerBody>
            <AppointmentHome></AppointmentHome>
            <Testimonials></Testimonials>
            <HomeContact></HomeContact>
        </div>
    );
};

export default Home;