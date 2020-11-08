import React from 'react';
import './cart-item.styles.scss';


const CartItem  = ({item: { imageUrl, price, name, quantity   }}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="productpic"/>
        <div className="item-details">
            <span className="name">{name}</span><br/>
<span className="price">Price: {quantity} x {price}</span>
        </div>
    </div>
)

export default CartItem;