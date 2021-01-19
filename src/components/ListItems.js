import React, { useState } from 'react';
import Item from './Item';
import products from '../data/products.json'

export default function ListItems(props) {
    let [totalPrice, setTotalPrice] = useState(0) 
    
    return (
        <div className='items'>
            {props.data.map((element) => 
                <Item key={element.productId} id={element.productId} quantity={element.quantity} products={products} totalPrice={totalPrice} setPrice={setTotalPrice}></Item>
            )}
        </div>
    )
}
