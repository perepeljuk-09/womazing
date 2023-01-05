import photo__1 from "../homepage/gallery__slider__images/photo1.png";
import photo__2 from "../homepage/gallery__slider__images/photo2.png";
import photo__3 from "../homepage/gallery__slider__images/photo3.png";

const initialState = {
    sliderArr: [{id: 1, title: "Новые поступления в этом сезоне", desc: "Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать."},
        {id: 2, title: "Что-то новенькое. Мы заждались тебя.", desc: "Надоело искать себя в сером городе? Настало время новых идей, свежих красок и вдохновения с Womazing!"},
        {id: 3, title: "Включай новый сезон с WOMAZING", desc: "Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров"}],
    sliderSecond: [{id: 1, url: photo__1}, {id: 2, url: photo__2}, {id: 3, url: photo__3}]
}
const homepageReducer = (state = initialState, action) => {
    switch (action.type) {

        default: {
            return state
        }
    }
}

export {homepageReducer};