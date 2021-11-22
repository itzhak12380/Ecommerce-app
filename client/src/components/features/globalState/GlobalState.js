import React,{createContext,useState} from 'react'
import ProductApi from '../api/ProductApi'
export const globalState = createContext()

export const DataProvider = ({children})=>{
    const [token, setToken] = useState(false)
    ProductApi()

    const state = {
        token:[token,setToken],
        productsAPI:ProductApi()
    }
    return(
        <globalState.Provider value={state}>
            {children}
        </globalState.Provider>
    )
}