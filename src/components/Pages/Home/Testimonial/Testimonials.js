import React from 'react';
import quoteImg from '../../../../assets/icons/quote.svg';
import people1 from '../../../../assets/images/people1.png';
import people2 from '../../../../assets/images/people2.png';
import people3 from '../../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {

    const reviews = [
        {
            _id: 1, 
            name: "Alex Rikon",
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab ipsum et libero nam sit minima sint aperiam,",
            location: "london",
            img: people1

        },
        {
            _id: 2, 
            name: "Albert Haris",
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab ipsum et libero nam sit minima sint aperiam,",
            location: "Australia",
            img: people2

        },
        {
            _id: 3, 
            name: "Jhon Abraham",
            review: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim ab ipsum et libero nam sit minima sint aperiam,",
            location: "Bangladesh",
            img: people3

        },
    ];

    return (
        <section className='my-20 container px-4'>
            <div className='flex justify-between'>
                <div className='mb-3'>
                    <h3 className='text-xl font-bold text-secondary uppercase mb-1'>Testimonials</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quoteImg} className='w-48' alt="" />
                </div>
            </div>
            <div className='grid gird-cols-1 lg:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <TestimonialCard key={review._id} review={review}></TestimonialCard>)
                }
            </div>
        </section>
    );
};

export default Testimonials;