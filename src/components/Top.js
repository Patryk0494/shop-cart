import React from 'react'
import ProceedBtn from './ProceedBtn'
import '../styles/top.css'

export default function Top() {
    return (
        <div className='top'>
            <h3 className='top__title'>Shopping cart</h3>
            <ProceedBtn></ProceedBtn> 
        </div>
    )
}
