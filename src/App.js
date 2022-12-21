import './App.css';
import {useState} from "react";
import {MainOffer} from "./components/mainoffer";
import React from "react";
import images__1 from "./components/new__collection/images__1.png"
import images__2 from "./components/new__collection/images__2.png"
import images__3 from "./components/new__collection/images__3.png"
import vector__2 from "./components/new__collection/Vector 2.png"
import logo__1 from "./components/block__important/logo1.png"
import logo__2 from "./components/block__important/settings.png"
import logo__3 from "./components/block__important/hand.png"
import photo__1 from "./components/gallery__slider/photo1.png"
import photo__2 from "./components/gallery__slider/photo2.png"
import photo__3 from "./components/gallery__slider/photo3.png"
import {Navbar} from "./components/header/navbar";
import {Footer} from "./components/footer/footer";

function App() {
    const sliderArr = [{
        id: 1,
        title: "Новые поступления в этом сезоне",
        desc: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать."
    },
        {
            id: 2,
            title: "Что-то новенькое. Мы заждались тебя.",
            desc: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!"
        },
        {
            id: 3,
            title: "Включай новый сезон с WOMAZING",
            desc: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров"
        }];
    const sliderSecond = [{id: 1, url: photo__1}, {id: 2, url: photo__2}, {id: 3, url: photo__3}];
    const [sliderPosition, setSliderPosition] = useState(1)
    const [galleryPosition, setGalleryPosition] = useState(1)
    return (
        <div className="App">
            <Navbar/>
            <div className="block__fon"></div>
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
                                <div className="first__btn">
                                    <a href="#" className="vector"></a>
                                </div>
                                <button className="second__btn">Открыть магазин</button>
                            </div>
                            <nav className="nav__slider">
                                {sliderArr.map(slider => {
                                    return <button onClick={() => setSliderPosition(slider.id)}
                                                   className={sliderPosition === slider.id ? "slider__active" : "slider__unactive"}
                                    ></button>
                                })}
                            </nav>

                        </div>

                        <div className="block__right">
                            <div className="photos">
                                <div className="photo__2"></div>
                                <div className="photo__3"></div>
                            </div>
                        </div>
                    </section>
                    <section className="new__collection">
                        <h2>Новая коллекция</h2>
                        <div className="goods">
                            <div className="good__item">
                                <div className="item">
                                    <img className="item__img" src={images__1} alt="images__1"/>
                                    <div className="overlay">
                                        <img src={vector__2} alt="vector__2"/>
                                    </div>
                                </div>
                                <h4>Футболка USA</h4>
                                <p><span>$229</span>$129</p>
                            </div>
                            <div className="good__item">
                                <div className="item">
                                    <img className="item__img" src={images__2} alt="images__2"/>
                                    <div className="overlay">
                                        <img src={vector__2} alt="vector__2"/>
                                    </div>
                                </div>
                                <h4>Купальник Glow</h4>
                                <p>$129</p>
                            </div>
                            <div className="good__item">
                                <div className="item">
                                    <img className="item__img" src={images__3} alt="images__3"/>
                                    <div className="overlay">
                                        <img src={vector__2} alt="vector__2"/>
                                    </div>
                                </div>
                                <h4>Свитшот Sweet Shot</h4>
                                <p>$129</p>
                            </div>
                        </div>
                        <a href="#">Открыть магазин</a>
                    </section>
                    <section className="block__important">
                        <h2 className="title">Что для нас важно</h2>
                        <div className="block__info">
                            <div className="info__item">
                                <img src={logo__1} alt="logo__1" className="item__logo"/>
                                <h3 className="item__title">Качество</h3>
                                <p className="item__desc">Наши профессионалы работают на лучшем оборудовании для пошива
                                    одежды беспрецедентного качества</p>
                            </div>
                            <div className="info__item">
                                <img src={logo__2} alt="logo__2" className="item__logo"/>
                                <h3 className="item__title">Скорость</h3>
                                <p className="item__desc">Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
                                    единиц продукции в наших собственных цехах</p>
                            </div>
                            <div className="info__item">
                                <img src={logo__3} alt="logo__3" className="item__logo"/>
                                <h3 className="item__title">Ответственность</h3>
                                <p className="item__desc">Мы заботимся о людях и планете. Безотходное производство и
                                    комфортные условия труда - все это Womazing</p>
                            </div>

                        </div>
                    </section>
                    <section className="block__team">
                        <h2 className="title">Команда мечты Womazing</h2>
                        <div className="team__frame">
                            <div className="frame__gallery">
                                <div className="gallery__slider"
                                     onClick={() => galleryPosition === sliderSecond.length ? setGalleryPosition(1) : setGalleryPosition(prev => prev + 1)}
                                >
                                    {sliderSecond.map(slider => {
                                        return <img className={`position__${galleryPosition}`}
                                                    src={slider.url} alt={`photo__${slider.id}`}/>
                                    })}
                                    <div className="btns">
                                        {sliderSecond.map(slider => {
                                            return <button
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
                                <h3 className="desc__title">Для каждой</h3>
                                <span className="text">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                                <p>Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                            </span>
                                <a href="#">Подробнее о бренде</a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
