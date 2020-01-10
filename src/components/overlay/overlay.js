import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { hideOverlay } from '../../actions/index';
import { closeCart } from '../../actions/index';
import './overlay.scss'

function Overlay(props) {
    const { isShown, closeCart, hideOverlay } = props;
    const cartClasses = classNames({
        'open': isShown === true,
        'close': isShown === false,
    })

    const handleCart = () => {
        closeCart();
        hideOverlay();
    }

    return (
        <div id="overlay" className={cartClasses} onClick={() => handleCart()}></div>
    )
}

const mapStateToProps = state => ({
    isShown: state.overlay.isShown
})

const mapDispatchToprops = dispatch => ({
    hideOverlay: () => dispatch(hideOverlay()),
    closeCart: () => dispatch(closeCart()),
})

export default connect(mapStateToProps, mapDispatchToprops)(Overlay);
