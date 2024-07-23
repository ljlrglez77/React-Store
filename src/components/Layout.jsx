import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"
import { Footbar } from "./Footbar"
import "./Footbar.css"
import { ShopContextProvider } from "../context/shop-context"

export function Layout () {
    return (
        <>
         <ShopContextProvider>
            <Navbar/>
            <main>
               <Outlet/> 
            </main>
            <Footbar className="myFootbar"> </Footbar>
         </ShopContextProvider>
        </>
    )
}