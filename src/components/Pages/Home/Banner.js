import React from 'react';
import bannerImg from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div class="hero min-h-[60vh] text-accent">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div className=''>
                    <img src={bannerImg} class="max-w-sm rounded-lg shadow-2xl" />
                </div>
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;