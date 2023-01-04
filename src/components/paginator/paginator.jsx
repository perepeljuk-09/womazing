import React from 'react';
import page__vector__left from "../shop/img/Vector 2.png";
import page__vector__right from "../shop/img/Vector 1.png";
import s from "./paginator.module.css";
import {setCurrentPage} from "../redux/shopReducer";

const Paginator = ({currentPage, pages, dispatch, countPage}) => {
    return (
        <div className={s.paginator}>
            <div className={s.pages}>
                {currentPage !== 1 && <img className={`${s.vector} ${s.left}`} src={page__vector__left}
                                           alt="page__vector"
                                           onClick={() => dispatch(setCurrentPage(currentPage - 1))}/>}
                {pages.map(p => (
                    <span key={p} className={currentPage === p ? s.active : s.normal}
                          onClick={() => dispatch(setCurrentPage(p))}
                    >{p}</span>
                ))}
                {currentPage !== countPage && <img className={`${s.vector} ${s.right}`} src={page__vector__right}
                                                   alt="page__vector"
                                                   onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                />}
            </div>
        </div>
    );
};

export {Paginator};