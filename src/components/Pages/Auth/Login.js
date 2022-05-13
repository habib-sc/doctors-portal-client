import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(errors.password);

    return (
        <div className='container px-4'>
            <div className='w-96 h-[80vh] mx-auto flex flex-col justify-center'>
                <div className='rounded-lg border shadow-xl p-5 bg-gray-50'>
                    <h2 className='text-center text-2xl mt-2 mb-5'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" placeholder="Email"
                            {...register("email", {required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i})}
                            class="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'required' && "Email is required"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'pattern' && "Invalid Email!"}</p>

                        <input type="password" placeholder="Password"
                           {...register("password", {required: true, minLength: 6, maxLength: 20})}
                            class="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'required' && "Password Required!"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'minLength' && "Minimum 6 character required !"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.password?.type === 'maxLength' && "Maximum 6 character required !"}</p>

                        <button className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8 w-full'>Login</button>

                        <div class="divider">OR</div>

                        <button className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8 w-full'>Continue With Google</button>
        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;