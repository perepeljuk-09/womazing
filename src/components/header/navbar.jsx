import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom'
import {useSelector} from "react-redux";
import s from './navbar.module.css';

export const Navbar = ({setIsModal}) => {

    const countGoods = useSelector(state => {
         return state.cartReducer.goods.length
    })
    const [menuActive, setMenuActive] = useState(false);

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
                            <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/"><li className={s.list__item}>Главная</li></NavLink>
                            <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/shop"><li className={s.list__item}>Магазин</li></NavLink>
                            <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/about"><li className={s.list__item}>О бренде</li></NavLink>
                            <NavLink className={({isActive}) => isActive ? `${s.active}` : ""} to="/contacts"><li className={s.list__item}>Контакты</li></NavLink>
                        </ul>
                    </nav>
                    <div className={s.header__call}>
                        <button className={s.telephone} onClick={() => setIsModal(true)}>
                            <div className={s.telephone__unActive}></div>
                            <div className={s.telephone__active}></div>
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
                <div className={`${s.burger__menu} ${menuActive ? s.active: s.unActive }`}>

                </div>
            </div>
        </header>
    );
};

