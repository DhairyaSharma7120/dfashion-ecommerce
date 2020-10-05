import React from 'react'
import './items.styles.css'

const Items = ({ title, imageUrl, size })=>(

     <div className={`${size} items`}>
        
        <div style={{ backgroundImage: `url(${imageUrl})`}} className="bg-img"></div>

        <div className="item-content">
            <h1>{title.toUpperCase()}</h1>
            <span>SHOP NOW</span>
        </div>

    </div>
);


export default Items;