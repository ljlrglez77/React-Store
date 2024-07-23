import { Link } from "react-router-dom"
import "./Navbar.css"
import shopCart from "../images/shoppingCar.png"
import logoFinal from "../images/logo_final.jpg"

export function Navbar (){
    return (
        <div className="navbar">
            <img src= {logoFinal} className="myImgLogo"/>            
            <Link to="/"><button className="navbutton">Products</button></Link>
            <Link to="/About"><button className="navbutton">About Us</button></Link>
            <Link to="/Contact"><button className="navbutton">Contact Us</button></Link>            
            <Link to="/Cart"><img src= {shopCart} className="myImgCart"/></Link>
        </div>
    )
}