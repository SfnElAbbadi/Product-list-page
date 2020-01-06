import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/index'

const Product = (props) => {
    const prod = props.product;
    const {dispatch} = props;
    return (
        <div className="col-xs-12 col-md-3 card mb-4">
            <img src={`/assets/images/${prod.filename}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{prod.title}</h5>
                <p className="card-text">{prod.description}</p>
                <button className="btn btn-primary" onClick={() => dispatch(addToCart(prod))}>Add to Cart</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    products : state.products
})

export default connect(mapStateToProps)(Product);