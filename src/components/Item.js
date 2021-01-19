import React, {useState} from 'react'
import '../styles/item.css'


export default function Item(props) {
    const product = props.products.filter(element =>
        element.id === props.id)

    const { name, price, image } = product[0];
    let { totalPrice, setPrice } = props

    let [quantity, setQuantity] = useState(props.quantity)
    let [itemsPrice, setItemsPrice] = useState(price*quantity) 

    function countPrice() {
        setItemsPrice(quantity*price)
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
    
    function countTotalPrice() {
        setPrice(totalPrice = itemsPrice) 
    }
    console.log(itemsPrice)
    console.log(totalPrice)

    return (
        <>  
            <div className="items__item">
                <button className="delete-btn"><img src="../data/x-img.png" alt="delete button"></img></button>
                <img src={"../data/" + image} alt={name + " image"} className="items__item__img"></img>
            </div>
            <span className="items__name">{name}</span>
            <span className="items__price">${price}</span>
            <div className="items__quantity">
                <button onClick={onDecrementBtnClick}>-</button>
                <input type="number" value={quantity} onChange={handleChange}/>
                <button onClick={onIncrementBtnClick}>+</button>
                <button className="edit-btn" onClick={countTotalPrice}><img src="../data/edit-img.png" alt="edit button"></img></button>
            </div>
        </>
    )
    
}
