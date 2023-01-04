import React from 'react';
import {MainTitle} from "../MainTitle/MainTitle";
import {Breadcrumbs} from "../../breadcrumbs/breadcrumbs";
import s from "./mainContainer.module.css";

const MainContainer = ({children, title}) => {
    return (
        <main className="main">
            <div className="container">
                <section className={s.section}>
                    <MainTitle>{title}</MainTitle>
                    <Breadcrumbs />
                    {children}
                </section>
            </div>
        </main>
    );
};

export {MainContainer};