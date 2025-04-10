import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-[#202730] flex justify-center items-center h-[80px] sticky top-0 lef z-50 backdrop-blur-xl text-white shadow-md">

      <div className="nav flex justify-end items-center">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/logoPhoto.png"
              alt="Logo"
              className="h-18 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Desktop Menui */}

      <div className="hidden md:flex text-xl space-x-6 items-center">
        <Link
          to="/"
          className="hover:text-orange-400 transition-all ease-out duration-500 delay-0 text-lg font-[590] px-3 py-1 rounded-2xl hover:bg-white"
        >
          Home
        </Link>
        <Link
          to="/products"
          className="hover:text-orange-400 transition-all ease-out duration-500 delay-0 font-[590] text-lg px-3 py-1 rounded-2xl hover:bg-white"
        >
          Products
        </Link>
        <Link
          to="/about"
          className="hover:text-orange-400 transition-all ease-out duration-500 delay-0 font-[590] text-lg px-3 py-1 rounded-2xl hover:bg-white"
        >
          About Us
        </Link>
        <Link
          to="/locateus"
          className="hover:text-orange-400 transition-all ease-out duration-500 delay-0 font-[590] text-lg px-3 py-1 rounded-2xl hover:bg-white"
        >
          Locate Us
        </Link>
      </div>
      </div>

      <div
        className={`fixed   bottom-0  h-10 left-0 bg-[#FA8B02] rounded-r-2xl`}
        style={{ width: `${scrollWidth}%` }}
      ></div>

      {/* Mobile menu button */}

      <div className="md:hidden">
        <button onClick={() => setOpen(!open)} className="focus:outline-none">
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

      {/* Mobile Menu Droopdown */}

      {open && (
        <div className="md:hidden bg-[#111] px-4 pb-4 space-y-2">
          <Link
            to="/"
            className="block hover:text-orange-400 text-sm px-3 py-1 rounded-2xl hover:bg-white"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block hover:text-orange-400 text-sm px-3 py-1 rounded-2xl hover:bg-white"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block hover:text-orange-400 text-sm px-3 py-1 rounded-2xl hover:bg-white"
          >
            About Us
          </Link>
          <Link
            to="/locateus"
            className="block hover:text-orange-400 text-sm px-3 py-1 rounded-2xl hover:bg-white"
          >
            Locate Us
          </Link>
        </div>
      )}
    </nav>
  );
}
