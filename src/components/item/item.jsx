import React, {useEffect, useState} from 'react';
import './item.css'
import {useDispatch, useSelector} from "react-redux";
import {Product} from "../shop/product/product";
import {useParams} from "react-router-dom";
import {addItem} from "../redux/cartReducer";
import {Button} from "../utils/Buttons/Button";
import {TitleH2} from "../utils/TitleH2/TitleH2";
import {TitleH4} from "../utils/TitleH4/TitleH4";
import {MainContainer} from "../utils/mainContainer/mainContainer";
import {getShopColors, getShopGoods, getShopItem, getShopSizes} from "../selectors/shop-selectors";

const Item = () => {
    const {id} = useParams();
    const item = useSelector(state => getShopItem(state, id));
    const shopGoods = useSelector(state => getShopGoods(state));
    const colors = useSelector(state => getShopColors(state));
    const sizes = useSelector(state => getShopSizes(state));

    const dispatch = useDispatch();

    const [size, setSize] = useState(null);
    const [color, setColor] = useState(null);
    const [itemsCount, setItemsCount] = useState(1);

    const addItemToCart = () => {
        const obj = JSON.parse(JSON.stringify(item))
        const obj2 = {...obj, size, color, itemsCount}

        dispatch(addItem(obj2))
        setSize(null)
        setColor(null)
        setItemsCount(1)
    }
    useEffect(() => {
        setSize(null)
        setColor(null)
        setItemsCount(1)
    }, [id])

    return (
        <MainContainer title={item.name}>
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
                                <div key={c.id} className={c.id === color ? "color active" : "color"}
                                     onClick={() => setColor(c.id)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div className="block__manage">
                        <input className="count__input"
                               type="number"
                               min={1}
                               value={itemsCount}
                               onChange={(e) => setItemsCount(+e.target.value)}
                        />
                        <Button onClick={() => size && color && addItemToCart()}>Добавить в корзину</Button>
                    </div>
                </div>
            </div>
            <div className="other">
                <TitleH2>Связанные товары</TitleH2>
                <div className="other__items">
                    {shopGoods.map(item => item.id < 4 && (
                        <Product key={item.id} item={item}/>
                    ))}
                </div>
            </div>
        </MainContainer>
    );
};

export {Item};