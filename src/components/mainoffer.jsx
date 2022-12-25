import React from 'react';
import {MainTitle} from "./utils/MainTitle/MainTitle";

export const MainOffer = ({slider, sliderPosition}) => {
    const {title, desc} = slider
    return (
        <>
            <div className={`main__offer position__${sliderPosition}`}>
                <MainTitle>{title}</MainTitle>
                <p className="text">{desc}</p>
            </div>
        </>
    );
};

