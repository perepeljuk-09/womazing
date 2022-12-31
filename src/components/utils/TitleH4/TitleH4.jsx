import React from 'react';
import s from './TitleH4.module.css';

const TitleH4 = ({children}) => {
    return (
        <h4 className={s.title__h4}>
            {children}
        </h4>
    );
};

export {TitleH4};