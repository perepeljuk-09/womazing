import React from 'react';
import './ButtonTransp.css';
import {Link} from "react-router-dom";

const ButtonTransp = ({children, to}) => {
    return (
        <Link to={to} className="btnTrans">
            {children}
        </Link>
    );
};

export {ButtonTransp};