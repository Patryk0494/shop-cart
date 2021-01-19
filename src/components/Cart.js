import React from 'react'
import ListItems from './ListItems'
import '../styles/cart.css'
import cartProducts from '../data/cart_products.json'


export default function Cart() {
    return (
        <div className="grid-wrapper">
            <div className='caption bold'>
                <span className="caption__name">Product Name</span>
                <span className="caption__price">Unit Price</span>
                <span className="caption__qty">Qty</span>
            </div>
            <ListItems data={cartProducts}></ListItems>
            <div className='update'>
                <button className="button button--bold button--thin">Update Shopping Cart</button>
            </div>
        </div>
    )
}
