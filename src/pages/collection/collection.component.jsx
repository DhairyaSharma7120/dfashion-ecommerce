import React from 'react';

import { connect } from "react-redux";
import './collection.styles.scss'
import PreviewItem from '../../components/preview-items/preview-items.component'
import { selectCollection } from '../../redux/shop/shop.selector'

const CollectionPage = ({ collection }) => 
{

console.log("this is the collection ", collection);
const {title,items} = collection;
return(
    <div className = 'collection-page'>
        <h2 className="title"> { title } </h2>
        <div className="category-items">
            {
                items.map(item=>(
                    <PreviewItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)} 

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);