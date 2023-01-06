
const getCartGoods = (state) => {
    return state.cartReducer.goods
};
const getCartFullCostOfGoods = (state) => {
    return state.cartReducer.goods.reduce((acc, next) => acc += Number(next.price * next.itemsCount), 0)
};

export {getCartGoods, getCartFullCostOfGoods};