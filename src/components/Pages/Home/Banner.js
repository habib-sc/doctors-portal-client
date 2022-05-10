import React from 'react';
import bannerImg from '../../../assets/images/chair.png';
import PrimaryButton from '../../Shared/Buttons/PrimaryButton';

const Banner = () => {
    return (
        <div class="hero min-h-[60vh] text-accent">
            <div class="flex flex-col lg:flex-row-reverse items-center py-20">
                <div className='flex-1'>
                    <img src={bannerImg} class="rounded-lg shadow-2xl h-80 float-right" />
                </div>
                <div className='flex-1'>
                    <h1 class="text-5xl font-bold">Your New Smile Starts
                        <span className='block mt-1'>Here</span>
                    </h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;