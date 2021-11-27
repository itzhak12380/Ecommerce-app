import React, { createContext, useState, useEffect } from 'react'
import ProductApi from '../api/ProductApi'
import UserAPI from '../api/UserAPI.js'
export const globalState = createContext()

export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false)
    ProductApi()

    const refreshToken = async () => {
        const token = await fetch("http://localhost:8080/user/refresh_token", { method: "get", headers: { "Content-Type": "application/json" } })
            .then(res => res.json())
            .then(responce =>responce )
            .catch(error => error)
     return setToken(token)
    }
    useEffect(() => {
        refreshToken()
    }, [])
    const state = {
        token: [token, setToken],
        productsAPI: ProductApi(),
        userAPI: UserAPI()
    }
    return (
        <globalState.Provider value={state}>
            {children}
        </globalState.Provider>
    )
}