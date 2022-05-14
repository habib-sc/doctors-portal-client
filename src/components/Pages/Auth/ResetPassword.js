import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner/Spinner';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const handleResetPassword = data => {
        sendPasswordResetEmail(data.email);
        setEmail(data.email);
    }

    const handlePasswordResetAgain = () => {
        sendPasswordResetEmail(email);
        toast.success('Password Reset Link Sent');
    }

    if (sending) {
        return <Spinner></Spinner>
    }

    if (email) {
        return (
            <div className='container px-4'>
                <div className='w-full px-4 border border-secondary rounded-lg py-4 text-center mt-10 bg-cyan-50'>
                    <h2 className='text-lg lg:text-2xl text-secondary font-semibold'>We have sent password reset link to <span className='px-2 pb-1 rounded-lg bg-secondary text-white'>{email}</span></h2>
                    <h3 className='text-lg lg:text-xl text-primary font-semibold my-2'>Please check your email and reset your password.</h3>
                    <p className='text-lg lg:text-xl font-semibold'>If not received verification link. <button onClick={handlePasswordResetAgain} className='px-2 rounded-lg bg-primary text-white'>Verify Again</button></p>
                </div>
            </div>
        );
    }

    return (
        <div className='container px-4'>
            <div className='lg:w-96 mx-auto flex flex-col justify-center mt-20 lg:mt-48'>
                <div className='rounded-lg border shadow-xl p-5 bg-gray-50'>
                    <h2 className='text-center text-2xl mt-2 mb-5'>Password Reset</h2>
                    <form onSubmit={handleSubmit(handleResetPassword)}>
                        <input type="email" placeholder="Email"
                            {...register("email", {required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'required' && "Email is required"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'pattern' && "Invalid Email!"}</p>

                        <button className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8 w-full'>Reset</button>
                    </form>
                    
                    <p className='mt-2 text-center'>Goto <Link to='/login' className='text-secondary'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;