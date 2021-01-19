import React from 'react'
import Shipping from './Shipping'
import Sumup from './Sumup'
import '../styles/sideContent.css'

export default function SideContent() {
    return (
        <div className="sideContent">
            <Shipping></Shipping>
            <Sumup></Sumup>
        </div>
    )
}
