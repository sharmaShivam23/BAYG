import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {  Routes , Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import NavBar from './components/NavBar' ;
import Products from './pages/ProductsPage/Products'
import About from './pages/AboutPage/About'
import ContactUs from './pages/ContactUsPage/ContactUs'
import Footer from './components/Footer'
import Terms from './pages/TermsPage/Terms'
import Privacy from './pages/PrivacyPolicyPage/Privacy'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
      <Route path="/termsofuse" element={<Terms/>}/>
      <Route path="/privacypolicy" element={<Privacy/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
