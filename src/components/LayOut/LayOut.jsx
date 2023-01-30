import { useState } from "react";
import { Outlet} from "react-router-dom";
import {Navbar} from "../header/navbar";
import {Modal} from "../Modal/Modal";
import {Footer} from "../footer/footer";


const LayOut = () => {
    const [isModal, setIsModal] = useState(false);

    return (
        <>
            <Navbar setIsModal={setIsModal}/>
                <Outlet/>
            <Footer/>
            <Modal isModal={isModal} setIsModal={setIsModal}/>
        </>
    )
}

export {LayOut};