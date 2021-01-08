import React, { Component } from 'react'
import {connect} from 'react-redux'
import Items from '../items/items.component'
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors'
import './items-container.styles.css'

const ItemsContainer = ({sections})=>(
            <div className="items-container">
                {sections.map(({ id, ...otherProps}) => (
                    <Items key={id} {...otherProps}/>
                ))}
            </div>
        )
    
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})
export default connect(mapStateToProps)(ItemsContainer);
