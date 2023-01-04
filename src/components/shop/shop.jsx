import React, {useEffect, useState} from 'react';
import './shop.css'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../redux/shopReducer";
import {Product} from "./product/product";
import {ShowGoods} from "./showGoods";
import {Link, useParams} from "react-router-dom";
import {MainContainer} from "../utils/mainContainer/mainContainer";
import {Paginator} from "../paginator/paginator";


export const Shop = () => {
    const params = useParams();

    const goods = useSelector(state => state.shopReducer.goods);
    const pageSize = useSelector(state => state.shopReducer.pageSize);
    const currentPage = useSelector(state => state.shopReducer.currentPage);
    const category = useSelector(state => state.shopReducer.category);

    const dispatch = useDispatch();

    const [filter, setFilter] = useState([]);
    const [mobileIsActive, setMobileIsActive] = useState(false);

    const filterGoods = goods.filter(item => filter.length !== 0 ? filter.includes(item.category) : item);

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
        setMobileIsActive(false)
        if (params.category) {
            setFilter(params.category)
        } else {
            setFilter([])
        }
    }, [params.category])

    return (
        <MainContainer title={"Магазин"}>
            <div className="category">
                <Link to={'/shop'}
                      className={filter.length === 0 ? "category__item active" : "category__item"}>
                    Все
                </Link>
                {category.map(item => (
                    <Link key={item.id} to={`/shop/${item.route}`}
                          className={filter.includes(item.route) ? "category__item active" : "category__item"}>
                        {item.category}
                    </Link>
                ))}
            </div>
            <div className="category__mobile">
                <button className="btn__mobile__сategory" onClick={() => setMobileIsActive(prev => !prev)}>
                    Все категории
                </button>
                <ul className={mobileIsActive ? "mobile__category__all mobile__active" : "mobile__category__all"}>
                    <Link to={'/shop'}>
                        <li className={filter.length === 0 ? "category__item__mobile active" : "category__item__mobile"}>
                            Все
                        </li>
                    </Link>
                    {category.map(item => (
                        <Link key={item.id} to={`/shop/${item.route}`}>
                            <li className={filter.includes(item.route) ? "category__item__mobile active" : "category__item__mobile"}>
                                {item.category}
                            </li>
                        </Link>
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
                       goodsLength={filterGoods.length}
            />
            <Paginator currentPage={currentPage}
                       countPage={countPage}
                       pages={pages}
                       dispatch={dispatch}
            />
        </MainContainer>
    );
};

