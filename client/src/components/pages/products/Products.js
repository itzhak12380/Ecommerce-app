import React, { useContext ,useEffect} from 'react'
import { globalState } from '../../features/globalState/GlobalState'
import ProductItem from '../../features/ProductItem/ProductItem'
import './products.css'
import Loading from '../../features/loading/Loading'
function Products() {
    const state = useContext(globalState)
    const { products, setproduct } = state.productsAPI.products
    const isAdmin = state.userAPI.isAdmin
    const [productCall, setproductCall] = state.productsAPI.productCall
    const getProduct = async () => {
        const res = await fetch("http://localhost:8080/api/product", {
            method: "get", headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.accessToken}`,
            }
        }).then(res => res.json()).then(responce => responce).catch(error => error)
        setproduct(res.products);
    }
    useEffect(() => {
        getProduct()
    }, [productCall])
    return (
        <>
            <div className="products">
                {
                    products.map(products => {
                        return <ProductItem key={products._id} product={products} setproduct={setproduct} isAdmin={isAdmin} />
                    })
                }
            </div>
                {products.length === 0 && <Loading/>}
        </>
    )
}

export default Products
