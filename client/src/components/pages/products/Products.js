import React,{useContext} from 'react'
import { globalState } from '../../features/globalState/GlobalState'
import ProductItem from '../../features/ProductItem/ProductItem'
import './products.css'
function Products() {
    const state = useContext(globalState)
    const products = state.productsAPI.products.products
console.log(products);
    return (
        <div className="products">
           {
               products.map(products =>{
                   return <ProductItem key={products._id} product={products}/>
               })
           }
        </div>
    )
}

export default Products
