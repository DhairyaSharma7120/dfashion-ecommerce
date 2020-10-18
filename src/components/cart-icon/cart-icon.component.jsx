import React from 'react'
import './cart-icon.styles.sass'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const carIcon = () => {
    return (
        <div className='cart-icon'>
            <span className="item-count">0</span>
            <ShoppingCartIcon className="shopping-icon/>
        </div>
    )
}

export default carIcon
