import React from 'react'
import { Link } from "react-router-dom";
import Cart from './icon/cart.svg'
import Menu from './icon/bars-solid.svg'
import Close from './icon/times-solid.svg'
import './header.css'
function Header() {
    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="" width="30" />
            </div>
            <div className="logo">
                <h1>
                    <Link to='/'>DevAT shop</Link>
                </h1>
            </div>
            <ul >
                <li><Link to="/"> products</Link></li>
                <li><Link to="/Login"> login or Register </Link></li>
                <li><img src={Close} alt="" width="30" className="menu" /></li>
            </ul>
            <div className="cart-icon">
                <span>0</span>
                <Link to="/cart">
                    <img src={Cart} alt="" width="30" />
                </Link>
            </div>
        </header>
    )
}

export default Header
