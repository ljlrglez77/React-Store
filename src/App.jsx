import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Products } from './pages/Products'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import { useState } from 'react'
import { ShopContextProvider } from './context/shop-context'

function App() {
 
    
  return (        
      <Router>
        <Routes>          
          <Route element={<Layout/>}>          
            <Route path="/" element={<Products />}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Cart" element={<Cart />}/>
            <Route path="/Checkout" element={<Checkout />}/>
          </Route>          
        </Routes>
      </Router> 
    
  )
}

export default App
