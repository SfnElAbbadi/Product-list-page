import React from 'react';
import { connect } from 'react-redux';
import Rating from './rating/rating';
import { addToCart } from '../../../actions/index';
import { showOverlay } from '../../../actions/index';
import { openCart } from '../../../actions/index';
import './product.scss';

const Product = (props) => {
    const prod = props.product;
    const { addToCart, showOverlay, openCart } = props;

    const handleAddToCart = product => {        
        addToCart(product);
        openCart();
        showOverlay();
    }

    return (
        <div className="col-xs-12 col-md-4 card mb-4">
            <div className="card__wrapper d-flex flex-column shadow-sm rounded p-2">
                <div className="card__img">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/${prod.filename}`} className="card-img-top" alt="..."/>
                </div>
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{prod.title}</h5>
                    <p className="card-text">{prod.description}</p>
                    <Rating rating={prod.rating}/>
                    <p className="card__price d-flex justify-content-center font-weight-bold">${prod.price}</p>
                    <button className="card-btn btn btn-primary" onClick={() => handleAddToCart(prod)}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToprops = dispatch => ({
    addToCart: item => dispatch(addToCart(item)),
    showOverlay: () => dispatch(showOverlay()),
    openCart: () => dispatch(openCart()),
})
export default connect(null,mapDispatchToprops)(Product);