import React, { useContext } from 'react'
import { globalState } from '../../features/globalState/GlobalState'
import ProductItem from '../../features/ProductItem/ProductItem'
import './products.css'
import Loading from '../../features/loading/Loading'
function Products() {
    const state = useContext(globalState)
    const products = state.productsAPI.products.products
    const isAdmin = state.userAPI.isAdmin
    return (
        <>
            <div className="products">
                {
                    products.map(products => {
                        return <ProductItem key={products._id} product={products} isAdmin={isAdmin} />
                    })
                }
            </div>
                {products.length === 0 && <Loading/>}
        </>
    )
}

export default Products
