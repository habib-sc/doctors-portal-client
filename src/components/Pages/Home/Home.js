import React from 'react';
import Banner from './Banner';
import Info from './Info/Info';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='container mx-auto px-4'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
        </div>
    );
};

export default Home;