

import { FaAnglesLeft } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

const Top = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    console.log("Clicked!");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <div
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 z-[100] cursor-pointer h-12 w-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition duration-300"
      >
        <FaAnglesLeft className="rotate-90 text-xl" />
      </div>
    )
  );
};

export default Top;
