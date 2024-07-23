import { Link } from "react-router-dom"
import aboutImage from "../images/team.jpg"
import "./MyCSS.css"

export function About() {
    return(
    <div className="myContainer">
        <img className= "aImag" src= {aboutImage}/>
        <div className="myh1Title">
            <h1>About Us</h1>
        </div>
        <p>Beauty and health are two sides of the same coin, so keeping hair healthy and clean is as much a matter of health as beauty. Maintaining healthy hair requires specific products that depend on the type and conditions of hair that the person has. That is why choosing the right products for effective treatment can sometimes be a mission impossible. </p> <br/>
        <p>Welcome to Laura's Beauty Supply, a safe space where you can make your purchases of hair products, it is also a platform where you can receive specialized advice about care and maintenance of your hair, the 7 days a week that will help you in the health and appearance hair.</p><br/>
        <p>We are a young company, the fruit of entrepreneurial women who, that during the Covid-19 pandemic, understood the value of electronic commerce, as well as the lack of knowledge among the population about the basic elements of hair care.</p><br/>
        <p>Our goal is not to be just another online store but rather a national reference store where each client will find specialized and personalized advice about their hair through our experienced specialists who are available online. Our online store offers a wide range of products for all hair types that contain the necessary ingredients to keep your hair healthy on the inside and looking spectacular on the outside. We offer a variety of Shampoo and Conditioner for dry, normal, and oily hair, as well as for coil, curly or straight hair. We also have a wide variety of grow kits for all hair types to stop hair loss and stimulate its growth. In addition, we have specific products for curly hair that soften and define curls. We specialize in organic products with sulfate and paraben free.</p>

        <Link to="/Contact">
            <button className='tbuttonA'>
                Contact Us
            </button>
        </Link>
    </div>
    )
}