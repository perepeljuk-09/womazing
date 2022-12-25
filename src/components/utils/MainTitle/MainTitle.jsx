import React from 'react';
import './MainTitle.css';

const MainTitle = ({children}) => {
    return (
        <h1 className="main__title">
            {children}
        </h1>
    );
};

export {MainTitle};