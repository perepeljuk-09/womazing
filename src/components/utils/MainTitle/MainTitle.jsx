import React from 'react';
import s from './MainTitle.module.css';

const MainTitle = ({children}) => {
    return (
        <h1 className={s.main__title}>
            {children}
        </h1>
    );
};

export {MainTitle};