import React, {useState} from 'react';
import './contacts.css'
import map from './img/map.jpeg'
import {Button} from "../utils/Buttons/Button";
import {MainTitle} from "../utils/MainTitle/MainTitle";
import {TitleH3} from "../utils/TitleH3/TitleH3";
import {TitleH4} from "../utils/TitleH4/TitleH4";
import {Input} from "../utils/Input/Input";
import {Textarea} from "../utils/Textarea/Textarea";
import {Breadcrumbs} from "../breadcrumbs/breadcrumbs";

export const Contacts = () => {
    const [showMessage, setShowMessage] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => setShowMessage(true), 500)
        setTimeout(() => setShowMessage(false), 3000)
    }
    const removeMessage = () => setShowMessage(false);
    return (
        <main className="main">
            <div className="container">
                <section className="contacts">
                    <MainTitle>Контакты</MainTitle>
                    <Breadcrumbs />
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
                    <div>
                        <div className="form">
                            <TitleH3>Напишите нам</TitleH3>
                            <Input name="name" type="text" placeholder="Имя"/>
                            <Input name="E-mail" type="text" placeholder="E-mail"/>
                            <Input name="phone" type="text" placeholder="Телефон"/>
                            <Textarea name="message" cols="30" rows="10" placeholder="Сообщение"/>
                            <Button onClick={handleSubmit}>Отправить</Button>
                            <div className={showMessage ? "message active" : "message"}
                                onClick={removeMessage
                            }>Сообщение успешно отправлено</div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

