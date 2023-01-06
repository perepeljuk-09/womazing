import React from 'react';
import vector from "../img/Vector 3.png";
import s from "./cartItemMobile.module.css";

const CartItemMobile = ({item, handlerUpdateCart, handlerRemoveItem}) => {

    const { src, id, size, color, name, price, itemsCount} = item;

    return (
        <div className={s.item__mobile}>
            <img className={s.item__photo} src={src} alt={src}/>
            <div className={s.item__info}>
                <img className={s.delete} src={vector} alt={vector} onClick={() => handlerRemoveItem(id, size, color)}/>
                <span className={s.text}>{name}</span>
                <div className={s.block__price}>
                    <p>Цена за шт:</p>
                    <span className={s.text}>${price}</span>
                </div>
                <div className={s.block__count}>
                    <p>Количество:</p>
                    <input className={s.count} value={itemsCount}
                           onChange={(e) => handlerUpdateCart(id, +e.target.value, size, color)}/>
                </div>
                <div className={s.block__total}>
                    <p>Всего:</p>
                    <span className={s.text}>${price * itemsCount}</span>
                </div>
            </div>
        </div>
    );
};

export {CartItemMobile};