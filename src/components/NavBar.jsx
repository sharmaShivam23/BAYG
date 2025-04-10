
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pro } from "../pages/HomePage/homeComponents/dummyData";
import { useNavigate } from "react-router-dom";

export default function NavBar({setImg}) {
  const [open, setOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);   
    
  };
  console.log(scrollWidth);
  

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  const navigate = useNavigate();

  const handleChange = (e) => {
    const selectedIndex = e.target.value;
    if (selectedIndex !== "section") {
      const selectedItem = pro[selectedIndex];
      navigate(selectedItem.link);
      console.log(selectedItem.link);
      console.log(selectedItem.img);
      setImg(selectedItem.img)
    }
   
    
  };

  return (
    <>
      <div
  className="fixed top-[80px] left-0 h-[4px] bg-[#FFA500] z-[1000]"
  style={{ width: `${scrollWidth}%` }}
></div>

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/logoPhoto.png"
              alt="Logo"
              className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex text-lg space-x-6 font-semibold">
            <Link
              to="/"
              className="hover:text-orange-400 cursor-pointer transition duration-300 px-3 py-1 rounded-2xl hover:bg-white"
            >
              Home
            </Link>
            <div
              className="hover:text-orange-400 cursor-pointer transition duration-300 px-3 py-1 rounded-2xl hover:bg-white"
            >
              {/* Products */}
              {/* <select className="cursor-pointer"
                >
                  <option value="section" className="text-orange-400">Products</option>
                  {pro.map((it,index) => (
                    <Link to={it.link}>
                  <option  key={index} className="cursor-pointer text-orange-400" value={index}>{it.tag}</option>
                  </Link>
                ))}
                </select> */}
                 <select className="cursor-pointer" onChange={handleChange}>
      <option value="section" className="text-orange-400">Products</option>
      {pro.map((it, index) => (
        <option
          key={index}
          className="cursor-pointer text-orange-400"
          value={index}
        >
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden bg-[#111] px-4 pb-4 space-y-2">
            <Link
              to="/"
              className="block hover:text-orange-400 px-3 py-2 rounded-2xl hover:bg-white"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block hover:text-orange-400 px-3 py-2 rounded-2xl hover:bg-white"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block hover:text-orange-400 px-3 py-2 rounded-2xl hover:bg-white"
            >
              About Us
            </Link>
            <Link
              to="/locateus"
              className="block hover:text-orange-400 px-3 py-2 rounded-2xl hover:bg-white"
            >
              Locate Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
