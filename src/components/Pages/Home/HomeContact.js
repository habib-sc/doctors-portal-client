import React from 'react';
import appointmentImg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/Buttons/PrimaryButton';

const HomeContact = () => {
    return (
        <section style={{background: `url(${appointmentImg})`}}>
            <div className='container px-4 my-20 py-10'>
                <div className='text-center mb-3'>
                    <h3 className='text-xl font-bold text-secondary uppercase mb-1'>Contact Us</h3>
                    <h1 className='text-4xl text-white'>Stay Connected With Us</h1>
                </div>
                <div className='mt-10'>
                    <form className='w-full lg:w-96 mx-auto text-center'>
                        <input type="email" placeholder='Your Email' className='w-full mb-5 rounded py-2 pl-1' /> <br />
                        <input type="text" placeholder='Subject' className='w-full mb-5 rounded py-2 pl-1' /> <br />
                        <textarea name="" placeholder='Your Message' rows="5" className='w-full mb-5 rounded py-2 pl-1'></textarea>
                        <PrimaryButton>Submit</PrimaryButton>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;