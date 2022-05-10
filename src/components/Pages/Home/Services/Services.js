import React from 'react';
import cavityImg from '../../../../assets/images/cavity.png';
import fluorideImg from '../../../../assets/images/fluoride.png';
import whiteningImg from '../../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard/ServiceCard';

const Services = () => {

    const services = [
        {
            _id: 1, 
            name: "Fluoride Treatment",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab ipsum et libero nam sit minima sint aperiam,",
            img: fluorideImg

        },
        {
            _id: 2, 
            name: "Cavity Filling",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab ipsum et libero nam sit minima sint aperiam,",
            img: cavityImg

        },
        {
            _id: 3, 
            name: "Teeth Whitening",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab ipsum et libero nam sit minima sint aperiam,",
            img: whiteningImg

        },
    ];

    return (
        <section className='my-20 container px-4'>
            <div className='text-center mb-3'>
                <h3 className='text-xl font-bold text-secondary uppercase mb-1'>Our Services</h3>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid gird-cols-1 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;