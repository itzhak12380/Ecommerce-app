import React,{useState,useEffect} from 'react'
import axios from 'axios'
function ProductApi() {
    const [products, setproduct] = useState([])

    const getProduct = async ()=>{
        const res = await axios.get('/api/product')
        setproduct(res.data.products);
    }
    useEffect(() => {
        getProduct()
    }, [])
    return {
        products:{products,setproduct}
    }
}

export default ProductApi
