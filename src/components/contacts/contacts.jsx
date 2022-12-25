import React from 'react';
import './contacts.css'
import map from './img/map.jpeg'
import {Button} from "../utils/Buttons/Button";
import {MainTitle} from "../utils/MainTitle/MainTitle";
import {TitleH3} from "../utils/TitleH3/TitleH3";
import {TitleH4} from "../utils/TitleH4/TitleH4";

export const Contacts = () => {
    return (
        <main className="main">
            <div className="container">
                <section className="contacts">
                    <MainTitle>Контакты</MainTitle>
                    <p className="shop__category">Главная</p>
                    <div className="map">
                        <img src={map} alt="map"/>
                    </div>
                    <div className="block__contacts">
                        <div className="contact__item">
                            <span className="item__name">Телефон</span>
                            <TitleH4>+7 (495) 823-54-12</TitleH4>
                        </div>
                        <div className="contact__item">
                            <span className="item__name">E-mail</span>
                            <TitleH4>info@sitename.com</TitleH4>
                        </div>
                        <div className="contact__item">
                            <span className="item__name">Адрес</span>
                            <TitleH4>г.Москва, Кутузовский проспект, 36с9</TitleH4>
                        </div>
                    </div>
                    <form action="contacts">
                        <div className="form">
                            <TitleH3>Напишите нам</TitleH3>
                            <input className="form__input" name="name" type="text" placeholder="Имя"/>
                            <input className="form__input" name="E-mail" type="text" placeholder="E-mail"/>
                            <input className="form__input" name="phone" type="text" placeholder="Телефон"/>
                            <textarea className="form__textarea" name="message" cols="30" rows="10" placeholder="Сообщение"/>
                            {/*<input className="input__submit"  type="submit" />*/}
                            <Button >Отправить</Button>
                            <div className="message">Сообщение успешно отправлено</div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};

