import React, {useState} from 'react'
import '../styles/item.css'

export default function Item(props) {
    const product = props.products.filter(element =>
        element.id === props.id)

    const { name, price, image } = product[0];

    let [quantity, setQuantity] = useState(props.quantity)
    let [totalPrice, setTotalPrice] = useState(price*quantity)

    function countPrice() {
        setTotalPrice(quantity*price)
    }

    function onIncrementBtnClick() {
        setQuantity(++quantity);
        countPrice()
    }
    function onDecrementBtnClick() {
        setQuantity(--quantity);
        countPrice()
    }

    function handleChange(e) {
        setQuantity(quantity);
    }

    console.log(totalPrice)

    return (
        <>  
            <div className="items__item">
                <button className="delete-btn"><img src="../data/x-img.png" alt="x sign"></img></button>
                <img src={"../data/" + image} alt={name + " image"} className="items__item__img"></img>
            </div>
            <span className="items__name">{name}</span>
            <span className="items__price">${price}</span>
            <div className="items__quantity">
                <button onClick={onDecrementBtnClick}>-</button>
                <input type="number" value={quantity} onChange={handleChange}/>
                <button onClick={onIncrementBtnClick}>+</button>
            </div>
        </>
    )
    
}
