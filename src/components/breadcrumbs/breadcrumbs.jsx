import React from 'react';
import s from './breadcrumbs.module.css';
import {useSelector} from "react-redux";
import {Link, useLocation, useParams} from "react-router-dom";

const Breadcrumbs = (props) => {

    const getTitle = {
        '': '',
        'shop': 'Магазин',
        'about': 'О бренде',
        'contacts': 'Контакты',
        'cart': 'Корзина',
        't-shirts': 'Футболки',
        'sweatshirts': 'Свитшоты',
        'swimwear': 'Купальники',
        'checkout': 'Оформление заказа',
        'success': 'Заказ получен',
    }

    const params = useParams()
    const location = useLocation()
    const arrKeys = location.pathname.split('/').filter(x => x)
    const arrValues = []
    arrKeys.forEach(key => arrValues.push(getTitle[key]))
    const goods = useSelector(state => state.shopReducer.goods)
    if (params.id) {
        const item = goods.find(item => item.id !== params.id)
        arrValues.splice(arrValues.length - 1, 1, item.name)

    }

    return (
        <ul className={s.breadcrumbs}>
            <li className={s.crumb}><Link to={'/'}>Главная</Link></li>
            {arrValues.map((value, index) => {
                const routeTo = `/${arrKeys.slice(0, index + 1).join('/')}`
                return index !== arrValues.length - 1 ? (
                    <li key={value} className={s.crumb}><Link to={routeTo}>{value}</Link></li>
                ) : (
                    <li key={value} className={s.crumb}>{value}</li>
                )
            })}
        </ul>
    );
};

export {Breadcrumbs};