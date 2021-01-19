import React from 'react'
import Cart from './Cart'
import ToCheckout from './ToCheckout'

export default function Content() {
    return (
        <div className='content'>
            <Cart></Cart>
            <ToCheckout></ToCheckout>
        </div>
    )
}
