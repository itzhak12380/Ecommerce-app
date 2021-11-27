import React,{useContext} from 'react'
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
import { globalState } from '../../features/globalState/GlobalState'
function Container() {
    const state = useContext(globalState)
    const [isLogged] = state.userAPI.isLogged
    return (
        <div>
            <Header />
            <div >
                <Routes>
                    <Route path="/" element={<Products />} prdocus />
                    <Route path="/detail/:id" element={<DetailProduct />} prdocus />
                    <Route path="/cart" element={<Cart />}/>
                    <Route path="/Login" element={isLogged ? <NotFound/>: < Login />} prdocus />
                    <Route path="/Register" element={isLogged ? <NotFound/>: <Register />} prdocus />
                    <Route path="*" element={<NotFound />} prdocus />
                </Routes>
            </div>
        </div>
    )
}

export default Container
