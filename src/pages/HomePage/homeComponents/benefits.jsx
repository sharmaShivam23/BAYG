import React from "react";

const BenefitsSection = () => {
  return (
    <div className="w-full bg-gradient-to-t from-orange-400 to-orange-200 py-16 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text ke Cards */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div className="bg-[#fff3e6] shadow-[4px_4px_10px_rgba(0,0,0,0.2)]  p-6 rounded-lg transform rotate-[-5deg]">
          {/* <div className="bg-[#fff3e6] shadow-[4px_4px_10px_rgba(150, 90, 40, 0.3] shadow-xl p-6 rounded-lg transform rotate-[-5deg]"> */}
            <h3 className="text-lg font-bold mb-3">Benefits and Impact</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Wide Product Range: A one-stop solution for all industrial needs</li>
              <li>Quality Assurance: Sourced from trusted manufacturers</li>
              <li>Competitive Pricing: Best market rates</li>
              <li>Reliable Customer Support: Dedicated service team</li>
              <li>Timely Delivery: Fast and efficient logistics</li>
            </ul>
          </div>
          <div className="bg-[#fff3e6] shadow- p-6 rounded-lg shadow-[4px_4px_10px_rgba(0,0,0,0.2)]  transform rotate-[3deg]">
            <h3 className="text-lg font-bold mb-3">Contract Requirements</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>
                <strong>Legal Requirements:</strong> <br />
                The proposal will comply with all government regulations related to privacy and information security.
              </li>
              <li>
                <strong>Technical Requirements:</strong> <br />
                The contract will list technical specifications, project schedules and maintenance procedures.
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="homePageBenefitsPhoto.png"
            alt="justAnImageHere"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
