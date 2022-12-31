import React from 'react';
import s from './TitleH3.module.css';

const TitleH3 = ({children}) => {
    return (
        <h3 className={s.title__h3}>
            {children}
        </h3>
    );
};

export {TitleH3};