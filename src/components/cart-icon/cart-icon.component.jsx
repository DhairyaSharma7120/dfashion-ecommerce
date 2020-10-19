import React from 'react'
import './cart-icon.styles.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
const CartIcon = ({ toggleCartHidden }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <span className="item-count">0</span>
            <ShoppingCartIcon className="cart"/>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
