import React from 'react';
import './cart.css'
import {useSelector} from "react-redux";
import {CartItem} from "./cartItem/cartItem";
import {Button} from "../utils/Buttons/Button";
import {ButtonTransp} from "../utils/Buttons/ButtonTransp";
import {MainTitle} from "../utils/MainTitle/MainTitle";
import {TitleH4} from "../utils/TitleH4/TitleH4";
import {TitleH3} from "../utils/TitleH3/TitleH3";
import {Link} from "react-router-dom";

const Cart = () => {
    const cartGoods = useSelector(state => state.cartReducer.goods);
    const fullCost = useSelector(state => state.cartReducer.goods.reduce((acc, next) => acc += Number(next.price*next.itemsCount), 0));

    return (
        <main className="main">
            <div className="container">
                <section className="cart">
                    <MainTitle>Корзина</MainTitle>
                    <p className="shop__category">Главная</p>
                    <div className="content__header">
                        <TitleH4>Товар</TitleH4>
                        <TitleH4>Цена</TitleH4>
                        <TitleH4>Количество</TitleH4>
                        <TitleH4>Всего</TitleH4>
                    </div>
                    {cartGoods.map(item => (
                            <CartItem key={item.id} item={item}/>
                        ))
                    }

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
                            <Link to="/checkout">
                                <Button>Оформить заказ</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export {Cart};