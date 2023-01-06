import React from 'react';
import vector from "../img/Vector 3.png"
import s from "./cartItem.module.css";

const CartItem = ({item, handlerUpdateCart, handlerRemoveItem}) => {

    const { src, id, size, color, name, price, itemsCount} = item;

    return (
            <div className={s.cart__item}>
                <img className={s.delete} src={vector} alt={vector} onClick={() => handlerRemoveItem(id, size, color)}/>
                <img className={s.item__photo} src={src} alt={src}/>
                <span className={s.text}>{name}</span>
                <span className={s.text}>${price}</span>
                <div className={s.block__count}>
                    <input className={s.count} value={itemsCount}
                           onChange={(e) => handlerUpdateCart(id, +e.target.value, size, color)}/>
                </div>
                <span className={s.text}>${price * itemsCount}</span>
            </div>
    );
};

export {CartItem};