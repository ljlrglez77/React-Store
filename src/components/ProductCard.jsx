import "./ProductCard.css"
import React, { useContext } from "react"
import { ShopContext } from '../context/shop-context'
export function ProductCard(props) {    

    const {id, title, image, desc, price}= props.data;

    const {addToCart, cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    return (
        <div className="myCard"> 
                <div className="myTitle">          
                    <h2>{title}</h2>
                </div>
                <div className="myBody">
                    <img className="myImages"  src= {image}/>
                    <div className="myDesc">
                        <p>{desc}</p>
                    </div>
                    <p className="myPrice"> <strong>Price: ${price}</strong></p>
                    <button className="addButton" onClick={() =>addToCart(id)}>
                        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>  }
                    </button>
                </div>
            
        </div>
    )
}

