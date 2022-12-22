import './App.css';
import React from "react";
import {Navbar} from "./components/header/navbar";
import {Footer} from "./components/footer/footer";
import { Routes, Route, } from "react-router-dom"
import {Homepage} from "./components/homepage";
import {Shop} from "./components/shop";
import {AboutBrand} from "./components/aboutBrand/aboutBrand";
import {Contacts} from "./components/contacts/contacts";

function App() {
    return (
        <div className="App">
            <Navbar/>
            {/*<div className="block__fon"></div>*/}
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/about" element={<AboutBrand/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
