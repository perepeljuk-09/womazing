import React from 'react';
import './TitleH4.css';

const TitleH4 = ({children}) => {
    return (
        <h4 className="title__h4">
            {children}
        </h4>
    );
};

export {TitleH4};