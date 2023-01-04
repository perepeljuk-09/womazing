import React from 'react';
import {MainOffer} from "./mainoffer";
import logo__1 from "./block__important/logo1.png";
import logo__2 from "./block__important/settings.png";
import logo__3 from "./block__important/hand.png";
import photo__1 from "./gallery__slider/photo1.png";
import photo__2 from "./gallery__slider/photo2.png";
import photo__3 from "./gallery__slider/photo3.png";
import main_girl from "./block__right/main_girl.png";
import left_girl from "./block__right/left_girl.png";
import right_girl from "./block__right/right_girl.png";
import {useState} from "react";
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";
import {Product} from "./shop/product/product";
import {Button} from "./utils/Buttons/Button";
import {ButtonTransp} from "./utils/Buttons/ButtonTransp";
import {TitleH3} from "./utils/TitleH3/TitleH3";
import {TitleH2} from "./utils/TitleH2/TitleH2";

export const Homepage = () => {

    const sliderArr = [{id: 1, title: "Новые поступления в этом сезоне", desc: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать."},
        {id: 2, title: "Что-то новенькое. Мы заждались тебя.", desc: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!"},
        {id: 3, title: "Включай новый сезон с WOMAZING", desc: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров"}];
    const sliderSecond = [{id: 1, url: photo__1}, {id: 2, url: photo__2}, {id: 3, url: photo__3}];
    const goods = useSelector(state => state.shopReducer.goods)
    const [sliderPosition, setSliderPosition] = useState(1)
    const [galleryPosition, setGalleryPosition] = useState(1)
    return (
        <main className="main">
            <div className="container">
                <section className="main__block">
                    <div className="block__left">
                        <div className="sliders"
                             onClick={() => sliderPosition === sliderArr.length ? setSliderPosition(1) : setSliderPosition(prev => prev + 1)}>
                            {sliderArr.map(slider => <MainOffer key={slider.id}
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
                            {sliderArr.map(slider => {
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
                        { goods.map(item => item.id <= 3 && (
                            <Product key={item.id} item={item}/>
                        ) )}
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

