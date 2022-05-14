import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialAuth from './SocialAuth';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const handleLogin = data => {
          signInWithEmailAndPassword(data.email, data.password);
      };

    useEffect( () => {
        if (user){
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <div className='container px-4'>
            <div className='w-96 mx-auto flex flex-col justify-center mt-20 lg:mt-48'>
                <div className='rounded-lg border shadow-xl p-5 bg-gray-50'>
                    <h2 className='text-center text-2xl mt-2 mb-5'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <input type="email" placeholder="Email"
                            {...register("email", {required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'required' && "Email is required"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'pattern' && "Invalid Email!"}</p>

                        <input type="password" placeholder="Password"
                           {...register("password", {required: true, minLength: 6, maxLength: 20})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'required' && "Password Required!"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'minLength' && "Minimum 6 character required !"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'maxLength' && "Maximum 6 character required !"}</p>

                        <button className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8 w-full'>Login</button>
                    </form>
                    <SocialAuth></SocialAuth>
                </div>
            </div>
        </div>
    );
};

export default Login;