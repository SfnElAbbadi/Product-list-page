import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { removeFromCart } from '../../../actions/index';
import './productCart.scss'

function CartProduct(props) {
    const { product, dispatch } = props;
    return (
        <div className="cart__product card mb-3">
            <div className="row no-gutters align-items-center">
                <div className="col-md-2 d-flex align-items-center">
                    <img src={`/assets/images/${product.filename}`} className="card-img" alt={product.filename} />
                </div>
                <div className="product__info col-md-10 flex-grow-1">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">
                            <small className="text-primary">${product.price}</small>
                            <small className="text-primary"> / Qte: {product.quantity}</small>
                        </p>
                    </div>
                </div>
                <button className="btn" onClick={() => dispatch(removeFromCart(product.title))}>
                    <FontAwesomeIcon icon={faTimes} style={{color:"rgba(0,0,0,.5)"}} />
                </button>
            </div>
        </div>
    )
}

export default connect()(CartProduct);
