import React from 'react';
import Item from './Item';
import products from '../data/products.json'


export default function ListItems(props) {
    return (
        <div className='items'>
            {props.data.map((element) => 
                <Item id={element.productId} quantity={element.quantity} products={products}></Item>
            )}
        </div>
    )
}
