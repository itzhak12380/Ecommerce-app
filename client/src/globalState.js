import React,{createContext,useState} from 'react'

export const globalState = createContext()

export const DataProvider = ({children})=>{
    return(
        <globalState.Provider value="value">
            {children}
        </globalState.Provider>
    )
}