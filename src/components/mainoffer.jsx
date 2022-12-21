import React from 'react';

export const MainOffer = ({slider, sliderPosition}) => {
    const {title, desc} = slider
    return (
        <>
            <div className={`main__offer position__${sliderPosition}`}>
                <h1>{title}</h1>
                <p className="text">{desc}</p>
            </div>
        </>
    );
};

