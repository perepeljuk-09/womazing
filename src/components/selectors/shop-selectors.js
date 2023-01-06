
const getShopGoods = (state) => {
    return state.shopReducer.goods
};
const getShopPageSize = (state) => {
    return state.shopReducer.pageSize
};
const getShopCurrentPage = (state) => {
    return state.shopReducer.currentPage
};
const getShopCategory = (state) => {
    return state.shopReducer.category
};
const getShopItem = (state, id) => {
    return state.shopReducer.goods[id - 1]
};
const getShopColors = (state) => {
    return state.shopReducer.colors
};
const getShopSizes = (state) => {
    return state.shopReducer.sizes
};

export {getShopGoods, getShopPageSize, getShopCurrentPage, getShopCategory, getShopItem ,getShopColors, getShopSizes};