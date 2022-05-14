import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SocialAuth from './SocialAuth';

const Register = () => {
    const [passwordError, setPasswordError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = data => {
        if (data.password !== data.confirmPassword) {
            setPasswordError('Password not matching with Confirm Password!');
            return;
        }
        console.log(data);
    };

    return (
        <div className='container px-4'>
            <div className='w-96 mx-auto flex flex-col justify-center mt-20 lg:mt-48'>
                <div className='rounded-lg border shadow-xl p-5 bg-gray-50'>
                    <h2 className='text-center text-2xl mt-2 mb-5'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleRegister)}>
                        {/* Name  */}
                        <input type="text" placeholder="Name"
                            {...register("name", {required: true })}
                            class="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.name?.type === 'required' && "Name is required"}</p>

                        {/* Email  */}
                        <input type="email" placeholder="Email"
                            {...register("email", {required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i})}
                            class="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'required' && "Email is required"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'pattern' && "Invalid Email!"}</p>

                        {/* Password  */}
                        <input type="password" placeholder="Password"
                           {...register("password", {required: true, minLength: 6, maxLength: 20})}
                            class="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'required' && "Password Required!"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'minLength' && "Minimum 6 character required !"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'maxLength' && "Maximum 6 character required !"}</p>

                        {/* Confirm Password  */}
                        <input type="password" placeholder="Confirm Password"
                           {...register("confirmPassword", {required: true, minLength: 6, maxLength: 20})}
                            class="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.confirmPassword?.type === 'required' && "Password Required!"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.confirmPassword?.type === 'minLength' && "Minimum 6 character required !"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.confirmPassword?.type === 'maxLength' && "Maximum 6 character required !"}</p>
                        {passwordError &&
                            <p className='text-red-500 mb-3 mt-[-8px]'>{passwordError}</p>
                        }

                        <button className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8 w-full'>Sign Up</button>
                    </form>
                    <SocialAuth></SocialAuth>
                </div>
            </div>
        </div>
    );
};

export default Register;