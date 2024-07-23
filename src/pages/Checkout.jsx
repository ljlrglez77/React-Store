
import banner2 from "../images/banner2.jpg"
import "./MyCSS.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ShopContext } from "../context/shop-context"
import React, { useContext } from "react"


export function Checkout() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [card, setCard] = useState("")
    const navigate =  useNavigate();

    const { emptyCart } = useContext(ShopContext);
    
    function getRandomSixDigit() {
        return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
      }

    let randomSixDigit = getRandomSixDigit();/**/
    function handleSubmit(){   
        
        document.getElementById('placed').style.display = 'none';
        document.getElementById('finalStep').style.display = 'block';
        emptyCart();/**/
         
     }


    return (
    <>
    <div className='cartContainer'> 
              
        <div className='cartChild'>            
           <img className='imgCart' src= {banner2}/> 
        </div>
        <div id = "finalStep">
                <h2>Your order has been placed successfully</h2>
                <h3>Order Number: {randomSixDigit}</h3>
                <button className="cartB"  onClick={() => navigate("/")}> Continue Shopping </button>
        </div>
        <div id="placed">

                <h1>Checkout</h1> 
                <div className='cartChild1'>
                    
                    <form> 
                        <br/>               
                        <input onChange={(e) => setName(e.target.value)} placeholder="Full Name"/>                
                        <input  onChange={(e) => setEmail(e.target.value)} placeholder="Email"/> 
                        <input  onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number"/>
                        <input  onChange={(e) => setAddress(e.target.value)} placeholder="Address"/>                
                        <input  onChange={(e) => setCard(e.target.value)} placeholder="Card Number"/>               
                        <button className='tbutton' onClick={() => handleSubmit()}>Place your Order</button>

                    </form> 
                </div>
        </div>
    </div>
        
        
    </>
    )
}