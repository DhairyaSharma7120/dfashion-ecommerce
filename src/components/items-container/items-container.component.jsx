import React, { Component } from 'react'
import Items from '../items/items.component'
import './items-container.styles.css'
export class ItemsContainer extends Component {
    
    constructor(){
        super();

        this.state = {
            sections: [
                {
                  title: 'CAPS',
                  imageUrl: 'https://sevenseven.co.uk/uploads/imager/sevenseven_co_uk/7375f015c2410ce972bff4c5ec5e7faf/photo_1_5e6c910d97fddbfcb3c906fcb5c7b0dd.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'JACKETS',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'SNEAKERS',
                  imageUrl: 'https://sneakers-magazine.com/wp-content/uploads/2018/05/sneaker-photography-ryustyler-ronnie-fieg-x-asics.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'WOMENS',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'small',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'MENS',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
        }
    }

    render() {
        return (
            <div className="items-container">
                {this.state.sections.map(({ title, imageUrl, id, size}) => (
                    <Items key={id} imageUrl={imageUrl} title={title} size={size}/>
                ))}
            </div>
        )
    }
}

export default ItemsContainer;
