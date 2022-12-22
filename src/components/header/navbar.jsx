import React from 'react';
import { NavLink} from  'react-router-dom'

export const Navbar = () => {
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
                        <button className="telephone ">
                            <div className="telephone__unActive"></div>
                            <div className="telephone__active"></div>
                        </button>
                        <span>+7 (495) 823-54-12</span>
                        <button className="bags">
                            {/*// if count && count in order*/}
                            <div className="order">3</div>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

