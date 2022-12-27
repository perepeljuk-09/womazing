import './App.css';
import React, {useState} from "react";
import {Navbar} from "./components/header/navbar";
import {Footer} from "./components/footer/footer";
import { Routes, Route, } from "react-router-dom"
import {Homepage} from "./components/homepage";
import {Shop} from "./components/shop";
import {AboutBrand} from "./components/aboutBrand/aboutBrand";
import {Contacts} from "./components/contacts/contacts";
import {Cart} from "./components/cart/cart";
import {Item} from "./components/item/item";
import {OrderSuccess} from "./components/orderSuccess/orderSuccess";
import {CheckoutOrder} from "./components/checkoutOrder/checkoutOrder";
import {Modal} from "./components/Modal/Modal";

function App() {
    const [isModal, setIsModal] = useState(false)
    return (
        <div className="App">
            <Navbar setIsModal={setIsModal}/>

            {/*<div className="block__fon"></div>*/}
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/about" element={<AboutBrand/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/shop/:id" element={<Item/>}/>
                <Route path="/success" element={<OrderSuccess/>}/>
                <Route path="/checkout" element={<CheckoutOrder/>}/>
            </Routes>
            <Footer/>
            <Modal isModal={isModal} setIsModal={setIsModal}/>
        </div>
    );
}

export default App;
