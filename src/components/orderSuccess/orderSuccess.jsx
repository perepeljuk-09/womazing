import React from 'react';
import s from './orderSuccess.module.css';
import {MainTitle} from "../utils/MainTitle/MainTitle";
import success from './img/Group.png';
import {TitleH3} from "../utils/TitleH3/TitleH3";
import {ButtonTransp} from "../utils/Buttons/ButtonTransp";
import {Link} from "react-router-dom";

const OrderSuccess = () => {
    return (
        <main className="main">
            <div className="container">
                <section className={s.order__success}>
                    <MainTitle>Заказ получен</MainTitle>
                    <p className="shop__category">Главная</p>
                    <div className={s.content}>
                        <div className={s.block__left}>
                            <img className={s.img__success} src={success} alt="order success"/>
                            <div className={s.block__text}>
                                <TitleH3>Заказ успешно оформлен</TitleH3>
                                <p className={s.text}>Мы свяжемся с вами в ближайшее время!</p>
                            </div>
                        </div>
                        <Link to={"/"}>
                            <ButtonTransp>Перейти на главную</ButtonTransp>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
};

export {OrderSuccess};