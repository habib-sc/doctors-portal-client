import React from 'react';
import treatmentImg from '../../../assets/images/treatment.png';
import PrimaryButton from '../../Shared/Buttons/PrimaryButton';

const BannerBody = () => {
    return (
        <div className='container px-4'>
            <div className="hero py-10 shadow-lg border rounded-lg mb-20">
                <div className="hero-content flex-col lg:flex-row px-0 lg:px-20">
                    <img src={treatmentImg} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-0 lg:ml-20'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, On Your Terms</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBody;