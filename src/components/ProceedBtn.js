import React from 'react'
import '../styles/button.css'

export default function ProceedBtn(props) {
    return (
        <button className={"button " + props.className}>Proceed to checkout</button>
    )
}
