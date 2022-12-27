import React, {useState} from 'react';
import './item.css'
import {useDispatch, useSelector} from "react-redux";
import {Product} from "../shop/product/product";
import {useParams} from "react-router-dom";
import {addItem} from "../redux/cartReducer";
import {Button} from "../utils/Buttons/Button";
import {MainTitle} from "../utils/MainTitle/MainTitle";
import {TitleH2} from "../utils/TitleH2/TitleH2";
import {TitleH4} from "../utils/TitleH4/TitleH4";

const Item = () => {
    const {id} = useParams();
    const item = useSelector(state => state.shopReducer.goods[id - 1]);
    const goods = useSelector(state => state.shopReducer.goods);
    const dispatch = useDispatch();
    const [size, setSize] = useState();
    const [color, setColor] = useState();
    const [itemsCount, setItemsCount] = useState(1);

    const colors = [{id: 1, color: 'Brown'},{id: 2, color: 'Gray'},{id: 3, color: 'Pink'},{id: 4, color: 'Orange'}]
    const sizes = [{id: 1, size: 'S'},{id: 2, size: 'M'},{id: 3, size: 'L'},{id: 4, size: 'XL'}]

    const addItemToCart = () => {
        // const obj = {id: item.id, size: size, color: color, itemsCount: itemsCount}
        const obj = JSON.parse(JSON.stringify(item))
        const obj2 = {...obj, size, color, itemsCount}

        dispatch(addItem(obj2))
    }

    return (
        <main className="main">
            <div className="container">
                <section className="item">
                    <MainTitle>{item.name}</MainTitle>
                    <p className="shop__category">Главная</p>
                    <div className="content">
                        <img className="item__photo" src={item.src} alt="photo__item"/>
                        <div className="info">
                            <div className="block__prices">
                                <TitleH2>${item.price}</TitleH2>
                                <span className="second__price">{item.lastPrice && `$${item.lastPrice}`}</span>
                            </div>
                            <div className="block__sizes">
                                <TitleH4>Выберите размер</TitleH4>
                                <div className="sizes">
                                    {sizes.map(s => (
                                        <button key={s.id} className={s.id === size ? "size__active" : "size"}
                                                onClick={() => setSize(s.id)}
                                        >{s.size}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="block__colors">
                                <TitleH4>Выберите цвет</TitleH4>
                                <div className="colors">
                                    {colors.map(c => (
                                        <div key={c.id} className={ c.id === color ? "color active" : "color"}
                                             onClick={() => setColor(c.id)}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                            <div className="block__manage">
                                <input className="count__input"
                                       type="text"
                                       value={itemsCount}
                                       onChange={(e) => setItemsCount(e.target.value)}
                                />
                                <Button onClick={() => size && color && addItemToCart()}>Добавить в корзину</Button>
                            </div>
                        </div>
                    </div>
                    <div className="other">
                        <TitleH2>Связанные товары</TitleH2>
                        <div className="other__items">
                            {goods.map(item => item.id < 4 && (
                             <Product key={item.id} item={item}/>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

export {Item};