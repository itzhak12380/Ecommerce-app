import React, { useState, useEffect } from 'react'

function UserAPI() {
    const [isLogged, setisLogged] = useState(false)
    const [isAdmin, setisAdmin] = useState(false)
    const [Cart, setCart] = useState([])
    useEffect(() => {
        const token = localStorage.accessToken
        if (token) {
            const getUser = async () => {
                try {
                    const res = await fetch("http://localhost:8080/user/info", {
                        method: "get", headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}`
                        }
                    }).then(res => res.json()).then(responce => responce).catch(error => error)
                    setisLogged(true)
                    res.user.role === 1 ? setisAdmin(true) : setisAdmin(false)
                    setCart(res.user.cart)
                } catch (error) {
                    alert(error.message)
                }
            }
            getUser()
        }
    }, [])

    const addCart = async(product) =>{
        if(!isLogged) return alert('please login to continue buying')

        const check = Cart.every(item =>{
            return item._id !== product._id
        })
        if(check){
            setCart([...Cart,{...product,quantity:1}])
            await fetch("http://localhost:8080/user/addcart", {
                        method: "put", headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.accessToken}`,
                        },
                        body: JSON.stringify([...Cart,{...product,quantity:1}])
                    }).then(res => res.json()).then(responce => console.log(responce)).catch(error => console.log(error))
        }else{
            alert("this product has been added to cart")
        }
    }
    return {
        isLogged: [isLogged, setisLogged],
        isAdmin: [isAdmin, setisAdmin],
        cart:[Cart,setCart],
        addCart:addCart
    }
}

export default UserAPI
