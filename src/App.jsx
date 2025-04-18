import { useEffect, useState } from 'react'
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
import Splash from './pages/Splash'
// import { GoToTop } from './components/Top'
import Top from './components/Top'
import { useLocation } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const [img , setImg] = useState('')
  const [splashScreen , setSplash] = useState(true)

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);



  useEffect(() => {
   const time = setTimeout(() => {
      setSplash(false)
   },3000)

   return () => setTimeout(time)
  },[])

 


  return (
    <>
    {splashScreen ? <Splash/> : (
      <>
    <NavBar  setImg={setImg}/>
    <Top/>
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Products/>}/>
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
  )}
    </>
  )
}

export default App
