import React from "react";
import { productData } from "./dummyData";
import head from "../../../assets/head.svg";
import triangle from "../../../assets/triangle.svg";
import { landingPageData } from "./dummyData";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ProductCategories = () => {
  return (
    <div className="sm:p-16 mt-20">
      <div className="inner bg-[#202730] h-auto relative s sm:p-10 max-w-[85vw] m-auto">
        <div className="img relative">
          <div className="imgd relative flex justify-center items-center">
            <img src={head} className="w-[71vw]  relative" alt="" />
            <div className="txt text-black absolute left-28 hidden sm:flex  justify-evenly items-center">
              <div className="txt text-[#000000] max-[400px]:hidden  font-bold text-xl sm:text-4xl">
                POWER TOOLS
              </div>
            </div>
          </div>

          <div className="txt hidden  sm:flex gap-4 absolute top-15 right-28 text-xl">
            See more <FaArrowAltCircleRight className="mt- text-2xl" />
          </div>
        </div>

        <div className="cards flex flex-wrap justify-center px-10 items-center gap-8">
          {landingPageData.map((item, index) => (
            <div
              key={index}
              className="relative w-[253px] h-[250px] bg-white shadow-lg mt-8  overflow-hidden"
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
      <div className="flex justify-center items-center">
        <div className=" h-[80px] w-[87vw] bg-[#FA8B02]"></div>
      </div>
    </div>
  );
};

export default ProductCategories;

// import React from 'react';
// import {productData} from './dummyData';

// const ProductCategories = () => {
//   return (
//     <div className="w-[90%] max-w-7xl mx-auto py-10">
//       <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">Our Product Categories</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {productData.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row transition duration-300 hover:shadow-xl"
//           >
//             {/* Image Section */}
//             <div className="md:w-1/3 w-full h-48 md:h-auto">
//               <img
//                 src={product.image}
//                 alt={product.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Text Section */}
//             <div className="md:w-2/3 w-full p-4 flex flex-col justify-center">
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
//               <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
//                 {product.details.map((point, index) => (
//                   <li key={index}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductCategories;
