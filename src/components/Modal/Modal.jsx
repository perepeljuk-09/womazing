import React, {useState} from 'react';
import s from './Modal.module.css';
import {TitleH3} from "../utils/TitleH3/TitleH3";
import {Input} from "../utils/Input/Input";
import {Formik} from "formik";
import * as yup from "yup";
import {ButtonTransp} from "../utils/Buttons/ButtonTransp";
import {Button} from "../utils/Buttons/Button";

const Modal = ({isModal, setIsModal}) => {
    const validationSchema = yup.object().shape({
        name: yup.string().required("Обязательное поле"),
        email: yup.string().email("Введите верный email").required("Обязательное поле"),
        numberPhone: yup.string().required("Обязательное поле"),
    });
    const [isSuccess, setIsSuccess] = useState(false);

    const handleBlur = () => {
        setIsModal(false)
        setTimeout(() =>{
            setIsSuccess(false)
        },500)

    }

    return <div className={isModal ? `${s.modal} ${s.active}` : `${s.modal}`} onClick={handleBlur}>
        {!isSuccess ? <Formik
            initialValues={{
                name: '',
                email: '',
                numberPhone: '',
            }}
            onSubmit={(values) => {
                console.log(values)
                values.name = ''
                values.email = ''
                values.numberPhone = ''
                setIsSuccess(true)
            }}
            validateOnBlur
            validationSchema={validationSchema}
        >
            {({
                  values, errors, handleSubmit
                  , touched, handleBlur, handleChange
              }) => (
                <form onSubmit={handleSubmit} className={isModal ? `${s.modal__form} ${s.active}` : `${s.modal__form}`}
                      onClick={(e) => e.stopPropagation()}>
                    <TitleH3>Заказать обратный звонок
                        <button className={s.btn__delete} onClick={() => setIsModal(prev => !prev)}>X</button>
                    </TitleH3>
                    <Input value={values.name} onChange={handleChange} onBlur={handleBlur} name="name"
                           placeholder={"Имя"}/>
                    {errors.name && touched.name && <p className={s.error}>{errors.name}</p>}
                    <Input value={values.email} onChange={handleChange} onBlur={handleBlur} name="email"
                           placeholder={"E-mail"}/>
                    {errors.email && touched.email && <p className={s.error}>{errors.email}</p>}
                    <Input value={values.numberPhone} onChange={handleChange} onBlur={handleBlur} name="numberPhone"
                           placeholder={"Телефон"}/>
                    {errors.numberPhone && touched.numberPhone && <p className={s.error}>{errors.numberPhone}</p>}
                    <Button type="submit">Заказать звонок</Button>
                </form>
            )}
        </Formik> : <div className={isModal ? `${s.modal__form} ${s.active}` : `${s.modal__form}`}
                         onClick={(e) => e.stopPropagation()}>
            <TitleH3>Отлично! Мы скоро вам перезвоним.</TitleH3>
            <ButtonTransp type="button" onClick={handleBlur}>Закрыть</ButtonTransp>
        </div>
        }
    </div>
};

export {Modal};