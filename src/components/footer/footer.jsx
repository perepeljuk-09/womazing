import React from 'react';
import inst from "./instagram (1) 1.png";
import fb from "./facebook (1) 1.png";
import twit from "./twitter (1) 1.png";
import visa from "./visa-mastercard 1.png";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__up">
                    <div className="footer__logo">
                        <a href="#" className="logo"></a>
                        <a href="#">Womazing</a>
                    </div>
                    <nav className="footer__nav">
                        <ul className="nav__list">
                            <li className="list__item">Главная</li>
                            <li className="list__item">Магазин</li>
                            <li className="list__item">О бренде</li>
                            <li className="list__item">Контакты</li>
                        </ul>
                    </nav>
                    <div className="footer__call">
                        <span>+7 (495) 823-54-12</span>
                    </div>
                </div>
                <div className="footer__down">
                    <div className="copyright">
                        © Все права защищены
                        <p><a href="#">Политика конфиденциальности</a></p>
                        <p><a href="#">Публичная оферта</a></p>
                    </div>
                    <ul className="clothes">
                        <a href="#"><li>Пальто</li></a>
                        <a href="#"><li>Свитшоты</li></a>
                        <a href="#"><li>Кардиганы</li></a>
                        <a href="#"><li>Толстовки</li></a>
                    </ul>
                    <div className="contact">
                        hello@womazing.com
                        <div className="soc__logo">
                            <img src={inst} alt="instagram"/>
                            <img src={fb} alt="facebook"/>
                            <img src={twit} alt="twitter"/>
                        </div>
                        <div className="visa">
                            <img src={visa} alt="visa-mastercard"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

