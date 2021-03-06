import React from 'react';
import spinner from '../../../assets/icons/spinner.svg';

const Spinner = () => {
    return (
        <div className='h-64 flex flex-col justify-center items-center'>
            <img src={spinner} className='h-32' alt="" />
        </div>
    );
};

export default Spinner;