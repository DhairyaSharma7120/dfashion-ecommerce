import React from 'react'
import './items.styles.css'
import {withRouter} from 'react-router-dom'

const Items = ({ title, imageUrl, size, history, linkUrl, match })=>(

     <div className={`${size} items`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        
        <div style={{ backgroundImage: `url(${imageUrl})`}} className="bg-img"></div>

        <div className="item-content">
            <h1>{title.toUpperCase()}</h1>
            <span>SHOP NOW</span>
        </div>

    </div>
);


export default withRouter(Items);