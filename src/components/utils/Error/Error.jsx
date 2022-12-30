import React from 'react';
import s from './Error.module.css';

const Error = ({children}) => {
    return (
        <p className={s.error}>
            {children}
        </p>
    );
};

export {Error};