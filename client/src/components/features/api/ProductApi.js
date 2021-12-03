import{ useState, useEffect } from 'react'
function ProductApi() {
    const [products, setproduct] = useState([])
    const [productCall, setproductCall] = useState(false)
    return {
        products: { products, setproduct },
        productCall:[productCall, setproductCall]
    }
}

export default ProductApi
