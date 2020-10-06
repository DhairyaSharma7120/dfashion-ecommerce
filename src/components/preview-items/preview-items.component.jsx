import React from 'react'
import './preview-items.styles.scss'
const PreviewCollection = ({id, name, price, imageUrl}) => {
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
                onClick ={(e)=>{console.log(e.value)}}
                >ADD TO CART</button>
            </div>
            
                   
        </div>
    )
}
export default PreviewCollection
