import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Spinner from '../../Shared/Spinner/Spinner';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const { data: services, isLoading } = useQuery('specialty', () => fetch('http://localhost:5000/services').then(res => res.json()));

    if (isLoading) {
        return <Spinner></Spinner>
    }

    // Handling adding doctor ==============================================================
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);

        // Sending image to image bb server 
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_STORAGE_KEY}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url;
                const doctorInfo = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    img: img
                };

                // Send doctor info to database 
                fetch('http://localhost:5000/add-doctor', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctorInfo)
                })
                .then(res => res.json())
                .then(result => {
                    if(result.insertedId) {
                        toast.success('Doctor Added Successfully');
                        reset();
                    }
                    else{
                        toast.error('Faild To Add Doctor');
                    }
                });
                
            }
        });
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
                        <select 
                        {...register("specialty")}
                        className="select select-primary w-full mb-3">
                            {
                                services.map(service => <option 
                                    key={service._id}
                                    value={service.name}
                                    >{service.name}</option>)
                            }
                        </select>

                        {/* Photo  */}
                        <input type="file"
                            {...register("image", {required: true })}
                            className="input input-bordered input-primary w-full mb-3" 
                        />
                        <p className='text-red-500 mb-3 mt-[-8px]'>{errors.image?.type === 'required' && "Image is required"}</p>

                        <button className='btn bg-gradient-to-r from-secondary to-primary text-white border-0 px-8 w-full'>Add</button>
                    </form>

                    
                </div>
            </div>
        </div>
    );
};

export default AddDoctor;