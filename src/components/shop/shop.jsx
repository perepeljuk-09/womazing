import React, {useEffect, useState} from 'react';
import './shop.css'
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../redux/shopReducer";
import {Product} from "./product/product";
import {ShowGoods} from "./showGoods/showGoods";
import {Link, useParams} from "react-router-dom";
import {MainContainer} from "../utils/mainContainer/mainContainer";
import {Paginator} from "../paginator/paginator";
import {getShopGoods, getShopPageSize, getShopCurrentPage, getShopCategory} from "../selectors/shop-selectors";


export const Shop = () => {
    const params = useParams();

    const shopGoods = useSelector(state => getShopGoods(state));
    const shopPageSize = useSelector(state => getShopPageSize(state));
    const shopCurrentPage = useSelector(state => getShopCurrentPage(state));
    const shopCategory = useSelector(state => getShopCategory(state));

    const dispatch = useDispatch();

    const [filter, setFilter] = useState([]);
    const [mobileIsActive, setMobileIsActive] = useState(false);

    const filterGoods = shopGoods.filter(item => filter.length !== 0 ? filter.includes(item.category) : item);

    let countPage = Math.ceil(filterGoods.length / shopPageSize);
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
                {shopCategory.map(item => (
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
                    {shopCategory.map(item => (
                        <Link key={item.id} to={`/shop/${item.route}`}>
                            <li className={filter.includes(item.route) ? "category__item__mobile active" : "category__item__mobile"}>
                                {item.category}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <ShowGoods currentPage={shopCurrentPage}
                       countPage={countPage}
                       pageSize={shopPageSize}
                       goodsLength={filterGoods.length}/>
            <div className="goods">
                {filterGoods.map((item, index) => index >= (shopCurrentPage - 1) * shopPageSize && index < shopCurrentPage * shopPageSize && (
                    <Product key={item.id} item={item}/>
                ))}
            </div>
            <ShowGoods currentPage={shopCurrentPage}
                       countPage={countPage}
                       pageSize={shopPageSize}
                       goodsLength={filterGoods.length}
            />
            <Paginator currentPage={shopCurrentPage}
                       countPage={countPage}
                       pages={pages}
                       dispatch={dispatch}
            />
        </MainContainer>
    );
};

