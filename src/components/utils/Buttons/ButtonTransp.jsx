import React from 'react';
import s from './ButtonTransp.module.css';

const ButtonTransp = ({children, ...props}) => {
    return (
        <button {...props} className={s.btnTrans}>
            {children}
        </button>
    );
};

export {ButtonTransp};