import React from 'react';

const ShowGoods = ({currentPage, countPage, pageSize, goodsLength}) => {
    return (
        <div className="show__goods">
            Показано: {currentPage !== countPage ? (pageSize * currentPage) : goodsLength} из {goodsLength} товаров
        </div>
    );
};

export {ShowGoods};