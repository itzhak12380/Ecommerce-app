import React, { useContext, useState, useEffect } from 'react'
import { globalState } from '../../features/globalState/GlobalState'
import { Link } from 'react-router-dom'
import  PaypalButton from './PaypalButton'
import './cart.css'
function Cart() {
    const state = useContext(globalState)
    const [cart,setCart] = state.userAPI.cart
    const [total, settotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev,item)=>{
                return prev + (item.price + item.quantity)
            },0)
            settotal(total)
        }
        getTotal()
    }, [total])
    const addToCart = async ()=>{
        await fetch("http://localhost:8080/user/addcart", {
            method: "put", headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.accessToken}`,
            },
            body: JSON.stringify(cart)
        }).then(res => res.json()).then(responce => console.log(responce)).catch(error => console.log(error))
    }
    const increment = (id)=>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        });
        setCart([...cart])
        addToCart()
    }
    const decrement = (id)=>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1: item.quantity -= 1
            }
        });
        setCart([...cart])
        addToCart()
    }
    const removeProduct = (id)=>{
        if(window.confirm("do you want to delete this product?")){
            cart.forEach((item,index)=>{
                if(item._id === id){
                    cart.splice(index,1)
                }
            })
            setCart([...cart])
            addToCart()
        }
    }
    const tranSuccess = async (payment)=>{
        console.log(payment);
    }

    if (cart.length === 0) {
        return <h2 style={{ textAlign: 'center', fontSize: '5rem' }}>Cart empty</h2>
    }
    return (
        <div>
            {
                cart.map(product => (
                    <div className="detail cart" key={product._id}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsr99d1JV5TXcOAbkzCUao6FrVQzaEfAcnog&usqp=CAU"
                            alt=""
                        />
                        <div className="box-detail">
                            <h2>{product.title}</h2>

                            <span>${product.price * product.quantity}  </span>
                            <p>{product.descriptiond}</p>
                            <p>{product.content}</p>
                        </div>
                        <div className="amount">
                            <button onClick={()=> decrement(product._id)}> - </button>
                            <span>{product.quantity}</span>
                            <button onClick={()=> increment(product._id)}> + </button>
                        </div>
                        <div className="delete" onClick={()=> removeProduct(product._id)}>
                            X
                        </div>
                    </div>
                ))
            }
            <div className="total">
                <h3>Total: ${total}</h3>
                {/* <Link to="#!">Payment</Link>0 */}
                < PaypalButton total={total}
                tranSuccess={tranSuccess}
                />
            </div>
        </div>
    )
}

export default Cart
