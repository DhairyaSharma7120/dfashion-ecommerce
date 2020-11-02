import React from 'react'
import './cart-icon.styles.scss'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'
// import CartItem from '../cart-item/cart-item.component';
import{ selectCartItemsCount } from '../../redux/cart/cart.selector'
const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <span className="item-count">{itemCount}</span>
            <ShoppingCartIcon className="cart"/>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProp = (state)=>({
    itemCount: selectCartItemsCount(state)

})
export default connect(mapStateToProp, mapDispatchToProps)(CartIcon);
