import React from 'react'
import { clearItem } from '../../redux/cart/cart.action'
import { addItem } from '../../redux/cart/cart.action'
import { removeItem } from '../../redux/cart/cart.action'
import { connect } from 'react-redux'
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const  { name, imageUrl, price, quantity}  = cartItem;

    return( <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item"/>
        </div>
        <span className="name">{name} </span>
        <span className="quantity"><span className="decrease-quantity" onClick={() => removeItem(cartItem)}> &#10094; </span> 
        <span className="quantity-box">{quantity}</span> 
        <span className="increase-quantity" onClick={() => addItem(cartItem)}> &#10095; </span> </span> 
        <span className="price">{price} RS </span>
        <div className="remove-button" onClick = {() => clearItem(cartItem)} >&#10005;</div>
    </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))  
})

export default connect(null,
    mapDispatchToProps)( CheckoutItem);