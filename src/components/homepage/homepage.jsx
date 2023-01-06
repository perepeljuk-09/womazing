import React from 'react';
import {MainOffer} from "./main__offer/mainoffer";
import {useState} from "react";
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";
import {Product} from "../shop/product/product";
import {Button} from "../utils/Buttons/Button";
import {ButtonTransp} from "../utils/Buttons/ButtonTransp";
import {TitleH3} from "../utils/TitleH3/TitleH3";
import {TitleH2} from "../utils/TitleH2/TitleH2";
import {GetHomePageSliderFirst, GetHomePageSliderSecond} from "../selectors/home-selectors";
import {getShopGoods} from "../selectors/shop-selectors";
import logo__1 from "./block__important__images/logo1.png";
import logo__2 from "./block__important__images/settings.png";
import logo__3 from "./block__important__images/hand.png";
import main_girl from "./block__right__images/main_girl.png";
import left_girl from "./block__right__images/left_girl.png";
import right_girl from "./block__right__images/right_girl.png";
import "./homepage.css"

export const Homepage = () => {

    const sliderFirst = useSelector(state => GetHomePageSliderFirst(state));
    const sliderSecond = useSelector(state => GetHomePageSliderSecond(state));
    const shopGoods = useSelector(state => getShopGoods(state));

    const [sliderPosition, setSliderPosition] = useState(1);
    const [galleryPosition, setGalleryPosition] = useState(1);

    return (
        <main className="main">
            <div className="container">
                <section className="main__block">
                    <div className="block__left">
                        <div className="sliders"
                             onClick={() => sliderPosition === sliderFirst.length ? setSliderPosition(1) : setSliderPosition(prev => prev + 1)}>
                            {sliderFirst.map(slider => <MainOffer key={slider.id}
                                                                sliderPosition={sliderPosition}
                                                                setSliderPosition={setSliderPosition}
                                                                slider={slider}/>)}
                        </div>
                        <div className="main__btns">
                            <Link to="/shop" className="first__btn">
                                <div className="vector"></div>
                            </Link>
                            <Link to="/shop">
                                <Button>Открыть магазин</Button>
                            </Link>
                        </div>
                        <nav className="nav__slider">
                            {sliderFirst.map(slider => {
                                return <button key={slider.id}
                                               onClick={() => setSliderPosition(slider.id)}
                                               className={sliderPosition === slider.id ? "slider__active" : "slider__unactive"}
                                ></button>
                            })}
                        </nav>
                    </div>
                    <div className="block__right">
                        <img className="photo__1" src={main_girl} alt="Основной контент"/>
                        <img className="photo__2" src={left_girl} alt="Дополнительный контент"/>
                        <img className="photo__3" src={right_girl} alt="Дополнительный контент"></img>
                    </div>
                </section>
                <section className="new__collection">
                    <TitleH2>Новая коллекция</TitleH2>
                    <div className="goods">
                        {shopGoods.map(item => item.id <= 3 && (
                            <Product key={item.id} item={item}/>
                        ))}
                    </div>
                    <Link to={"/shop"}>
                        <ButtonTransp>Открыть магазин</ButtonTransp>
                    </Link>
                </section>
                <section className="block__important">
                    <TitleH2>Что для нас важно</TitleH2>
                    <div className="block__info">
                        <div className="info__item">
                            <img src={logo__1} alt="logo__1" className="item__logo"/>
                            <TitleH3>Качество</TitleH3>
                            <p className="item__desc">Наши профессионалы работают на лучшем оборудовании для пошива
                                одежды беспрецедентного качества</p>
                        </div>
                        <div className="info__item">
                            <img src={logo__2} alt="logo__2" className="item__logo"/>
                            <TitleH3>Скорость</TitleH3>
                            <p className="item__desc">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
                                единиц продукции в наших собственных цехах</p>
                        </div>
                        <div className="info__item">
                            <img src={logo__3} alt="logo__3" className="item__logo"/>
                            <TitleH3>Ответственность</TitleH3>
                            <p className="item__desc">Мы заботимся о людях и планете. Безотходное производство и
                                комфортные условия труда - все это Womazing</p>
                        </div>
                    </div>
                </section>
                <section className="block__team">
                    <TitleH2>Команда мечты Womazing</TitleH2>
                    <div className="team__frame">
                        <div className="frame__gallery">
                            <div className="gallery__slider"
                                 onClick={() => galleryPosition === sliderSecond.length ? setGalleryPosition(1) : setGalleryPosition(prev => prev + 1)}
                            >
                                {sliderSecond.map(slider => {
                                    return <img key={slider.id}
                                                className={`position__${galleryPosition}`}
                                                src={slider.url} alt={`photo__${slider.id}`}/>
                                })}
                                <div className="btns">
                                    {sliderSecond.map(slider => {
                                        return <button key={slider.id}
                                                       onClick={(e) => {
                                                           e.stopPropagation()
                                                           setGalleryPosition(slider.id)
                                                       }}
                                                       className={galleryPosition === slider.id ? "active" : "unActive"}>
                                        </button>
                                    })}
                                </div>
                            </div>
                            {galleryPosition === 1 ?
                                <div className="vector vector__left active__vector"
                                     onClick={() => setGalleryPosition(sliderSecond.length)}
                                ></div>
                                : <div className="vector vector__left active__vector"
                                       onClick={() => setGalleryPosition(prev => prev - 1)}
                                ></div>}
                            {galleryPosition === sliderSecond.length ?
                                <div className="vector vector__right unActive__vector"
                                     onClick={() => setGalleryPosition(1)}
                                ></div>
                                : <div className="vector vector__right unActive__vector"
                                       onClick={() => setGalleryPosition(prev => prev + 1)}
                                ></div>}
                        </div>
                        <div className="desc">
                            <TitleH3>Для каждой</TitleH3>
                            <span className="text">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                                <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                            </span>
                            <Link to="/about">Подробнее о бренде</Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
};

