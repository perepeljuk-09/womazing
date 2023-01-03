import React from 'react';
import s from './listDropDown.module.css';
import {TitleH4} from "../../utils/TitleH4/TitleH4";
import {useState} from "react";

const ListDropDown = ({children, title}) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className={s.footer__category} onClick={() => setIsActive(prev => !prev)}>
            <TitleH4>{title}</TitleH4>
            <ul className={isActive ? `${s.content} ${s.active}` :`${s.content}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </ul>
        </div>
    );
};

export {ListDropDown};