import React from 'react';
import s from './aboutBrand.module.css';
import girl_1 from './img/girl_1.png';
import girl_2 from './img/girl_2.png';
import {Button} from "../utils/Buttons/Button";
import {TitleH3} from "../utils/TitleH3/TitleH3";
import {Link} from "react-router-dom";
import {MainContainer} from "../utils/mainContainer/mainContainer";

export const AboutBrand = () => {
    return (
        <MainContainer title={"О бренде"}>
            <div className={s.block__about}>
                <img src={girl_2} alt="girl_2"/>
                <div className={s.info}>
                    <TitleH3>Идея и женщина</TitleH3>
                    <span className={s.info__content}>
                        Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.<p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.</p>
                    </span>
                </div>
            </div>
            <div className={s.block__about}>
                <div className={s.info}>
                    <TitleH3>Магия в деталях</TitleH3>
                    <span className={s.info__content}>
                        Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.<p>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.</p>
                    </span>
                </div>
                <img src={girl_1} alt="girl_1"/>
            </div>
            <Link className={s.link__btn} to="/shop">
                <Button>Перейти в магазин</Button>
            </Link>
        </MainContainer>
    );
};

