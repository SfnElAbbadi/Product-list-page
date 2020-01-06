import React, { useState } from 'react';
import productData from '../../data/products';
import Product from '../product/product'
const Products = () => {
    const [products, setProducts] = useState(productData)
    return (
        <div className="row mt-5">
            {products.map((productItem, index) => <Product key={index} product={productItem}/>)}
        </div>
    )
}
export default Products;