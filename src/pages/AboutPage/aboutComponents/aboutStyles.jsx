import React from 'react';
import { FaBoxOpen, FaShieldAlt, FaHeadset, FaRupeeSign, FaTruck, FaLeaf } from 'react-icons/fa';

const AboutLastSection = () => {
  const features = [
    // {
    //   icon: <FaBoxOpen className="text-white text-4xl" />,
    //   title: 'Wide Product Range',
    //   desc: 'A one-stop solution for all industrial needs',
    // },
    {
      icon: <FaShieldAlt className="text-white text-4xl" />,
      title: 'Quality Assurance',
      desc: 'Sourced from trusted manufacturers',
    },
    {
      icon: <FaHeadset className="text-white text-4xl" />,
      title: 'Reliable Customer Support',
      desc: 'Dedicated service team',
    },
    {
      icon: <FaRupeeSign className="text-white text-4xl" />,
      title: 'Competitive Pricing',
      desc: 'Best market rates',
    },
    {
      icon: <FaTruck className="text-white text-4xl" />,
      title: 'Timely Delivery',
      desc: 'Fast and efficient logistics',
    },
    {
        icon: <FaLeaf className="text-white text-4xl" />,
        title: 'Eco-Friendly Practices',
        desc: 'Committed to sustainable sourcing and packaging',
    },
  ];

  return (
    <>
    <h2 className="text-2xl text-center md:text-3xl font-bold mb-3">Why Choose Us?</h2>
    <section className=" py-12 px-4 md:px-16text-center">
      
      <div className=" max-w-6xl  flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16 mt-2 mx-auto">
      {/* <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3 max-w-6xl mx-auto"> */}
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-[#FA8B02] w-[100px] h-[100px] flex items-center justify-center rounded-full mb-4 shadow-md">
              {feature.icon}
            </div>
            <h3 className="font-bold text-xl sm:text-2xl">{feature.title}</h3>
            <p className="sm:text-lg text-sm font-semibold text-center text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default AboutLastSection;
