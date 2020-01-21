import React from 'react';
import { connect } from 'react-redux';
import CSSTransition from 'react-transition-group/CSSTransition';
import Navbar from './components/navbar';
import Products from './components/products/products';
import Cart from './components/cart/cart';
import Overlay from './components/overlay/overlay';
import './App.scss'

function App(props) {
  const { isCartOpen } = props;
  const displayCart = isCartOpen => {
      return (
      <CSSTransition
        in={isCartOpen}
        timeout={{ enter: 1000, exit: 1000}}
        classNames="cart"
        unmountOnExit
        >
        <Cart />
      </CSSTransition>
      )
  }
  return (
    <>
      <Navbar />
      <div className="container">
        <Products />        
        {displayCart(isCartOpen)}
        <Overlay />
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  isCartOpen: state.cart.isCartOpen,
  isShown: state.overlay.isShown
})

export default connect(mapStateToProps)(App);
