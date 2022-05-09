import React from 'react';

const InfoCard = ({icon, cardTitle, bgClass}) => {
    return (
        <div class={`card card-side text-white shadow-xl px-3 ${bgClass}`}>
            <figure>
                <img src={icon} alt="Movie"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to watch on Jetflix app.</p>
            </div>
        </div>
    );
};

export default InfoCard;