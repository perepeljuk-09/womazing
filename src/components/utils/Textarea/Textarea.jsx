import React from 'react';
import s from './Textarea.module.css';

const Textarea = (props) => {
    return (
        <textarea {...props} className={s.main__textarea}/>
    );
};

export {Textarea};