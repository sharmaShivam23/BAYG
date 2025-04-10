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
  const [img , setImg] = useState('')

  return (
    <>
    <NavBar  setImg={setImg}/>
    <Routes >
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/products" element={<Products/>}/> */}
      <Route path="/about" element={<About/>}/>
      <Route path="/locateus" element={<ContactUs/>}/>
      <Route path="/termsofuse" element={<Terms/>}/>
      <Route path="/privacypolicy" element={<Privacy/>}/>
      <Route path="/product/transformer" element={<Products img={img}/>}/>
      <Route path="/product/WaterPump" element={<Products img={img}/>}/>
      <Route path="/product/HomeInverter" element={<Products img={img}/>}/>
      <Route path="/product/SolarPanel" element={<Products img={img}/>}/>
      <Route path="/product/cable" element={<Products img={img}/>}/>
      <Route path="/privacypolicy" element={<Privacy/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
