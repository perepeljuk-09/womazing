import React from 'react';
import s from './TitleH2.module.css';

const TitleH2 = ({children}) => {
    return (
        <h2 className={s.title__h2}>
            {children}
        </h2>
    );
};

export {TitleH2};