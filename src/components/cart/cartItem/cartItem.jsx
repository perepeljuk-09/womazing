import React from 'react';
import vector from "../img/Vector 3.png"
import {useDispatch} from "react-redux";
import {removeItem, updateItem} from "../../redux/cartReducer";

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const handlerUpdateCart = (id, newCount) => {
        dispatch(updateItem(id, newCount))
    };

    return (
            <div className="cart__item">
                <img className="delete" src={vector} alt={vector} onClick={() => dispatch(removeItem(item.id))}/>
                <img className="item__photo" src={item.src} alt={item.src}/>
                <span className="text">{item.name}</span>
                <span className="text">${item.price}</span>
                <div className="block__count">
                    <input className="count" value={item.itemsCount}
                           onChange={(e) => handlerUpdateCart(item.id, +e.target.value)}/>
                </div>
                <span className="text">${item.price * item.itemsCount}</span>
            </div>
    );
};

export {CartItem};