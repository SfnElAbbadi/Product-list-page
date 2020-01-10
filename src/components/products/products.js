import React from 'react';
import productData from '../../data/products';
import Product from '../product/product'
const Products = () => {
    return (
        <div className="row mt-5">
            {productData.map((productItem, index) => <Product key={index} product={productItem}/>)}
        </div>
    )
}
export default Products;