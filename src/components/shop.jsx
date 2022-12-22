import React from 'react';
import './shop.css'
import vector__2 from "./new__collection/Vector 2.png";
import page__vector__right from "./shop/img/Vector 1.png";
import page__vector__left from "./shop/img/Vector 2.png";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "./redux/shopReducer";

export const Shop = () => {
    const goods = useSelector(state => state.shopReducer.goods)
    const pageSize = useSelector(state => state.shopReducer.pageSize)
    const currentPage = useSelector(state => state.shopReducer.currentPage)
    const dispatch = useDispatch()

    const countPage = Math.ceil(goods.length / pageSize);
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i)
    }

    return (
        <main className="main">
            <div className="container">
                <section className="shop">
                    <h1 className="shop__title">Магазин</h1>
                    <p className="shop__category">Главная</p>
                    <div className="category">
                        <button className="category__item active">Все</button>
                        <button className="category__item">Пальто</button>
                        <button className="category__item">Свитшоты</button>
                        <button className="category__item">Кардиганы</button>
                        <button className="category__item">Толстовки</button>
                    </div>
                    <div className="show__goods">
                        Показано: {pageSize} из {goods.length} товаров
                    </div>
                    <div className="goods">
                        {goods.map(item => item.id > (currentPage - 1) * pageSize && item.id <= currentPage * pageSize && (
                            <div key={item.id} className="good__item">
                                <div className="item">
                                    <img className="item__img" src={item.src} alt="images__1"/>
                                    <div className="overlay">
                                        <img src={vector__2} alt="vector__2"/>
                                    </div>
                                </div>
                                <h4>{item.name}</h4>
                                <p><span>{item.lastPrice}</span>{item.price}</p>
                                {item.id}
                            </div>
                        ))}
                    </div>
                    <div className="show__goods">
                        Показано: {currentPage !== countPage ? (pageSize * currentPage) : goods.length} из {goods.length} товаров
                    </div>
                    <div className="paginator">
                        <div className="pages">
                            {currentPage !== 1 && <img className="vector left" src={page__vector__left}
                                                       alt="page__vector"
                                                       onClick={() => dispatch(setCurrentPage(currentPage - 1))}/>}
                            {pages.map(p => (
                                <span key={p} className={currentPage === p ? "active" : "normal"}
                                      onClick={() => dispatch(setCurrentPage(p))}
                                >{p}</span>
                            ))}
                            {currentPage !== countPage && <img className="vector right" src={page__vector__right}
                                                               alt="page__vector"
                                                               onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                            />}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

