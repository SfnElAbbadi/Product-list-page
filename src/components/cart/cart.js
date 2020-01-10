import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { hideOverlay } from '../../actions/index';
import { closeCart } from '../../actions/index';
import './cart.scss';
import CartProduct from './cartProduct/cartProduct';

const Cart = (props) => {
    const { products, closeCart, hideOverlay } = props;
    const cartClasses = classNames({
        'cart': true,
    })

    const handleCart = () => {        
        closeCart();
        hideOverlay();
    }

    let totalPrice = 0;

    if(Object.entries(products).length !== 0) {
        totalPrice = Object.values(products).reduce(((acc, { price }) => acc + price), 0);
    }

    return (
        <div className={cartClasses}>
            <div className="cart__wrapper">
                <div className="cart__header navbar navbar-light bg-light">
                    <span className="navbar-brand">Your Cart</span>
                    <button className="cart__close btn btn-light" onClick={() => handleCart()}>
                        <FontAwesomeIcon icon={faTimes} style={{color:"rgba(0,0,0,.5)"}} />
                    </button>
                </div>
                <div className="d-flex flex-column flex-grow-1 overflow-auto px-3">
                    { products.map((cartProd, index) => <CartProduct key={index} product={cartProd}/>) }
                </div>
                {cartFooter(totalPrice)}
            </div>
        </div>
    )
}

const cartFooter = (totalPrice) => {
    return (
        <div className="cart__footer d-flex flex-column justify-content-center px-3">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-body font-weight-bolder">TOTAL PRICE</span>
                <span className="text-primary font-weight-bold">${totalPrice}</span>
            </div>
            <div className="checkout">
                <button className="checkout__btn btn btn-primary">Checkout</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products : state.cart.products,
    isCartOpen : state.handleCart.isCartOpen
})

const mapDispatchToprops = dispatch => ({
    hideOverlay: () => dispatch(hideOverlay()),
    closeCart: () => dispatch(closeCart()),
})

export default connect(mapStateToProps, mapDispatchToprops)(Cart);