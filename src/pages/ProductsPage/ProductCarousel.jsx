import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import web from "../images/web.png";
// import ui from "../images/ui.png";
// import cloud from "../images/cloud.png";
// import app from "../images/app.png";
import { motion } from "framer-motion";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, 
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  
  };

  const data = [
    {
      img: "/s10.webp",
      // details:
      // "Sameer 22 inch 58cc Chainsaw, SC-58",
      height: "[55vh]",
    },
    {
      img: "/r1.webp",
      // details:
      // "Ahuja 50-15000Hz Microphone, ADM-511",
      height: "[55vh]",
    },
    {
      img: "/r2.webp",
      // details:
      // "Sceptre 12v 1450mm with 1-15mm b",

      height: "[800px]",
    },
    {
      img: "/r3.webp",
      // details:
      // "Sceptre 12v 1450mm with 1-15mm b",
      height: "[800px]",
    },
    {
      img: "/r4.webp",
      // details:
      // "Sceptre 12v 1450mm with 1-15mm b",
      height: "[800px]",
    },
    {
      img: "/r5.webp",
      // details:
      // "Sceptre 12v 1450mm with 1-15mm b",
      height: "[800px]",
    },
    {
      img: "/r6.webp",
      // details:
      // "Sceptre 12v 1450mm with 1-15mm b",
      height: "[800px]",
    },
    {
      img: "/r7.webp",
      // details:
      // "Sceptre 12v 1450mm with 1-15mm b",
      height: "[800px]",
    },
    {
      img: "/r8.webp",
      // details:
      // "Sceptre 12v 1450mm with 1-15mm b",
      height: "[800px]",
    },
    {
      img: "/r9.webp",
      // details:
      // "Sceptre 12v 1450mm with 1-15mm b",
      height: "[800px]",
    },
  ];

  return (
    <>
      <div className="max-w-[88vw]  m-auto   h-[60vh]  flex-col text-white flex justify-center items-center overflow-hidden">
        <div className="h-auto psud border-2 bg-blue-[200px]  text-white sm:p-9 w-full  mx-auto">
        {/* <div className="max-w-[80vw] rounded-3xl m-auto  h-auto "> */}
          <Slider {...settings}>
            {data.map((card, index) => (
           <div key={index}>
                <div
                  key={index}
                  className="w-[270px] h-[320px] flex justify-center items-center bg-white rounded-lg"
                >
                  <div className="flex justify-center   items-center flex-col">
                    <div className="flex justify-center items-center">
                      <img
                        src={card.img}
                        alt=""
                        className="h-56 object-contain"
                      />
                    </div>

                    <div className="txt text-black text-lg font-[550] flex justify-center items-center text-center">
                      {card.details}
                    </div>

                   
            
                  </div>
                </div>
                </div>
            ))}
          </Slider>
        </div>
      </div>
      </>
  );
};

export default Carousel;