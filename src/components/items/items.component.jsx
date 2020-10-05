import React from 'react'
import './items.styles.css'
const Items = ({ title, imageUrl, size })=>(

     <div style={{
        backgroundImage: `url(${imageUrl})`
    }}  className={`${size} items`}>
        <div className="item-content">
            <h1>{title}</h1>
            <span>SHOP NOW</span>
        </div>    
    </div>
);


export default Items;