import React from 'react';
import {Link, NavLink} from 'react-router-dom'
import {useSelector} from "react-redux";

export const Navbar = ({setIsModal}) => {

    const countGoods = useSelector(state => {
         return state.cartReducer.goods.length
    })

    return (
        <header className="App__header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <NavLink to="/" className="logo"></NavLink>
                        <NavLink to="/">Womazing</NavLink>
                    </div>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/"><li className="list__item">Главная</li></NavLink>
                            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/shop"><li className="list__item">Магазин</li></NavLink>
                            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/about"><li className="list__item">О бренде</li></NavLink>
                            <NavLink className={({isActive}) => isActive ? "active" : ""} to="/contacts"><li className="list__item">Контакты</li></NavLink>
                        </ul>
                    </nav>
                    <div className="header__call">
                        <button className="telephone " onClick={() => setIsModal(true)}>
                            <div className="telephone__unActive"></div>
                            <div className="telephone__active"></div>
                        </button>
                        <span>+7 (495) 823-54-12</span>
                        <Link to="/cart" className="bags">
                            {countGoods !== 0 && <div className="order">{countGoods}</div>}
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

