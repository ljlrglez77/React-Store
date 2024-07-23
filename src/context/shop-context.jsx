import React, { createContext } from "react";
import { LISTP } from "../listProducts";
import { useState } from "react";

export const ShopContext = createContext(null);


const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < LISTP.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState (getDefaultCart());

    const emptyCart = () => {

        for (const item in cartItems) {
            if (cartItems[item] >0){
                cartItems[item] = 0;
            }
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] >0){
                let itemInfo = LISTP.find((product) => product.id === Number(item)); 
                totalAmount += cartItems[item] * itemInfo.price; 
            }
        }
        return totalAmount;
    }

    const getItemTotal = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] >0){
                totalItem +=cartItems[item];
                }
            } 
        return totalItem;   
    }


    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}) )
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, getItemTotal, emptyCart};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};