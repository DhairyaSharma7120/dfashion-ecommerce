import React from 'react';
import './collection-overview.styles.scss';
import {connect} from 'react-redux';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../collection-preview/collection-preview.component';
const collectionOverview = ({collections})=>(
    <div className="collection-overview">
        {collections.map(({id, ...otherProp}) => (
                    <CollectionPreview key={id} {...otherProp} />
                ))}   
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(collectionOverview);