import React, {useEffect, useState} from 'react';
import './shop.css'
import page__vector__right from "./shop/img/Vector 1.png";
import page__vector__left from "./shop/img/Vector 2.png";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "./redux/shopReducer";
import {Product} from "./shop/product/product";
import {ShowGoods} from "./shop/showGoods";
import {MainTitle} from "./utils/MainTitle/MainTitle";
import {Link, useParams} from "react-router-dom";
import {Breadcrumbs} from "./breadcrumbs/breadcrumbs";


export const Shop = () => {
    const params = useParams()

    const goods = useSelector(state => state.shopReducer.goods);
    const pageSize = useSelector(state => state.shopReducer.pageSize);
    const currentPage = useSelector(state => state.shopReducer.currentPage);
    const category = useSelector(state => state.shopReducer.category);
    const dispatch = useDispatch();
    const [filter, setFilter] = useState([]);
    const [mobileIsActive, setMobileIsActive] = useState(false)

    const filterGoods = goods.filter(item => filter.length !== 0 ? filter.includes(item.category) : item)

    let countPage = Math.ceil(filterGoods.length / pageSize);
    countPage = countPage !== 0 ? countPage : 1
    let pages = [];
    for (let i = 1; i <= countPage; i++) {
        pages.push(i)
    }
    useEffect(() => {
        dispatch(setCurrentPage(1))
    }, [filter])

    useEffect(() => {
        console.log("произошло обновление параметра")
        if (params.category) {
            setFilter(params.category)
        } else {
            setFilter([])
        }

    }, [params.category])

    return (
        <main className="main">
            <div className="container">
                <section className="shop">
                    <MainTitle>Магазин</MainTitle>
                    <Breadcrumbs/>
                    <div className="category">
                        <Link to={'/shop'}
                              className={filter.length === 0 ? "category__item active" : "category__item"}>Все</Link>
                        {category.map(item => (
                            <Link key={item.id} to={`/shop/${item.route}`}
                                  className={filter.includes(item.route) ? "category__item active" : "category__item"}
                            >{item.category}</Link>
                        ))}
                    </div>
                    <div className="category__mobile">
                        <button className="btn__mobile__сategory" onClick={() => setMobileIsActive(prev => !prev)}>Все категории</button>
                        <ul className={mobileIsActive ? "mobile__category__all mobile__active" : "mobile__category__all" }>
                            <Link to={'/shop'}><li className={filter.length === 0 ? "category__item__mobile active" : "category__item__mobile"}>
                                  Все</li></Link>
                            {category.map(item => (
                                <Link to={`/shop/${item.route}`}   key={item.id}><li
                                     className={filter.includes(item.route) ? "category__item__mobile active" : "category__item__mobile"}
                                >{item.category}</li></Link>
                            ))}
                        </ul>
                    </div>
                    <ShowGoods currentPage={currentPage}
                               countPage={countPage}
                               pageSize={pageSize}
                               goodsLength={filterGoods.length}/>
                    <div className="goods">
                        {filterGoods.map((item, index) => index >= (currentPage - 1) * pageSize && index < currentPage * pageSize && (
                            <Product key={item.id} item={item}/>
                        ))}
                    </div>
                    <ShowGoods currentPage={currentPage}
                               countPage={countPage}
                               pageSize={pageSize}
                               goodsLength={filterGoods.length}/>
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

