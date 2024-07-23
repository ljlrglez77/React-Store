import { useState } from "react"
import "./MyCSS.css"
import { Link } from 'react-router-dom'

export function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [comment, setComment] = useState("")
    
    function handleSubmit(){   

        document.getElementById('formul').style.display = 'none';
        document.getElementById('msent').style.display = 'block';
    }

    return(
    <div>        
        
            <div className="myh1Title">
                <h1>Contact Us</h1>            
            </div>
            <div id = "msent">
                <h2>Your message was sent successfully</h2>
                <h3>A representative will contact you in a few</h3>
                <Link to="/">
                    <button className="cartB" >Continue Shopping</button>
                </Link>
            </div>

            <div>           
                <form id='formul'>
                    <h3>Send us an email</h3>
                    <input onChange={(e) => setName(e.target.value)} placeholder="Full Name"/>
                    
                    <input  onChange={(e) => setEmail(e.target.value)} placeholder="Email"/> 
                    
                    <input  onChange={(e) => setSubject(e.target.value)} placeholder="Subject"/> 
                    
                    <input className="myInput" onChange={(e) => setComment(e.target.value)} placeholder="Question/Comment"/> 
                    
                    <button className='tbutton' onClick={() => handleSubmit()}>Send Message</button>
                </form> 
            </div>
        
    </div>
    )
}