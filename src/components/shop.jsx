import React from 'react';
import './shop.css'
import page__vector__right from "./shop/img/Vector 1.png";
import page__vector__left from "./shop/img/Vector 2.png";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "./redux/shopReducer";
import {Product} from "./shop/product/product";
import {ShowGoods} from "./shop/showGoods";
import {MainTitle} from "./utils/MainTitle/MainTitle";

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
                    <MainTitle>Магазин</MainTitle>
                    <p className="shop__category">Главная</p>
                    <div className="category">
                        <button className="category__item active">Все</button>
                        <button className="category__item">Пальто</button>
                        <button className="category__item">Свитшоты</button>
                        <button className="category__item">Кардиганы</button>
                        <button className="category__item">Толстовки</button>
                    </div>
                    <ShowGoods currentPage={currentPage}
                               countPage={countPage}
                               pageSize={pageSize}
                               goodsLength={goods.length}/>
                    <div className="goods">
                        {goods.map(item => item.id > (currentPage - 1) * pageSize && item.id <= currentPage * pageSize && (
                            <Product key={item.id} item={item}/>
                        ))}
                    </div>
                    <ShowGoods currentPage={currentPage}
                               countPage={countPage}
                               pageSize={pageSize}
                               goodsLength={goods.length}/>
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

