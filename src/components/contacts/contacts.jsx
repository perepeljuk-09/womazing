import React from 'react';
import './contacts.css'
import map from './img/map.jpeg'

export const Contacts = () => {
    return (
        <main className="main">
            <div className="container">
                <section className="contacts">
                    <h1 className="title">Контакты</h1>
                    <p className="shop__category">Главная</p>
                    <div className="map">
                        <img src={map} alt="map"/>
                    </div>
                    <div className="block__contacts">
                        <div className="contact__item">
                            <span className="item__name">Телефон</span>
                            <h4 className="item__contact">+7 (495) 823-54-12</h4>
                        </div>
                        <div className="contact__item">
                            <span className="item__name">E-mail</span>
                            <h4 className="item__contact">info@sitename.com</h4>
                        </div>
                        <div className="contact__item">
                            <span className="item__name">Адрес</span>
                            <h4 className="item__contact">г.Москва, Кутузовский проспект, 36с9</h4>
                        </div>
                    </div>
                    <form action="contacts">
                        <div className="form">
                            <h3 className="form__title">Напишите нам</h3>
                            <input className="form__input" type="text" placeholder="Имя"/>
                            <input className="form__input" type="text" placeholder="E-mail"/>
                            <input className="form__input" type="text" placeholder="Телефон"/>
                            <textarea className="form__textarea" name="message" cols="30" rows="10" placeholder="Сообщение"/>
                            <input className="input__submit"  type="submit" />
                            <div className="message">Сообщение успешно отправлено</div>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
};

