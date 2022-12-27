import React from 'react';
import s from './Input.module.css';

const Input = (props) => {
    return (
        <input {...props} className={s.main__input} />
    );
};

export {Input};