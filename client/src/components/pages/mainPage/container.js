import React from 'react'
import {
    Routes,
    Route,
} from 'react-router-dom'
import Cart from '../cart/Cart'
import Products from '../products/Products'
import Header from '../../features/header/Header'
import Login from '../auth/Login'
import Register from '../auth/Register'
import NotFound from '../not_found/NotFound'
import DetailProduct from '../../features/DeatailProduct/DetailProduct'
function Container() {
    return (
        <div>
            <Header />
            <div style={{ height: "90%" }}>
                <Routes>
                    <Route path="/" element={<Products />} prdocus />
                    <Route path="/detail/:id" element={<DetailProduct />} prdocus />
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/Login" element={<Login />} prdocus />
                    <Route path="/Register" element={<Register />} prdocus />
                    <Route path="*" element={<NotFound />} prdocus />
                </Routes>
            </div>
        </div>
    )
}

export default Container
