import React from 'react'
import ProceedBtn from './ProceedBtn'

export default function Sumup() {
    return (
        <div className="sumup">
            <h3 className="font--black bold">cart totals</h3>
            <div className="sumup-wrapper">
                <div className="sumup__subtotal">
                    <span>Subtotal</span>
                    <span className="font--black"></span>
                </div>
                <div className="sumup__grandTotal">
                    <span>Grand Total</span>
                    <span className="font--black bigger">total cost</span>
                </div>
                <ProceedBtn className={"button--bold"}></ProceedBtn>
            </div>
            
        </div>
    )
}
