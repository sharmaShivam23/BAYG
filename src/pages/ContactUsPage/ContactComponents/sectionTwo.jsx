import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactCards = () => {
  const cardData = [
    {
      icon: <FaMapMarkerAlt size={30} className="text-orange-500" />,
      title: "Our Location",
      content: "P8, 1501 Siddharth Vihar,\nGhaziabad, India",
      dark: true,
    },
    {
      icon: <FaPhoneAlt size={30} className="text-orange-500" />,
      title: "Contact Us",
      content: "+91-7990626780\n+91-8588940423",
      dark: false,
    },
    {
      icon: <FaEnvelope size={30} className="text-orange-500" />,
      title: "Our E-Mail",
      content: "bayg.sales@gmail.com",
      dark: true,
    },
    {
      icon: <FaClock size={30} className="text-orange-500" />,
      title: "Working Hours",
      content: "TIME : 9:00 AM to 5:00PM",
      dark: false,
    },
  ];

  return (
    <div className="w-full bg-[#fdf6ef] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center flex-wrap">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 p-6 rounded-lg shadow-md w-full sm:w-[300px] items-center text-center ${
              card.dark ? "bg-[#1e232f] text-white" : "bg-gray-100 text-black"
            }`}
          >
            <div>{card.icon}</div>
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-sm whitespace-pre-line">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
