import React from 'react'
import './collection-preview.styles.scss'
import PreviewItem from '../preview-items/preview-items.component'
const CollectionPreview = ({ title, items })=>{
    return(
        <div className='collection-preview'>
            <h1 className="title">{ title.toUpperCase() }</h1>
            <div className='preview'>
                {
                    items.filter((item,inx) => inx<4).map(({id, ...otherProps}) => (
                    <PreviewItem key={id} {...otherProps} />
                    ))
                }
            </div>
        </div>
    );
}

export default CollectionPreview
