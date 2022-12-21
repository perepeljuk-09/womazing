import React from 'react';

export const Navbar = () => {
    return (
        <header className="App__header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <a href="#" className="logo"></a>
                        <a href="#">Womazing</a>
                    </div>
                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="list__item">Главная</li>
                            <li className="list__item">Магазин</li>
                            <li className="list__item">О бренде</li>
                            <li className="list__item">Контакты</li>
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

