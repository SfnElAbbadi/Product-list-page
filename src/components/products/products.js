import React,{ useState, useEffect } from 'react';
import productData from '../../data/products';
import Product from './product/product';
import Filter from '../filter/filter';
import { connect, useSelector } from 'react-redux';
import { setProductList } from '../../actions';
const Products = (props) => {
    const { dispatch } = props;
    const { products } = useSelector(state => ({products: state.common.productList}))    
    const [productList] = useState(productData);
    useEffect(() => {
        dispatch(setProductList(productList))
    },[productList])
    return (
        
        
        <div className="row mt-5">
            <div className="col-xs-12 col-md-3">
                <Filter />
            </div>
            <div className="col-xs-12 col-md-9">
                <div className="row">
                    {products.map((productItem, index) => <Product key={index} product={productItem}/>)}
                </div>
            </div>
        </div>
    )
}
export default connect()(Products);