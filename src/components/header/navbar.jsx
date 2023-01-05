import React, {useEffect, useState} from 'react';
import {Link, NavLink, useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";
import s from './navbar.module.css';
import phone__1 from './img/telephone 1.png'
import phone__2 from './img/telephone 2.png'

export const Navbar = ({setIsModal}) => {
    const {pathname} = useLocation()

    const countGoods = useSelector(state => state.cartReducer.goods.length)
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        setMenuActive(false)
    } ,[pathname])

    return (
        <header className={s.App__header}>
            <div className="container">
                <div className={s.header__inner}>
                    <div className={s.header__logo}>
                        <Link to="/" className={s.logo}></Link>
                        <Link to="/">Womazing</Link>
                    </div>
                    <nav className={s.header__nav}>
                        <ul className={s.nav__list}>
                            <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/">
                                <li className={s.list__item}>Главная</li>
                            </NavLink>
                            <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/shop">
                                <li className={s.list__item}>Магазин</li>
                            </NavLink>
                            <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/about">
                                <li className={s.list__item}>О бренде</li>
                            </NavLink>
                            <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/contacts">
                                <li className={s.list__item}>Контакты</li>
                            </NavLink>
                        </ul>
                    </nav>
                    <div className={s.header__call}>
                        <button className={s.telephone} onClick={() => setIsModal(true)}>
                            <img className={s.phone__1} src={phone__1} alt=""/>
                            <img className={s.phone__2} src={phone__2} alt=""/>
                        </button>
                        <span>+7 (495) 823-54-12</span>
                        <Link to="/cart" className={s.bags}>
                            {countGoods !== 0 && <div className={s.order}>{countGoods}</div>}
                        </Link>
                    </div>
                    <div className={s.burger__logo} onClick={() => setMenuActive(!menuActive)}>
                        <span className={s.burger__row}></span>
                    </div>
                </div>
            </div>

            {/*Burger menu */}
            <div className={`${s.burger__menu} ${menuActive ? s.active : s.unActive}`}>
                <div className="container">
                    <nav className={s.header__nav__burger}>
                        <ul className={s.nav__burger__list}>
                            <li className={s.list__item__burger}>
                                <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/">
                                    Главная
                                </NavLink>
                            </li>
                            <li className={s.list__item__burger}>
                                <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/shop">
                                    Магазин
                                </NavLink>
                            </li>
                            <li className={s.list__item__burger}>
                                <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/about">
                                    О бренде
                                </NavLink>
                            </li>
                            <li className={s.list__item__burger}>
                                <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/contacts">
                                    Контакты
                                </NavLink>
                            </li>
                            <li className={s.list__item__burger}>
                                <span onClick={() => setIsModal(true)}>Заказать звонок</span>
                            </li>
                            <li className={s.list__item__burger}>
                                <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/cart">
                                    Корзина
                                </NavLink>
                                <Link to="/cart" className={s.bags}>
                                    {countGoods !== 0 && <div className={s.order}>{countGoods}</div>}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

