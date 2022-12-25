import React from 'react';
import './TitleH2.css';

const TitleH2 = ({children}) => {
    return (
        <h2 className="title__h2">
            {children}
        </h2>
    );
};

export {TitleH2};