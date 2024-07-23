import "./MyCSS.css"
import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { LISTP } from "../listProducts"
import { ShopContext } from "../context/shop-context"
import { CartItem } from "../components/CartItem" 
import { useNavigate } from "react-router-dom"

export function Cart() {

    const { cartItems, getTotalCartAmount, getItemTotal } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const totalItems = getItemTotal();
    const navigate =  useNavigate();
    return( 
        totalAmount > 0 ? (
        <>
            <div className="myh1Cart">
                <h1>Your Cart Items</h1>
            </div>  
            <div>
                {LISTP.map((item) => {
                    if (cartItems[item.id] !==0 ) {
                        return <CartItem data={item}/>

                    }  
                })}
            </div>                
            <div className="checkout">
                    <h2>Order Summary</h2>
                    <div className="summary">
                        <table>
                            <tr>
                                <th>Items({totalItems}):</th>
                                <th>${totalAmount.toFixed(2)}</th>
                            </tr>
                            <tr>
                                <th>Shipping & handling: </th>
                                <th>$6.99</th>
                            </tr>
                            <tr>
                                <th>Total before tax: </th>
                                <th>$ {(totalAmount + 6.99).toFixed(2)}</th>
                            </tr>
                            <tr>
                                <th>Estimated tax to be collected: </th>
                                <th>$4.15</th>
                            </tr>                            
                        </table>
                        
                    </div>
                    <div className="ctotal">
                        <h3>Order total: ${(totalAmount + 6.99 + 4.15).toFixed(2)} </h3>
                    </div>
                    <button className="cartB"  onClick={() => navigate("/")}>Continue Shopping</button>
                    <button className="cartB" onClick={() => navigate("/Checkout")}>Procced to Checkout</button>
            </div>                
        </>)
        : ( <div>
                <h1> Your Cart is Empty</h1>
                <button className="cartB" onClick={() => navigate("/")}>Continue Shopping</button>
            </div>
        ) )
}

