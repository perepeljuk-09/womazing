import images__1 from "../new__collection/images__1.png";
import images__2 from "../new__collection/images__2.png";
import images__3 from "../new__collection/images__3.png";

const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
    pageSize: 9,
    currentPage: 1,
    goods: [
        {id: 1, name: "Футболка USA", lastPrice: "229", category: "t-shirts", price: "129", src: images__1},
        {id: 2, name: "Купальник Glow", lastPrice: "", category: "swimwear", price: "129", src: images__2},
        {id: 3, name: "Свитшот Sweet Shot", lastPrice: "", category: "sweatshirts", price: "129", src: images__3},
        {id: 4, name: "Футболка USA", lastPrice: "", category: "t-shirts", price: "129", src: images__1},
        {id: 5, name: "Купальник Glow", lastPrice: "", category: "swimwear", price: "129", src: images__2},
        {id: 6, name: "Свитшот Sweet Shot", lastPrice: "", category: "sweatshirts", price: "129", src: images__3},
        {id: 7, name: "Футболка USA", lastPrice: "229", category: "t-shirts", price: "129", src: images__1},
        {id: 8, name: "Купальник Glow", lastPrice: "", category: "swimwear", price: "129", src: images__2},
        {id: 9, name: "Свитшот Sweet Shot", lastPrice: "", category: "sweatshirts", price: "129", src: images__3},
        {id: 10, name: "Футболка USA", lastPrice: "", category: "t-shirts", price: "129", src: images__1},
        {id: 11, name: "Купальник Glow", lastPrice: "", category: "swimwear", price: "129", src: images__2},
        {id: 12, name: "Свитшот Sweet Shot", lastPrice: "", category: "sweatshirts", price: "129", src: images__3},
        {id: 13, name: "Футболка USA", lastPrice: "", category: "t-shirts", price: "129", src: images__1},
        {id: 14, name: "Купальник Glow", lastPrice: "", category: "swimwear", price: "129", src: images__2},
        {id: 15, name: "Свитшот Sweet Shot", lastPrice: "", category: "sweatshirts", price: "129", src: images__3},
        {id: 16, name: "Футболка USA", lastPrice: "", category: "t-shirts", price: "129", src: images__1},
        {id: 17, name: "Купальник Glow", lastPrice: "", category: "swimwear", price: "129", src: images__2},
        {id: 18, name: "Свитшот Sweet Shot", lastPrice: "", category: "sweatshirts", price: "129", src: images__3},
        {id: 19, name: "Футболка USA", lastPrice: "", category: "t-shirts", price: "129", src: images__1},
        {id: 20, name: "Купальник Glow", lastPrice: "", category: "swimwear", price: "129", src: images__2},
        {id: 21, name: "Свитшот Sweet Shot", lastPrice: "", category: "sweatshirts", price: "129", src: images__3},
        {id: 22, name: "Футболка USA", lastPrice: "", category: "t-shirts", price: "129", src: images__1},
        {id: 23, name: "Купальник Glow", lastPrice: "", category: "swimwear", price: "129", src: images__2},
        {id: 24, name: "Свитшот Sweet Shot", lastPrice: "", category: "sweatshirts", price: "129", src: images__3},
    ],
    category: [{id: 1, category: "Футболки", route: "t-shirts"}, {id: 2, category: "Свитшоты", route: "sweatshirts"}, {id: 3, category: "Кардиганы", route: "cardigans"}, {id: 4,category: "Купальники", route: "swimwear"}]

}

const shopReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.numberPage}
        }

        default:
            return state

    }
}
export const setCurrentPage = (numberPage) => ({type: SET_CURRENT_PAGE, numberPage})

export {shopReducer};