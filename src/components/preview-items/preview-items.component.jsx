import React from 'react'
import { connect } from 'react-redux'
import {addItem} from '../../redux/cart/cart.action';
import './preview-items.styles.scss'
const PreviewCollection = ({item , addItem}) => {
    const  { name, price, imageUrl} = item;
    return (
        <div className='preview-items'>
            
            <div className='image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }
                }/>
            
            <div className='preview-items-footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
            </div>
            <div className="add-to-cart">
                <button className='add-to-cart-btn'
                onClick ={() => addItem(item)}
                >ADD TO CART</button>
            </div>
            
                   
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(PreviewCollection);