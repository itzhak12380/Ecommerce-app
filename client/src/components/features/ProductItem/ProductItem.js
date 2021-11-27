import React from 'react'
import './productsItem.css'
import BtnRender from './BtnRender'
function ProductItem({ product,isAdmin }) {

    return (
        <div className="product_card">
            {
                isAdmin && <input type="checkbox" checked={product.checked} />
            }
            {/* <img src={product.images.url} /> */}
            <img src="https://www.topgear.com/sites/default/files/cars-car/carousel/2019/01/2018-chevrolet-camaro-zl1-033.jpg" />
            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>
            <div >
            <BtnRender product={product} />
            </div>
        </div>
    )
}

export default ProductItem
