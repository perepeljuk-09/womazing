import React from 'react';
import inst from "./instagram (1) 1.png";
import fb from "./facebook (1) 1.png";
import twit from "./twitter (1) 1.png";
import visa from "./visa-mastercard 1.png";
import s from "./footer.module.css"
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className="container">
                <div className={s.footer__up}>
                    <div className={s.footer__logo}>
                        <Link to="/" className={s.logo}></Link>
                        <Link to="/">Womazing</Link>
                    </div>
                    <nav className={s.footer__nav}>
                        <ul className={s.nav__list}>
                            <li className={s.list__item}><Link to="/">Главная</Link></li>
                            <li className={s.list__item}><Link to="/shop">Магазин</Link></li>
                            <li className={s.list__item}><Link to="/about">О бренде</Link></li>
                            <li className={s.list__item}><Link to="/contacts">Контакты</Link></li>
                        </ul>
                    </nav>
                    <div className={s.footer__call}>
                        <span>+7 (495) 823-54-12</span>
                    </div>
                </div>
                <div className={s.footer__down}>
                    <div className={s.copyright}>
                        © Все права защищены
                        <p><a href="#">Политика конфиденциальности</a></p>
                        <p><a href="#">Публичная оферта</a></p>
                    </div>
                    <ul className={s.clothes}>
                        <li><Link to="/shop/t-shirts">Футболки</Link></li>
                        <li><Link to="/shop/sweatshirts">Свитшоты</Link></li>
                        <li><Link to="/shop/cardigans">Кардиганы</Link></li>
                        <li><Link to="/shop/swimwear">Купальники</Link></li>
                    </ul>
                    <div className={s.contact}>
                        hello@womazing.com
                        <div className={s.soc__logo}>
                            <img src={inst} alt="instagram"/>
                            <img src={fb} alt="facebook"/>
                            <img src={twit} alt="twitter"/>
                        </div>
                        <div className={s.visa}>
                            <img src={visa} alt="visa-mastercard"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

