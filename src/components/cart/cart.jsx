import React from 'react';
import './cart.css'
import {useDispatch, useSelector} from "react-redux";
import {CartItem} from "./cartItem/cartItem";
import {Button} from "../utils/Buttons/Button";
import {ButtonTransp} from "../utils/Buttons/ButtonTransp";
import {TitleH4} from "../utils/TitleH4/TitleH4";
import {TitleH3} from "../utils/TitleH3/TitleH3";
import {Link} from "react-router-dom";
import {CartItemMobile} from "./cartItemMobile/cartItemMobile";
import {MainContainer} from "../utils/mainContainer/mainContainer";
import {getCartGoods, getCartFullCostOfGoods} from "../selectors/cart-selectors";
import {removeItem, updateItem} from "../redux/cartReducer";

const Cart = () => {
    const cartGoods = useSelector(state => getCartGoods(state));
    const fullCost = useSelector(state => getCartFullCostOfGoods(state));

    const dispatch = useDispatch();
    const handlerUpdateCart = (id, newCount, size, color) => {
        dispatch(updateItem(id, newCount, size, color))
    };
    const handlerRemoveItem = (id, size, color) => {
        dispatch(removeItem(id, size, color))
    };

    return (
        <MainContainer title={"Корзина"}>
            <div className="content__header">
                <TitleH4>Товар</TitleH4>
                <TitleH4>Цена</TitleH4>
                <TitleH4>Количество</TitleH4>
                <TitleH4>Всего</TitleH4>
            </div>
            {cartGoods.map(item => (
                <CartItem key={Number(`${item.id}${item.size}${item.color}`)}
                          item={item}
                          handlerUpdateCart={handlerUpdateCart}
                          handlerRemoveItem={handlerRemoveItem}
                />
            ))}
            {cartGoods.map(item => (
                <CartItemMobile key={Number(`${item.id}${item.size}${item.color}`)}
                                item={item}
                                handlerUpdateCart={handlerUpdateCart}
                                handlerRemoveItem={handlerRemoveItem}
                />
            ))}
            <div className="block__management">
                <form action="cart">
                    <div className="left__block">
                        <input className="input__promo" name="cupon" type="text" placeholder="Введите купон"/>
                        <ButtonTransp type="submit">Применить купон</ButtonTransp>
                    </div>
                </form>
            </div>
            <div className="block__total">
                <span className="total__title">Подытог: </span> <span className="subtotal">${fullCost}</span>
                <div className="total">
                    <div className="total__left">
                        <TitleH3>Итого:</TitleH3>
                        <TitleH3>${fullCost}</TitleH3>
                    </div>
                    <Link to="checkout">
                        <Button>Оформить заказ</Button>
                    </Link>
                </div>
            </div>
        </MainContainer>
    );
};

export {Cart};