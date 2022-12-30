import React from 'react';
import vector__2 from "../../new__collection/Vector 2.png";
import './product.css'
import {Link} from "react-router-dom"
import {TitleH4} from "../../utils/TitleH4/TitleH4";

const Product = ({item}) => {
    return (
        <div key={item.id} className="good__item">
            <div className="item">
                <img className="item__img" src={item.src} alt="images__1"/>
                <Link to={`/shop/${item.category}/${item.id}`}>
                    <div className="overlay">
                        <img src={vector__2} alt="vector__2"/>
                    </div>
                </Link>
            </div>
            <TitleH4>{item.name}</TitleH4>
            <p><span>{item.lastPrice && `$${item.lastPrice}`}</span>${item.price}</p>
        </div>
    );
};

export {Product};