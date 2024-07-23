import { ProductCard } from "../components/ProductCard"
import bannerFinal from "../images/banner.jpg"
import React from "react"
import { LISTP } from "../listProducts" 


export function Products() {  
    
        return(
        <>  
            <div className="elBanner">
                <img className='banner' src= {bannerFinal}/>
                
            </div>
            <div>
                {LISTP.map((product) => (<ProductCard data={product}/>)
            )}
            </div>
        </>
    )    
    
    
}