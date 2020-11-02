import React from 'react';
import './cart-item.styles.scss';


const CartItem  = ({item: { imageUrl, price, name, quantity   }}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="productpic"/>
        <div classname="item-details">
            <span classname="name">{name}</span><br/>
<span classname="price">Price: {quantity} x {price}</span>
        </div>
    </div>
)

export default CartItem;