import React from 'react';
import './Button.css';
import {Link} from "react-router-dom";

const Button = ({children, to, ...props}) => {
    return (
        <Link {...props} to={to} className={`btn `}>
            {children}
        </Link>
    );
};

export {Button};