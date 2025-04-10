import React from "react";
import dot from "../../../assets/icon.png";

const Objectives = () => {
  return (
    <>
      <div className="w-[80%] mx-auto h-auto my-10">
        <ul className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
            Objectives
          </h1>

          <div className="r flex justify-evenly  items-center gap-4 sm:gap-10">
            <div className="r flex ">
              <div className="r flex justify-center items-start">
                <div className="left">
                  <div className="img relative h-[400px] w-[50px] rounded-t-2xl flex justify-center">
                    <div className="h-full w-[8px] bg-[#FA8B02]"></div>

                    <img
                      src={dot}
                      alt="dot"
                      className="absolute object-cover top-3  left-1/2 -translate-x-1/2"
                    />

                    <img
                      src={dot}
                      alt="dot"
                      className="absolute object-cover top-5/12  left-1/2 -translate-x-1/2"
                    />
                    <img
                      src={dot}
                      alt="dot"
                      className="absolute object-cover bottom-12  left-1/2 -translate-x-1/2"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="right flex justify-center  max-[500px]:gap-5  gap-14 items-center flex-col">
              <div className="rounded-lg mt-3">
                <h2 className="text-lg sm:text-2xl font-semibold  text-gray-900">
                  Unmatched Quality & Performance
                </h2>
                <p className="text-xs md:text-lg text-gray-700">
                  Our products undergo stringent quality checks to meet industry
                  standards, guaranteeing superior performance, reliability, and
                  long-term value for our customers.
                </p>
              </div>

              <div className="p-rounded-lg">
                <h2 className="text-lg sm:text-2xl font-semibold   text-gray-900">
                  Premium Industrial Products
                </h2>
                <p className="text-xs md:text-lg text-gray-700">
                  We offer a wide range of high-quality industrial products
                  sourced from trusted manufacturers, ensuring durability,
                  efficiency, and top-tier performance for various applications.
                </p>
              </div>

              <div className="p- rounded-lg">
                <h2 className="text-lg sm:text-2xl font-semibold  text-gray-900">
                  Expert Support & Services
                </h2>
                <p className="text-xs md:text-lg text-gray-700">
                  Backed by a team of experienced professionals, we provide
                  expert guidance, technical support, and after-sales services
                  to ensure seamless integration and optimal use of our
                  products.
                </p>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Objectives;
// import React from "react";
// import line from "../../../assets/line.png";
// import dot from "../../../assets/dot.png";

// const Objectives = () => {
//   return (
//     <>
//       <div className="w-[80%] mx-auto my-10">
//         <ul className="space-y-6">
//           <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
//             Objectives
//           </h1>

//           <ul className="p-4 rounded-lg shadow-md ">
//             <h2 className="text-xl font-semibold mb-2 text-gray-900">
//               Unmatched Quality & Performance
//             </h2>
//             <li>
//               <p className="text-gray-700 text-sm md:text-base">
//                 Our products undergo stringent quality checks to meet industry
//                 standards, guaranteeing superior performance, reliability, and
//                 long-term value for our customers.
//               </p>
//             </li>
//           </ul>

//           <ul className="p-4 rounded-lg shadow-md ">
//             <h2 className="text-xl font-semibold mb-2 text-gray-900">
//               Premium Industrial Products
//             </h2>
//             <li>
//               <p className="text-gray-700 text-sm md:text-base">
//                 We offer a wide range of high-quality industrial products
//                 sourced from trusted manufacturers, ensuring durability,
//                 efficiency, and top-tier performance for various application.
//               </p>
//             </li>
//           </ul>

//           <ul className="p-4 rounded-lg shadow-md ">
//             <h2 className="text-xl font-semibold mb-2 text-gray-900">
//               Expert Support & Services
//             </h2>
//             <li>
//               <p className="text-gray-700 text-sm md:text-base">
//                 Backed by a team of experienced professionals, we provide expert
//                 guidance, technical support, and after-sales services to ensure
//                 seamless integration and optimal use of our products.
//               </p>
//             </li>
//           </ul>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Objectives;
