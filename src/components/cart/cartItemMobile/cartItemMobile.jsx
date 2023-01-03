import React from 'react';
import vector from "../img/Vector 3.png";
import {removeItem, updateItem} from "../../redux/cartReducer";
import {useDispatch} from "react-redux";
import s from "./cartItemMobile.module.css";

const CartItemMobile = ({item}) => {
    const dispatch = useDispatch();

    const handlerUpdateCart = (id, newCount) => {
        dispatch(updateItem(id, newCount))
    };
    return (
        <div className={s.item__mobile}>
            <img className={s.item__photo} src={item.src} alt={item.src}/>
            <div className={s.item__info}>
                <img className={s.delete} src={vector} alt={vector} onClick={() => dispatch(removeItem(item.id))}/>
                <span className={s.text}>{item.name}</span>
                <div className={s.block__price}>
                    <p>Цена за шт:</p>
                    <span className={s.text}>${item.price}</span>
                </div>
                <div className={s.block__count}>
                    <p>Количество:</p>
                    <input className={s.count} value={item.itemsCount}
                           onChange={(e) => handlerUpdateCart(item.id, +e.target.value)}/>
                </div>
                <div className={s.block__total}>
                    <p>Всего:</p>
                    <span className={s.text}>${item.price * item.itemsCount}</span>
                </div>
            </div>
        </div>
    );
};

export {CartItemMobile};