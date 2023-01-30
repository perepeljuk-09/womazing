import './App.css';
import React from "react";
import { Routes, Route, } from "react-router-dom"
import {Homepage} from "./components/homepage/homepage";
import {Shop} from "./components/shop/shop";
import {AboutBrand} from "./components/aboutBrand/aboutBrand";
import {Contacts} from "./components/contacts/contacts";
import {Cart} from "./components/cart/cart";
import {Item} from "./components/item/item";
import {OrderSuccess} from "./components/orderSuccess/orderSuccess";
import {CheckoutOrder} from "./components/checkoutOrder/checkoutOrder";
import {NotFoundPage} from "./components/notFoundPage/notFoundPage";
import { LayOut } from './components/LayOut/LayOut';

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LayOut />}>
                    <Route index element={<Homepage/>}/>
                    <Route path="shop" element={<Shop/>}/>
                    <Route path="shop/:category" element={<Shop/>}/>
                    <Route path="shop/:category/:id" element={<Item/>}/>
                    <Route path="about" element={<AboutBrand/>}/>
                    <Route path="contacts" element={<Contacts/>}/>
                    <Route path="cart" element={<Cart/>}/>
                    <Route path="cart/checkout/success" element={<OrderSuccess/>}/>
                    <Route path="cart/checkout" element={<CheckoutOrder/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
