import React,{useContext,useState} from 'react'
import './productsItem.css'
import BtnRender from './BtnRender'
import { globalState } from '../globalState/GlobalState'
import Loading from '../loading/Loading'
function ProductItem({ product,isAdmin,setproduct }) {
    const state = useContext(globalState)
    const [productCall, setproductCall] = state.productsAPI.productCall
    const [LoadingState, setLoadingState] = useState(false)
    const deleteProduct = async ()=>{
        try {
            setLoadingState(true)
            const destroyImage =   fetch("http://localhost:8080/api/destroy", {
                method: "post", headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.accessToken}`
                },
                body: JSON.stringify({ public_id:product.images.public_id})
            }).then(res => res.json()).then(responce => responce).catch(error => error)
            const deleteProduct =   fetch(`http://localhost:8080/api/product/${product._id}`, {
                method: "delete", headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.accessToken}`
                }
            }).then(res => res.json()).then(responce => responce).catch(error => error)
            await destroyImage
            await deleteProduct
            setLoadingState(false)
            setproductCall(!productCall)
        } catch (error) {
            alert(error.message)
        }
    }
    const handleCheck = ()=>{
        let newProduct = [...product]

        newProduct.checked = !newProduct.checked
        setproduct(newProduct)
    }
    if(LoadingState) return <div className="product_card"><Loading/></div> 
    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked} onChange={handleCheck} />
            }
            <img src={product.images.url} alt="" />
            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>
            <div >
            <BtnRender product={product} deleteProduct={deleteProduct} />
            </div>
        </div>
    )
}

export default ProductItem
