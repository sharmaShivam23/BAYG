import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pro } from "../pages/HomePage/homeComponents/dummyData";
import { useNavigate } from "react-router-dom";
import { motion , AnimatePresence} from "framer-motion";

export default function NavBar({ setImg }) {
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
      setImg(selectedItem.img);
    }
  };

  return (
    <>
      <div
        className="fixed top-[80px] left-0 h-[4px] bg-[#FFA500] z-[1000]"
        style={{ width: `${scrollWidth}%` }}
      ></div>

      {/* Navbar */}
      <nav className="bg-[#202730] sticky top-0 z-40 backdrop-blur-xl text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[80px]">
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
            <div className="hover:text-orange-400 cursor-pointer transition duration-300 px-3 py-1 rounded-2xl hover:bg-white">
              <select className="cursor-pointer border-none outline-none" onChange={handleChange}>
                <option value="section" className="text-orange-400 border-none outline-none">
                  Products
                </option>
                {pro.map((it, index) => (
                  <option
                    key={index}
                    className="cursor-pointer border-none outline-none  text-orange-400"
                    value={index}
                  >
                    {it.tag}
                  </option>
                ))}
              </select>
            </div>
            <Link
              to="/about"
              className="hover:text-orange-400 cursor-pointer transition duration-300 px-3 py-1 rounded-2xl hover:bg-white"
            >
              About Us
            </Link>
            <Link
              to="/locateus"
              className="hover:text-orange-400 cursor-pointer transition duration-300 px-3 py-1 rounded-2xl hover:bg-white"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="md:hidden transform-all ease-in-out duration-1000 bg-[#202730] font-bold flex justify-center items-center flex-col  px-4 fixed top-20 left-0 w-[100vw] pb-4 space-y-2">
            <Link
              to="/"
              className="block hover:text-orange-400 px-3 py-2 rounded-2xl hover:bg-white"
            >
              Home
            </Link>
            <select className="cursor-pointer border-none ml-14 font-bold " onChange={handleChange}>
              <option value="section" className="text-orange-400 border-none outline-none">
                Products
              </option>
              {pro.map((it, index) => (
                <option
                  key={index}
                  className="cursor-pointer text-orange-400"
                  value={index}
                >
                  {it.tag}
                </option>
              ))}
            </select>
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
             Contact Us
            </Link>
          </motion.div>
        )}
      </nav>
    </>
  );
}
