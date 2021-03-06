import React from 'react';

const TestimonialCard = (props) => {
    const { name, review, img, location } = props.review;
    return (
        <div className="card lg:w-full bg-base-100 shadow-xl">
            <div className='card-body'>
                <div>
                    <p>{review}</p>
                </div>
                <div className='mt-5 flex items-center'>
                    <div className="avatar mr-5">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt="avatar" />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <h3 className="text-xl">{location}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;