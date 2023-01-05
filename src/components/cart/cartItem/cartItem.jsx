import React from 'react';
import vector from "../img/Vector 3.png"
import {useDispatch} from "react-redux";
import {removeItem, updateItem} from "../../redux/cartReducer";
import s from "./cartItem.module.css";

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const handlerUpdateCart = (id, newCount, size, color) => {
        dispatch(updateItem(id, newCount, size, color))
    };

    return (
            <div className={s.cart__item}>
                <img className={s.delete} src={vector} alt={vector} onClick={() => dispatch(removeItem(item.id, item.size, item.color))}/>
                <img className={s.item__photo} src={item.src} alt={item.src}/>
                <span className={s.text}>{item.name}</span>
                <span className={s.text}>${item.price}</span>
                <div className={s.block__count}>
                    <input className={s.count} value={item.itemsCount}
                           onChange={(e) => handlerUpdateCart(item.id, +e.target.value, item.size, item.color)}/>
                </div>
                <span className={s.text}>${item.price * item.itemsCount}</span>
            </div>
    );
};

export {CartItem};