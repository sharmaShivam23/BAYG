import React from 'react';
import { FaBoxOpen, FaShieldAlt, FaHeadset, FaRupeeSign, FaTruck, FaLeaf } from 'react-icons/fa';

const AboutLastSection = () => {
  const features = [
    {
      icon: <FaBoxOpen className="text-white text-2xl" />,
      title: 'Wide Product Range',
      desc: 'A one-stop solution for all industrial needs',
    },
    {
      icon: <FaShieldAlt className="text-white text-2xl" />,
      title: 'Quality Assurance',
      desc: 'Sourced from trusted manufacturers',
    },
    {
      icon: <FaHeadset className="text-white text-2xl" />,
      title: 'Reliable Customer Support',
      desc: 'Dedicated service team',
    },
    {
      icon: <FaRupeeSign className="text-white text-2xl" />,
      title: 'Competitive Pricing',
      desc: 'Best market rates',
    },
    {
      icon: <FaTruck className="text-white text-2xl" />,
      title: 'Timely Delivery',
      desc: 'Fast and efficient logistics',
    },
    {
        icon: <FaLeaf className="text-white text-2xl" />,
        title: 'Eco-Friendly Practices',
        desc: 'Committed to sustainable sourcing and packaging',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-orange-100 to-orange-200 py-12 px-4 md:px-16 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Why Choose Us?</h2>
      <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-3 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-full mb-4 shadow-md">
              {feature.icon}
            </div>
            <h3 className="font-semibold text-lg">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutLastSection;
