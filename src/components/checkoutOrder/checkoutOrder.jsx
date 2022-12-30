import React from 'react';
import './checkoutOrder.css';
import {MainTitle} from "../utils/MainTitle/MainTitle";
import {TitleH3} from "../utils/TitleH3/TitleH3";
import {Input} from "../utils/Input/Input";
import {Textarea} from "../utils/Textarea/Textarea";
import {TitleH4} from "../utils/TitleH4/TitleH4";
import {Button} from "../utils/Buttons/Button";
import {useSelector} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {Error} from "../utils/Error/Error";
import {Breadcrumbs} from "../breadcrumbs/breadcrumbs";

const CheckoutOrder = () => {
    const fullCost = useSelector(state => state.cartReducer.goods.reduce((acc, next) => acc += Number(next.price * next.itemsCount), 0));
    const cartGoods = useSelector(state => state.cartReducer.goods);
    const navigate = useNavigate()

    const validationSchema = yup.object().shape({
        name: yup.string().required('Обязательное поле'),
        email: yup.string().email('Введите верный email').required('Обязательное поле'),
        phoneNumber: yup.string().required('Обязательное поле'),
        country: yup.string().required('Обязательное поле'),
        city: yup.string().required('Обязательное поле'),
        street: yup.string().required('Обязательное поле'),
        house: yup.string().required('Обязательное поле'),
        apartment: yup.string().required('Обязательное поле'),
        // method: yup.string().required('Обязательное поле')
    })
    return (
        <main className="main">
            <div className="container">
                <section className="checkout__order">
                    <MainTitle>Оформление заказа</MainTitle>
                    <Breadcrumbs/>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            phoneNumber: '',
                            country: '',
                            city: '',
                            street: '',
                            house: '',
                            apartment: '',
                        }}
                        validateOnBlur
                        onSubmit={(values, actions) => {
                            console.log(values)
                            const timer = setTimeout(() => {
                                navigate('success')
                                clearTimeout(timer)
                            }, 1000)
                        }
                        }
                        validationSchema={validationSchema}
                    >
                        {({
                              values, errors, touched, handleSubmit,
                              handleChange, handleBlur
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <div className="info">
                                    <div className="block__form">
                                        <div className="block__data">
                                            <TitleH3>Данные покупателя</TitleH3>
                                            <Input value={values.name} onBlur={handleBlur} onChange={handleChange}
                                                   name="name" type="text" placeholder="Имя"/>
                                            {touched.name && errors.name && <Error>{errors.name}</Error>}
                                            <Input value={values.email} onBlur={handleBlur} onChange={handleChange}
                                                   name="email" type="email" placeholder="E-mail"/>
                                            {touched.email && errors.email && <Error>{errors.email}</Error>}
                                            <Input value={values.phoneNumber} onBlur={handleBlur}
                                                   onChange={handleChange} name="phoneNumber" type="text"
                                                   placeholder="Телефон"/>
                                            {touched.phoneNumber && errors.phoneNumber &&
                                                <Error>{errors.phoneNumber}</Error>}
                                        </div>
                                        <div className="block__address">
                                            <TitleH3>Адрес получателя</TitleH3>
                                            <Input value={values.country} onBlur={handleBlur} onChange={handleChange}
                                                   name="country" type="text" placeholder="Страна"/>
                                            {touched.country && errors.country &&
                                                <Error>{errors.country}</Error>}
                                            <Input value={values.city} onBlur={handleBlur} onChange={handleChange}
                                                   name="city" type="text" placeholder="Город"/>
                                            {touched.city && errors.city && <Error>{errors.city}</Error>}
                                            <Input value={values.street} onBlur={handleBlur} onChange={handleChange}
                                                   name="street" type="text" placeholder="Улица"/>
                                            {touched.street && errors.street &&
                                                <Error>{errors.street}</Error>}
                                            <Input value={values.house} onBlur={handleBlur} onChange={handleChange}
                                                   name="house" type="text" placeholder="Дом"/>
                                            {touched.house && errors.house && <Error>{errors.house}</Error>}
                                            <Input value={values.apartment} onBlur={handleBlur} onChange={handleChange}
                                                   name="apartment" type="text" placeholder="Квартира"/>
                                            {touched.apartment && errors.apartment &&
                                                <Error>{errors.apartment}</Error>}
                                        </div>
                                        <div className="block__commit">
                                            <TitleH3>Комментарии</TitleH3>
                                            <Textarea cols="30" rows="10" placeholder="Страна"/>
                                        </div>
                                    </div>
                                    <div className="info__order">
                                        <div className="order__cart">
                                            <div className="order__container">
                                                <TitleH3>Ваш заказ</TitleH3>
                                                <div className="order__names">
                                                    <TitleH4>Товар</TitleH4>
                                                    <TitleH4>Всего</TitleH4>
                                                </div>
                                                <div className="order__items">
                                                    {cartGoods.map(item => (
                                                        <div className="order__item">
                                                            <span>{item.name}</span>
                                                            <span>${item.price * item.itemsCount}</span>
                                                        </div>
                                                    ))}
                                                    <div className="order__item">
                                                        <span>Подытог</span>
                                                        <span>${fullCost}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="order__cost">
                                                <TitleH4>Итого</TitleH4>
                                                <TitleH4>${fullCost}</TitleH4>
                                            </div>
                                        </div>
                                        <div className="payment__methods">
                                            <div className="order__container">
                                                <TitleH3>Способы оплаты</TitleH3>
                                                <div className="methods">
                                                    <div className="method">
                                                        <input name="method" id="money" value="money" type="radio"/>
                                                        <label htmlFor="money">Оплата наличными</label>
                                                    </div>
                                                    <div className="method">
                                                        <input name="method" id="card" value="card" type="radio"/>
                                                        <label htmlFor="card">Оплата картой</label>
                                                    </div>
                                                </div>
                                                <Button type="submit">Разместить заказ</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        )}
                    </Formik>
                </section>
            </div>
        </main>
    );
};

export {CheckoutOrder};