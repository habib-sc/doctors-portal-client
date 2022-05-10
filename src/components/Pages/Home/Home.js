import React from 'react';
import Banner from './Banner';
import BannerBody from './BannerBody';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto px-4'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <BannerBody></BannerBody>
        </div>
    );
};

export default Home;