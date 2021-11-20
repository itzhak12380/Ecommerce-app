import React,{useContext,useState} from 'react'
import { globalState } from '../../globalState'
import Cart from './icon/cart.svg'
import Menu from './icon/bars-solid.svg'
import Close from './icon/times-solid.svg'
import {Link} from 'react-router-dom'
function Header() {
    const value = useContext(globalState)

    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="" width="30" />
                <img src={Close} alt="" width="30" />
                <img src={Cart} alt="" width="30" />
            </div>
            <div className="logo">
                <h1>
                    <Link to='/'>DevAT shop</Link>
                </h1>
            </div>
            <ul>
                <li><Link to="/"> products</Link></li>
                <li><Link to="/login"> login or Register </Link></li>
            </ul>
        </header>
    )
}

export default Header
