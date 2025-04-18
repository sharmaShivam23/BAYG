import React from "react";
import NavBar from "../../components/NavBar";
import { productData2 } from "../HomePage/homeComponents/dummyData";
import head from "../../assets/head.svg";
import triangle from "../../assets/triangle.svg";
import { productData3 } from "../HomePage/homeComponents/dummyData";
import Carousel from "./ProductCarousel";
import { productData } from "../HomePage/homeComponents/dummyData";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Products = ({img}) => {
  const navigate = useNavigate()
  return (
    <div className="p mt-28 h-auto max-w-[90vw] m-auto py-16">
      {/* first sec */}
      <div className="p flex justify-center w-[90vw]">
        <div className="img h-auto md:h-[55vh] w-full   sm:w-[80vw] sm:flex-row flex-col md:p-16 flex justify-between items-center  shadow-[4px_2px_9px_rgba(0,0,0,1)]">
          <div className="left p-12">
            <div className="txt text-xl md:text-3xl xl:text-5xl font-bold text-black max-w-[100px] tracking-wider">
              BEST QUALITY TOOL
            </div>
            <div className="txt text-xl sm:text-2xl font-bold text-black mt-3">
              Designed to Deliver. Built to Last
            </div>
            <div  className="btn cursor-pointer">
              <Link to="/locateus">
              <button   className="mt-12 bg-[#FA8B02] cursor-pointer text-white text-sm flex justify-center items-center p-4 rounded-xl font-[550]">
                Contact Us
              </button>
              </Link>
            </div>
          </div>

          <div className="ri">
            <img
              src={img}
              className="object-contain p-6 h-[40vh]"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* first end */}

      <div className="head mt-12 mb-4 flex justify-center items-center flex-col">
        <hr className="w-[80vw]" />
        {/* <hr/> */}
        <p className="font-bold text-4xl flex justify-center items-center p-4">
          COMPONENTS
        </p>
        <hr className="w-[80vw]" />
        {/* <hr/> */}
      </div>

      {/* data2 */}
      <div className="data2">
        <div className="cards flex flex-wrap justify-center px-10 items-center gap-12">
          {productData2.map((item, index) => (
            <div
              key={index}
              className="relative shadow-[0px_0px_4px_rgba(0,0,0,1)] w-[253px] h-[250px] bg-white  mt-8  overflow-hidden"
            >
              <div className="flex justify-center items-center h-full">
                <img
                  src={item.img}
                  alt="img"
                  className="object-contain absolute top-2.5 h-40 max-h-full"
                />
              </div>

              <p className="text-sm text-black cursor-pointer hover:bg-[#FA8B02] hover:text-white h-[80px] flex justify-center items-center font-[600] transition-all ease-in-out duration-700 absolute text-left bottom-1  px-12">
                {item.text}
              </p>

              <img
                src={triangle}
                alt="triangle"
                className="absolute bottom-0 right-0 "
              />

              <div className="absolute bottom-0 w-full border-t-[6px] border-[#FA8B02]"></div>
            </div>
          ))}
        </div>
      </div>

     {/* powertools */}
     <div className="data3">
      <p className="flex justify-center items-center">
      <h1 className="text-4xl font-bold text-black py-12">POWER TOOLS</h1>
      </p>
        <div className="cards flex flex-wrap  justify-center px-10 items-center gap-12">
          
          {productData3.map((item, index) => (
            <div
              key={index}
              className="relative shadow-[0px_0px_4px_rgba(0,0,0,1)] w-[290px] h-[350px] bg-white rounded-xl"
            >
              <div className="flex justify-center  items-center h-full">
                <img
                  src={item.img}
                  alt="img"
                  className="object-contain absolute top-2.5 bg-green-300 rounded-xl h-56 max-h-full"
                />
              </div>

              <p className="text-lg mt-2 text-black cursor-pointer   h-[80px] flex justify-center items-center font-[600] transition-all ease-in-out duration-700 absolute text-left bottom-12  px-12">
                {item.text}
              </p>
              <p className="text-sm mt-2 text-black cursor-pointer   h-[80px] flex justify-center items-center font-[600] transition-all ease-in-out duration-700 absolute text-left bottom-1  px-12">
                {item.stext}
              </p>
              
            </div>
          ))}
        </div>
      </div>


      {/* carosuel */}
     <Carousel/>


     {/* best seller */}
     <div className="item">

      <div className="w-[90%] max-w-7xl mx-auto py-10">
       <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Our Product Categories</h2>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {productData.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transition duration-300 hover:shadow-xl"
          >
            {/* Image Section */}
            <div className="md:w-1/3 w-full h-48 md:h-auto">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-2/3 w-full p-4 flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                {product.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>

     </div>


      
    </div>
  );
};

export default Products;
