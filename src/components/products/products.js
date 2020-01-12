import React from 'react';
import productData from '../../data/products';
import Product from '../product/product'
const Products = () => {
    return (
        <div className="row mt-5">
            <div className="col-xs-12 col-md-3">

            </div>
            <div className="col-xs-12 col-md-9">
                <div className="row">
                    {productData.map((productItem, index) => <Product key={index} product={productItem}/>)}
                </div>
            </div>
        </div>
    )
}
export default Products;