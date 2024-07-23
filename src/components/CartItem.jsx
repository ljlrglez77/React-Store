import "./CartItem.css"
import React, { useContext } from "react"
import { ShopContext } from '../context/shop-context'



export function CartItem(props) {    

    const {id, title, image, desc, price}= props.data;
    const {addToCart, cartItems, removeFromCart, updateCartItemCount} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
    return (
        <div className="myCart"> 
                <div>
                    <img className="cImages"  src= {image}/> 
                </div>                
                <div className="cBody">                      
                        <h2>{title}</h2>
                        <div>
                            <p className="cPrice"> <strong>Price: ${price}</strong></p>
                            <div className="countHandler">
                                <button onClick={()=> removeFromCart(id)}>-</button>
                                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) }/>
                                <button onClick={()=> addToCart(id)}>+</button>
                            </div>
                        </div>
                        
                        <button className="caddButton" onClick={() =>addToCart(id)}>
                            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>  }
                        </button>                  
                </div>
            
        </div>
    )
}