import React from 'react';
import './TitleH3.css';

const TitleH3 = ({children}) => {
    return (
        <h3 className="title__h3">
            {children}
        </h3>
    );
};

export {TitleH3};