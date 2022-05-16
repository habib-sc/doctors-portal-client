import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddDoctor = data => {
        console.log(data);
    };

    return (
        <div className='px-4'>
            <h2>Add Docttor</h2>

            <div className='lg:w-96 mx-auto flex flex-col justify-center mt-20'>
                <div className='rounded-lg border shadow p-5'>
                    <h2 className='text-center text-2xl mt-2 mb-5'>Add A Doctor</h2>
                    <form onSubmit={handleSubmit(handleAddDoctor)}>
                        {/* Name  */}
                        <input type="text" placeholder="Name"
                            {...register("name", {required: true })}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.name?.type === 'required' && "Name is required"}</p>

                        {/* Email  */}
                        <input type="email" placeholder="Email"
                            {...register("email", {required: true, pattern: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'required' && "Email is required"}</p>
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.email?.type === 'pattern' && "Invalid Email!"}</p>

                        {/* specilty  */}
                        <input type="text" placeholder="Specilty"
                           {...register("specilty", {required: true})}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.specilty?.type === 'required' && "Specilty is required"}</p>

                        <button className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8 w-full'>Add</button>
                    </form>

                    
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;