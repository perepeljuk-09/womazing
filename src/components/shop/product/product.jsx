import React from 'react';
import vector__2 from "../../homepage/new__collection__images/Vector 2.png";
import './product.css'
import {Link} from "react-router-dom"
import {TitleH4} from "../../utils/TitleH4/TitleH4";

const Product = ({item}) => {

    const {id, src, category, name, lastPrice, price} = item;

    return (
        <div key={id} className="good__item">
            <div className="item">
                <img className="item__img" src={src} alt="images__1"/>
                <Link to={`/shop/${category}/${id}`}>
                    <div className="overlay">
                        <img src={vector__2} alt="vector__2"/>
                    </div>
                </Link>
            </div>
            <TitleH4>{name}</TitleH4>
            <p><span>{lastPrice && `$${lastPrice}`}</span>${price}</p>
        </div>
    );
};

export {Product};